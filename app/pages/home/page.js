import Homecard from '@/app/components/card/page'
import Homefooter from '@/app/components/footer/page'
import Homeheader from '@/app/components/header/page'
import prj1pic from '@/app/images/project1.png'
import prj2pic from '@/app/images/project2.png'
import prj3pic from '@/app/images/project3.png'
import React from 'react'

export const Homepage = () => {
  return (
    <div>
        <Homeheader/>
        <div className='text-center mt-10'>
          <div className='border w-3/4 inline-block mx-auto p-8 bg-gradient-to-b from-neutral-950 from-75% to-purple-600'>
            <h1 className='text-6xl'>THIS IS WHO I AM</h1>
          </div>
          <div className='grid grid-cols-3 mt-10 gap-2 w-3/4 mx-auto'>
            <Homecard
              imgsrc={prj1pic}
              alttext="Thesis"
              text="Video Game"
            />
            <Homecard
              imgsrc={prj2pic}
              alttext="MobDev"
              text="Mobile Development"
            />
            <Homecard
              imgsrc={prj3pic}
              alttext="Website"
              text="Web Design"
            />
          </div>
        </div>
        <Homefooter/>
    </div>
  )
}