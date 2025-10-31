import React from 'react'

export default function ElementSecond(props) {
    return (
        <div className=' md:w-[40%] sm:w-[20%] hidden my-2 rounded-lg sm:flex gap-3 items-center' >
            <div className=' p-2 rounded-xl shadow-xl md:w-[25%] w-full bg-gray-500 bg-opacity-40 flex items-center justify-center'>
                <p className=' text-white text-4xl'>{props.icon}</p>
            </div>
            <div className=' overflow-auto hidden md:block'>
                <p className=' text-white text-sm'><span className=' text-xl font-semibold'>{props.title}</span><br /><span>{props.value}</span></p>
            </div>
        </div>
    )
}
