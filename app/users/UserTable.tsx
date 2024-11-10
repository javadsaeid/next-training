import Link from 'next/link';
import React, { use } from 'react';
import {sort} from 'fast-sort';
interface Geo  {
    lat: string; 
    lng: string;
  }
  interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo
  }
  interface User {
      id: number;
      name: string;
      username: string;
      email: string
      address: Address
  }

  interface Props {
    sortOrder: string
  }
  
const UserTable = async ({sortOrder}: Props) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data: User[] = await res.json();
    const sortedUsers = sort(data).asc(sortOrder === 'email' ? user => user.email : user => user.name)
  return (
    <table className='table table-bordered'>
        <thead>
          <tr className='text-xl text-purple-500'>
            <th><Link href="/users?sortOrder=name">Name</Link></th>
            <th><Link href="/users?sortOrder=email">Eamil</Link></th> 
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map(r => <tr key={r.id}>
            <td>{r.name}</td>
            <td>{r.email}</td>
          </tr>)}
        </tbody>
      </table>
  )
}

export default UserTable
