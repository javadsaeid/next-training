import {NextRequest, NextResponse} from "next/server";
import schema from "@/app/api/products/schema";

export function GET() {
    return NextResponse.json([
        {id: 1, name: "milk", price: 1},
        {id: 2, name: "cake", price: 3.4},
    ])
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = schema.safeParse(body);

    if (!validation.success) {
        return NextResponse.json({error: validation.error.errors, status: 400});
    }

    return NextResponse.json({id: 1, name: body.name, price: body.price});
}