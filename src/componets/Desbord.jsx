import React from 'react'
import Navbar from './Navbar'
import About from './About'
import Resume from './Resume'
import Conctact from './Conctact'
import { Outlet } from 'react-router-dom'

export default function Desbord() {
  return (
    <div className='  bg-gray-700 bg-opacity-30 w-[90%]  md:w-[60%] mt-16 shadow-xl rounded-lg overflow-hidden'>
        <Navbar/>
        <Outlet/>
        <p className=' text-yellow-200 text-center mb-6 text-lg font-semibold'><span className=' px-4 py-1 bg-black rounded-xl shadow-xl '>All Rights Are Reserved By - Devansh</span></p>
    </div>
  )
}
