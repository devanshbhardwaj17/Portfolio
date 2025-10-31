import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className=' flex justify-between items-center'>
            <div className=' px-4 '>
                <h1 className=' text-3xl font-sans font-semibold text-white  bg-gray-800 bg-opacity-90 px-5 rounded-lg'>Portfolio</h1>
            </div>
            <div className='  bg-gray-800 bg-opacity-90 md:w-[50%] w-[60%] float-end rounded-bl-xl py-3 shadow-sm shadow-[#565656]'>
                <ul className=' flex justify-evenly items-center font-sans'>
                    <NavLink
                    to="/"
                    className={({isActive})=>` ${isActive ? "text-yellow-200 md:text-xl text-lg font-semibold" : " text-white md:text-lg text-base"}`}
                    >
                        <li>About</li>
                    </NavLink>
                    
                    <NavLink
                    to="/resume"
                    className={({isActive})=>` ${isActive ? "text-yellow-200 md:text-xl text-lg font-semibold" : " text-white md:text-lg text-base"}`}
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
