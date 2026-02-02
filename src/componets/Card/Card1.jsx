import React from 'react'

export default function Card1(props) {
    return (
        <div className=' w-full md:w-auto lg:w-full flex-wrap flex gap-3 overflow-hidden'>
            <div className='  bg-gray-500 bg-opacity-40 text-white p-1 px-2 text-4xl rounded-lg shadow-lg'>
                {props.icon}
            </div>
            <div className=' overflow-auto md:hidden lg:block'>
                <p className=' text-white text-sm'><span className=' text-xl font-semibold'>{props.title}</span><br /><span>{props.value}</span></p>
            </div>
        </div>
    )
}
