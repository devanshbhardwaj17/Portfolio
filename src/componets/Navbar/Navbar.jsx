import React from 'react'
import MyPic from '../../Photo/Mypic2.jpeg'
import ComputerNav from './ComputerNav'
import SocialMedia from '../SocialMedia/SocialMedia'
import { BsBriefcase, BsBriefcaseFill } from 'react-icons/bs'
import { FaFileAlt } from 'react-icons/fa'


export default function Navbar() {
    return (
        <div className=' w-full md:w-[90%] lg:w-[20%]'>
            <div className=' w-full lg:sticky top-7 p-4 pt-9 shadow-xl rounded-lg overflow-hidden bg-gray-700 bg-opacity-30' >
                <div className=' block md:flex flex-wrap gap-3 lg:block'>
                    <div className=' flex justify-center mb-3 md:w-[30%] lg:w-full w-full'>
                        <img src={MyPic} alt="" className=' h-[220px] rounded-md shadow-xl' />
                    </div>
                    <div className=' md:w-[65%] lg:w-full w-full'>
                        <h1 className=' text-4xl font-semibold text-white lg:text-center text-center md:text-start'>Devansh</h1>
                        <p className=' lg:text-center text-center md:text-start my-3'><span className=' bg-gray-500 bg-opacity-50 px-4 text-white rounded-lg shadow-lg py-0.5'>Web Developer</span></p>
                        <div className=' my-2 flex flex-wrap justify-center gap-3'>
                            <a href="https://www.linkedin.com/in/devansh-bhardwaj29?utm_source=share_via&utm_content=profile&utm_medium=member_android" className=' flex items-center text-lg gap-2 bg-yellow-200 font-semibold px-2 rounded-xl shadow-2xl'><BsBriefcaseFill className=' text-2xl'/>Hire Me</a>
                            <a href="/MyResume.pdf" download className=' flex items-center text-lg gap-2 bg-yellow-200 font-semibold px-2 rounded-xl shadow-2xl'><FaFileAlt/>Resume</a>

                        </div>
                        <div className=' hidden md:block lg:hidden'>
                            <ComputerNav />
                        </div>
                        <div className=' hidden md:block lg:hidden'>
                            <SocialMedia />
                        </div>
                    </div>
                </div>

                <div className=' border mt-6'></div>
                <div className=' md:hidden lg:block'>
                    <ComputerNav />
                </div>
                <div className=' md:hidden lg:block'>
                    <SocialMedia />
                </div>

            </div>
            
        </div>

    )
}
