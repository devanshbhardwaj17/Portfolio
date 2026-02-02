import React from 'react'

export default function ProgrammingCard(props) {
    return (
        <div className=' w-full md:w-[45%] pl-12 lg:w-[30%] p-2 bg-gray-400 bg-opacity-20 rounded-md shadow-lg flex flex-wrap gap-4'>
            <p className=' text-yellow-200 text-2xl'>{props.logo}</p>
            <p className=' text-yellow-200 font-sans text-xl font-semibold'>{props.name}</p>
        </div>
    )
}
