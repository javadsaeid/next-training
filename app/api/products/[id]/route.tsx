import {NextRequest, NextResponse} from "next/server";
import schema from "@/app/api/products/schema";
import exp from "node:constants";
import prisma from "@/prisma/client";

interface Props {
    params: {
        id: string;
    }
}

export async function GET(request: NextRequest, {params}: Props) {
    const product = await prisma.product.findUnique({
        where: {
            id: parseInt(params.id)
        }
    });

    if (!product) {
        return NextResponse.json('Product not found', {status: 404});
    }

    return NextResponse.json(product);
}
//todo: complete put and delete
export async function PUT(request:NextRequest, {params}: Props) {
   const body = await request.json();

   if (body.id !== params.id) {
       return NextResponse.json("Invalid action", {status: 400});
   }

   if (body.id > 10) {
       return NextResponse.json("User not found", {status: 400});
   }

   const validation = schema.safeParse(body);

   if (!validation.success) {
       return NextResponse.json(validation.error.errors, {status: 400})
   }

   return NextResponse.json(body)
}

export async function DELETE(request:NextRequest, {params}: Props) {
    const body = await request.json();

    if (body.id !== params.id) {
        return NextResponse.json({error: "Invalid action", status: 400});
    }

    if (body.id > 10) {
        return NextResponse.json({error: "User not found", status: 403});
    }

    const validation = schema.safeParse(body);

    if (!validation.success) {
        return NextResponse.json(validation.error.errors, {status: 400})
    }

    return NextResponse.json(body)
}