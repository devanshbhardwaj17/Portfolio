import React from 'react'

export default function Myskill() {
    //Done
    return (
        <div>
            <h2 className=' text-yellow-200 text-2xl font-sans font-bold mt-7 mb-5'>My Skills</h2>
            <div className=' bg-gray-800 bg-opacity-50 shadow-xl py-5 px-2 mb-5 rounded-lg'>
                <h3 className=' font-semibold text-xl text-white'>Web Design<span className=' text-base text-yellow-200 float-end'>80%</span> </h3>
                <div className=' bg-gray-600 bg-opacity-85 rounded-xl overflow-hidden mt-2'>
                    <div className=' bg-yellow-200 p-1 w-[80%] rounded-xl'></div>
                </div>
                <h3 className=' font-semibold text-xl text-white mt-4'>Web Development<span className=' text-base  text-yellow-200 float-end'> 90%</span> </h3>
                <div className=' bg-gray-600 bg-opacity-85 rounded-xl overflow-hidden mt-2'>
                    <div className=' bg-yellow-200 p-1 w-[90%] rounded-xl'></div>
                </div>
                <h3 className=' font-semibold text-xl text-white mt-4'>Graphic Design<span className=' text-base  text-yellow-200 float-end'> 70%</span> </h3>
                <div className=' bg-gray-600 bg-opacity-85 rounded-xl overflow-hidden mt-2'>
                    <div className=' bg-yellow-200 p-1 w-[70%] rounded-xl'></div>
                </div>
                <h3 className=' font-semibold text-xl text-white mt-4'>Photography<span className=' text-base  text-yellow-200 float-end'> 85%</span> </h3>
                <div className=' bg-gray-600 bg-opacity-85 rounded-xl overflow-hidden my-2'>
                    <div className=' bg-yellow-200 p-1 w-[85%] rounded-xl'></div>
                </div>
            </div>
        </div>
    )
}
