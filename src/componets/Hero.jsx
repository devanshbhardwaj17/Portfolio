import React from 'react'
import Desbord from './Desbord'
import MyPic from '../Photo/Mypic2.jpeg'
import Navbar from './Navbar/Navbar'
import Dashboard from './Dashboard/Dashboard'
import { NavLink } from 'react-router-dom'

export default function Hero() {
  return (
    <div className=' w-full md:py-7 p-2 py-6 bg-gradient-to-tl from-black to-gray-500 flex flex-wrap justify-center gap-5'>
      <Navbar />
      <div className=' w-full bg-gray-800 py-2 sticky top-0 md:hidden shadow-lg rounded-b-md'>
        <ul className=' flex justify-evenly items-center font-sans'>
          <NavLink
            to="/"
            className={({ isActive }) => ` ${isActive ? "text-yellow-200 text-xl font-semibold" : " text-white text-lg"}`}
          >
            <li>About</li>
          </NavLink>

          <NavLink
            to="/resume"
            className={({ isActive }) => ` ${isActive ? "text-yellow-200 text-xl font-semibold" : " text-white md:text-lg text-base"}`}
          >
            <li>Resume</li>
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) => ` ${isActive ? "text-yellow-200 md:text-xl text-lg font-semibold" : " text-white md:text-lg text-base"}`}
          >
            <li>Projects</li>
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => ` ${isActive ? "text-yellow-200 md:text-xl text-lg font-semibold" : " text-white md:text-lg text-base"}`}
          >
            <li>Contact</li>
          </NavLink>
        </ul>
      </div>
      <Dashboard />

    </div>
  )
}
