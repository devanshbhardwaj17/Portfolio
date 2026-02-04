import React from 'react'
import {  FaBook,} from 'react-icons/fa'
import Myskill from './Myskill'
import Frontend from './Frontend'
import ProgrammingLanage from './ProgrammingLanage'

export default function Resume() {
    //Done
    return (
        <div className='py-2 px-2 font-sans'>
            <h2 className=' text-3xl font-bold text-white'>Resume</h2>
            <div className='w-[10%] p-0.5 bg-[rgb(255,215,0)] my-3 rounded-lg'></div>
            <div className=''>
                <div className=' flex items-center gap-4 mt-7'>
                    <FaBook className=' text-5xl text-white bg-gray-500 bg-opacity-40 p-2 rounded-xl shadow-xl' />
                    <p className=' text-white text-2xl font-bold'>Education</p>
                </div>
                <div className=' border-l-2 border-white pl-2 pt-5 ml-5'>
                    <div className=' flex gap-4 mt-7'>
                        <div>
                            <div className='p-1.5 bg-gray-500 bg-opacity-40 rounded-full mt-1'>
                                <div className=' p-2 bg-yellow-100 rounded-full'>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className=' text-xl font-semibold text-white'>Bachelor of Computer Application (BCA)</p>
                            <p className=' font-semibold text-yellow-200'>2022-2025</p>
                            <p className=' text-white'>BIMT College Budaun, Univercity- MJPRU</p>
                        </div>
                    </div>
                    <div className=' flex gap-4 mt-7'>
                        <div>
                            <div className='p-1.5 bg-gray-500 bg-opacity-40 rounded-full mt-1'>
                                <div className=' p-2 bg-yellow-100 rounded-full'>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className=' text-xl font-semibold text-white'>Intermediate</p>
                            <p className=' font-semibold text-yellow-200'>2021-2022</p>
                            <p className=' text-white'>SSPD Inter College, Kasganj - UP Board of Education</p>
                        </div>
                    </div>
                    <div className=' flex gap-4 mt-7'>
                        <div>
                            <div className='p-1.5 bg-gray-500 bg-opacity-40 rounded-full mt-1'>
                                <div className=' p-2 bg-yellow-100 rounded-full'>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p className=' text-xl font-semibold text-white'>High School</p>
                            <p className=' font-semibold text-yellow-200'>2019-2020</p>
                            <p className=' text-white'>SSPD Inter College, Kasganj - UP Board of Education</p>
                        </div>
                    </div>
                    
                </div>
                <Myskill />
                <Frontend />
                <ProgrammingLanage />
            </div>
        </div>
    )
}
