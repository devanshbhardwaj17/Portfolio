import React from 'react'
import { FaArrowAltCircleRight, FaArrowRight, FaBook, FaBookDead, FaCircle, FaHandPointRight, FaRegBookmark } from 'react-icons/fa'
import { FaBookAtlas } from 'react-icons/fa6'
import Myskill from './Myskill'
import Frontend from './Frontend'
import ProgrammingLanage from './ProgrammingLanage'

export default function Resume() {
    return (
        <div className='py-2 px-5 font-sans'>
            <h2 className=' text-3xl font-bold text-white'>Resume</h2>
            <div className='w-[10%] p-0.5 bg-[rgb(255,215,0)] my-3 rounded-lg'></div>
            <div className=''>
                <div className=' flex items-center gap-4 mt-7'>
                    <FaBook className=' text-5xl text-white bg-gray-500 bg-opacity-40 p-2 rounded-xl shadow-xl' />
                    <p className=' text-white text-2xl font-bold'>Education</p>
                </div>
                <div className=' border-l-2 border-white px-5 pt-5 mx-5'>
                    <div className=' flex items-center gap-4 mt-7'>
                        <FaCircle className=' text-2xl text-yellow-100  bg-gray-500 bg-opacity-40 p-1 rounded-full shadow-xl' />
                        <p className=' font-sans font-semibold text-white'><span className=' font-bold text-xl'>Bachelor of Computer Applications ( BCA )</span><br /><span className=' text-yellow-200'>2022-2025</span><br />BIMT College, Univercity- MJPRU</p>
                    </div>
                    <div className=' flex items-center gap-4 mt-7'>
                        <FaCircle className=' text-2xl text-yellow-100  bg-gray-500 bg-opacity-40 p-1 rounded-full shadow-xl' />
                        <p className=' font-sans font-semibold text-white'><span className=' font-bold text-xl'>Intermediate</span><br /><span className=' text-yellow-200'>2021-2022</span><br />SSPD Inter College, Kasganj</p>
                    </div>
                    <div className=' flex items-center gap-4 mt-7'>
                        <FaCircle className=' text-2xl text-yellow-100  bg-gray-500 bg-opacity-40 p-1 rounded-full shadow-xl' />
                        <p className=' font-sans font-semibold text-white'><span className=' font-bold text-xl'>High School </span><br /><span className=' text-yellow-200'>2019-2020</span><br />SSPD Inter College, Kasganj</p>
                    </div>
                </div>
                <Myskill />
                <Frontend />
                <ProgrammingLanage />
            </div>
        </div>
    )
}
