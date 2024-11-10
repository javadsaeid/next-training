import {NextRequest, NextResponse} from "next/server";
import schema from "@/app/api/products/schema";

interface Props {
    params: {
        id: number;
    }
}

export async function PUT(request:NextRequest, {params}: Props) {
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