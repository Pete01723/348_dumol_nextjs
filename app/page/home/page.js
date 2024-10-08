import React from 'react'
import homestyle from "@/app/style/homepage.module.css"

export const HomePage = () => {
  return (
    <div>
        HomePage
        <h1 className = {`${homestyle.title}`}>
            This is Home Page
        </h1>
        <div className ={homestyle.container}>
            Wow magic
        </div>
    </div>
  )
}
