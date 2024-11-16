
import Link from 'next/link'
import React from 'react'

const Contact = () => {
  return (
    <div className='full h-screen bg-red-200'>
      <h2 className='text-2xl text-center'>Hey! this is the contact page.</h2>
      <div>
      <Link href={"/"}>
        
        <button className='flex mx-auto mt-16 bg-red-400 text-white border-3 py-2 px-8 focus:outline-square'>Visit to Home</button>
        </Link>
      </div>
    </div>
  )
}

export default Contact
