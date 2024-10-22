import Homefooter from '@/app/components/footer/page'
import Homeheader from '@/app/components/header/page'
import Image from 'next/image'
import Profile from '@/app/images/profile.png'
import React from 'react'

const Aboutpage = () => {
  return (
    <div>
        <Homeheader/>
        <div className='text-center my-10'>
          <div className='border w-3/4 inline-block mx-auto p-8 bg-gradient-to-b from-neutral-950 from-75% to-purple-600'>
            <h1 className='text-6xl'>ABOUT</h1>
          </div>
          <div className='border w-3/4 mx-auto mt-10 p-8 overflow-auto'>
            <Image
              className='float-start border rounded-full'
              src={Profile}
              alt='Profile Picture'
              width={300}
              height={300}
            />
            <p className='text-left text-xl'>
              My name is Peter Louis Dumol. I am from Roxas City, the seafood capital of the Philippines! I am experienced in C# development and currently I am learning
              full-stack development using React and Tailwind, and mobile application development using Kotlin. My current hobby is creating mods for other video games 
              such as minecraft. My goal is to start a video game company that tells stories about western visayas history and culture.
            </p>
          </div>
        </div>
        <Homefooter/>
    </div>
  )
}

export default Aboutpage