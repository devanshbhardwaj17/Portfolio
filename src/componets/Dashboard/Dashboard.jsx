import React from 'react'
import Navbar from '../Navbar'
import Header from '../Header.jsx/Header'
import { Outlet } from 'react-router-dom'

export default function Dashboard() {
    return (
        <div className='  bg-gray-700 bg-opacity-30 w-full md:w-[90%] lg:w-[60%] shadow-xl rounded-lg overflow-hidden'>
            <Header/>
            <Outlet/>
        </div>
    )
}
