import React, { Suspense } from 'react';
import UserTable from './UserTable';
import Link from 'next/link';

interface Props {
  searchParams: {sortOrder: string}
}

const Page = async({searchParams: {sortOrder}}: Props) => {
  // const { sortOrder = 'name' } = await searchParams;
  return (
    <>
      <h1>User List</h1>
      <Link href="/users/new" className='btn'>New User</Link>
      {/* <Suspense fallback={<p>Loading...</p>}> */}
        <UserTable sortOrder={sortOrder}/>
      {/* </Suspense> */}
    </>
  ) 
}

export default Page
