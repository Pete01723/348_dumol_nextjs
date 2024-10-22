import React from 'react'
import Image from 'next/image'

const Homecard = ({text, imgsrc, alttext}) => {
  return (
    <div className='border-2 rounded p-8'>
        <Image
        className='block mx-auto mt-10 p-4'
        src = {imgsrc}
        alt = {alttext}
        />
        <h1 className='mt-10'>{text}</h1>
    </div>
  )
}

export default Homecard