import React from 'react'

export default function ProgrammingCard(props) {
    return (
        <div className=' p-2  bg-gray-400 bg-opacity-20 rounded-md shadow-xl md:w-[30%] sm:w-[45%] w-full flex justify-center sm:gap-3 gap-6 items-center md:my-4 my-2'>
            <p className={` text-${props.size} text-yellow-200 `}>{props.logo}</p>
            <p className=' text-xl font-sans text-yellow-200 font-semibold'>{props.name}</p>
        </div>
    )
}
