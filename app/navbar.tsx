'use client'
import Link from 'next/link'
import React from 'react'
import {useSession} from "next-auth/react";

const NavBar = () => {
    const {status, data: session} = useSession();
    return (
        <div className='flex bg-slate-200 p-5'>
            <Link href="/" className='mr-5'>Home</Link>
            <Link href="/users" className='mr-5'>Users</Link>
            <Link href="/admin" className='mr-5'>Admin</Link>
            {status === 'loading' && <div className="loading loading-spinner"></div>}
            {status === 'authenticated' && <div>{session?.user?.name} <Link className="ml-3" href="/api/auth/signout">LogOut</Link></div>}
            {status === 'unauthenticated' &&  <Link href="/api/auth/signin" className='mr-5'>Login</Link>}
        </div>
    )
}

export default NavBar
