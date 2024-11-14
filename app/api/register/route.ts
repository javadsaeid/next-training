import {NextRequest, NextResponse} from "next/server";
import {z} from "zod";
import prisma from "@/prisma/client";
import bcrypt from "bcrypt";

const schema = z.object({
    email: z.string().email(),
    password: z.string()
})
export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = schema.safeParse(body);

    if (!validation.success) {
        return NextResponse.json(validation.error.errors, {status: 400});
    }

    const user = await prisma.user.findUnique({where: { email: body.email}})
    if (user) {
        return NextResponse.json("User already exist", {status: 400})
    }

    const hashedPass = await bcrypt.hash(body.password, 10);

    const newUser = await prisma.user.create({
        data: {
            email: body.email,
            hashedPassword: hashedPass,
        }
    })
    return NextResponse.json({email: newUser.email}, {status: 201})
}