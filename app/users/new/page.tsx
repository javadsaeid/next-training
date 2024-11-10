'use client'

import { useRouter } from "next/navigation"

export default function Page() {
    const router = useRouter();
    return (
        <button className="btn btn-primary" onClick={() => router.push("/users")}>Create</button>
    )
}