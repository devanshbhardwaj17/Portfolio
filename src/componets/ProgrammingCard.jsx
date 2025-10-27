import React from 'react'

export default function ProgrammingCard(props) {
    return (
        <div className=' p-2  bg-gray-400 bg-opacity-20 rounded-md shadow-xl w-[30%] flex justify-center gap-3 items-center my-4'>
            <p className={` text-${props.size} text-yellow-200 `}>{props.logo}</p>
            <p className=' text-xl font-sans text-yellow-200 font-semibold'>{props.name}</p>
        </div>
    )
}
