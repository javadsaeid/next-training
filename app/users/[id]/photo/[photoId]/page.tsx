import React from 'react'
interface Props {
    params: {id: number, photoId: number}
}
const page = ({params: {id, photoId}}: Props) => {
  return (
    <div>
      user id is: {id} with photoId: {photoId}
    </div>
  )
}

export default page
