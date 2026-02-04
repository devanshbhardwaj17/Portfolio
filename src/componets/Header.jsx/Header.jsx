import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    //Done
  return (
    <div className=' w-full flex flex-wrap justify-between items-end pl-3 '>
        <div className=' mt-3 md:mt-0'>
            <p className=' md:text-3xl text-2xl font-sans font-semibold text-white  bg-gray-800 bg-opacity-90 px-5 rounded-lg'>Portfolio</p>
        </div>
        <div className=' lg:w-[50%] w-[60%] hidden md:block bg-gray-800 bg-opacity-90 py-3 shadow-sm shadow-[#565656] rounded-bl-lg'>
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
