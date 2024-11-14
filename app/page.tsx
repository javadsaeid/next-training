import Link from "next/link"
import ProductCard from "./users/components/ProductCard"
import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";

export default async function Home() {
    const session = await getServerSession(authOptions)
    return (
        <main>
            <h1>Hello {session && session.user?.name} </h1>
            <Link href="/users">Users</Link>
            <Link href="/users/new">New Users</Link>
            <ProductCard/>
        </main>
    )
}
