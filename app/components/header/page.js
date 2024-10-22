import React from 'react'
import Link from 'next/link'

const Homeheader = () => {
  return (
    <div className='container mx-auto mt-10'>
        <ul className='flex justify-center text-center gap-8'>
            <li className='basis-1/4 border-b-2 text-2xl'><Link href="/pages/home">Home</Link></li>
            <li className='basis-1/4 border-b-2 text-2xl'><Link href="/pages/about">About</Link></li>
            <li className='basis-1/4 border-b-2 text-2xl'>Contact</li>
        </ul>
    </div>
  )
}

export default Homeheader