import React from 'react'

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

const Page = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data: User[] = await res.json();
  return (
    <>
    <h1 className='text-2xl text-secondary font-bold'>User List</h1>
      <table className='table table-bordered'>
        <thead>
          <tr className='text-xl text-purple-500'>
            <th>name</th>
            <th>email</th> 
          </tr>
        </thead>
        <tbody>
          {data.map(r => <tr key={r.id}>
            <td>{r.email}</td>
            <td>{r.name}</td>
          </tr>)}
        </tbody>
        
      </table>
    </>
  ) 
}

export default Page
