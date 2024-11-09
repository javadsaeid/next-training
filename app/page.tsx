import Link from "next/link"
import ProductCard from "./users/components/ProductCard"

export default function Home() {
  return (
    <main>
        <h1>Hello world </h1>
        <Link href="/users">Users</Link>
        <Link href="/users/new">New Users</Link>
        <ProductCard />
    </main>
  )
}
