'use client'

import Error from 'next/error'
import React from 'react'

interface Props {
    error: Error,
    reset: () => void
}
const ErrorPage = ({error, reset}: Props) => {
    console.log(error)
  return (
    <>
      <div className='alert alert-warning mb-2'>An unexpected error accured.</div>
      <button className='btn btn-sm btn-secondary' onClick={() => reset()}>Retry</button>
    </>
  )
}

export default ErrorPage
