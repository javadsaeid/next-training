import {NextRequest, NextResponse} from "next/server";
import schema from "@/app/api/products/schema";
import prisma from "@/prisma/client";

export async function GET() {
    const products = await prisma.product.findMany()

    return NextResponse.json(products)
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = schema.safeParse(body);

    if (!validation.success) {
        return NextResponse.json({error: validation.error.errors, status: 400});
    }

    const product = await prisma.product.findFirst({
        where: {
            name: body.name
        }
    });

    if (product) {
        return NextResponse.json({error: 'Product already exist'}, {status: 403});
    }

    const newProduct = await prisma.product.create({
        data: {
            name: body.name,
            price: body.price
        }
    })

    return NextResponse.json(newProduct);
}