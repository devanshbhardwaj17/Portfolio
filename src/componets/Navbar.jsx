import { ChevronLeft } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className=' flex flex-wrap justify-between items-center'>
            <div className=' px-4 mt-3'>
                <h1 className=' sm:text-3xl text-2xl font-sans font-semibold text-white  bg-gray-800 bg-opacity-90 px-5 rounded-lg'>Portfolio</h1>
            </div>
            <div className=' bg-gray-800 bg-opacity-90 md:w-[50%] sm:w-[60%] w-full float-end sm:rounded-bl-xl sm:py-3 shadow-sm shadow-[#565656] mt-2 sm:mt-0 mx-3 py-1 rounded-2xl'>
                <ul className=' flex justify-evenly items-center font-sans'>
                    <NavLink
                    to="/"
                    className={({isActive})=>` ${isActive ? "text-yellow-200 text-xl font-semibold" : " text-white text-lg"}`}
                    >
                        <li>About</li>
                    </NavLink>
                    
                    <NavLink
                    to="/resume"
                    className={({isActive})=>` ${isActive ? "text-yellow-200 text-xl font-semibold" : " text-white md:text-lg text-base"}`}
                    >
                    <li>Resume</li>
                    </NavLink>

                    <NavLink
                    to="/projects"
                    className={({isActive})=>` ${isActive ? "text-yellow-200 md:text-xl text-lg font-semibold" : " text-white md:text-lg text-base"}`}
                    >
                    <li>Projects</li>
                    </NavLink>
                    <NavLink
                    to="/contact"
                    className={({isActive})=>` ${isActive ? "text-yellow-200 md:text-xl text-lg font-semibold" : " text-white md:text-lg text-base"}`}
                    >                    
                    <li>Contact</li>
                    </NavLink>
                </ul>
            </div>
        </div>
    )
}
