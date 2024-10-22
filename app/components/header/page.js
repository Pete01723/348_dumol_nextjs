import React from 'react'

const Homeheader = () => {
  return (
    <div className='container mx-auto mt-10'>
        <ul className='flex justify-center text-center gap-8'>
            <li className='basis-1/4 border-b-2 text-2xl'>Home</li>
            <li className='basis-1/4 border-b-2 text-2xl'>About</li>
            <li className='basis-1/4 border-b-2 text-2xl'>Contact</li>
        </ul>
    </div>
  )
}

export default Homeheader