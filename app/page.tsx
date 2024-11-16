

"use Client"
import Link from 'next/link'

import Footer from './footer/page'

import React from 'react'

const Home = () => {
   
  
  return (
    <div className='full h-screen bg-red-200'>
      <div className='bg-red-300 h-12'>
      <div className='text-black flex justify-between items-center'>
       <h1 className='text-4xl m-2.5' >Navbar</h1>
     <ul className='flex gap-4 mr-6'>
       <li className='hover:text-white'><Link href={"/"} >Home</Link></li>
       <li className='hover:text-white'><Link href={"/about"} >About</Link></li>
       <li className='hover:text-white'><Link href={"/contact"}>Contact</Link></li>
       </ul>
       
       
       
</div>
      </div>

      <div>
        <h1 className='flex justify-center text-2xl'> Hey! this is the home page.</h1>
      </div>

    <div>
      <div>
        <Link href={"/about"}>
        
        <button className='flex mx-auto mt-16 bg-red-400 text-white border-2 py-2 px-6 focus:outline-square'>Visit to About</button>
        </Link>
      </div>
      <div>
      <Link href={"/contact"}>
        
        <button className='flex mx-auto mt-8 bg-red-400 text-white border-2 py-2 px-5 focus:outline-square'>Visit to Contact </button>
        </Link>
        <Footer/>
        
      </div>
      <div/>

    
    </div>
      
    </div>
    


  )
}

export default Home
