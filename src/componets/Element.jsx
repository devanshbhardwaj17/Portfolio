import React from 'react'
import { FaMobile } from 'react-icons/fa'

export default function Element(props) {
  return (
    <div className=' lg:w-full md:w-[45%] sm:w-[45%] w-[15%] p-1 flex sm:gap-5 my-2 justify-center lg:justify-start'>
      <div className=' p-2 rounded-xl shadow-xl bg-gray-500 bg-opacity-40 flex items-center'>
        <p className=' text-white text-4xl'>{props.icon}</p>
      </div>
      <div className=' overflow-auto hidden sm:block'>
         <p className=' text-white'><span className=' text-lg font-semibold'>{props.title}</span><br /><span>{props.value}</span></p>
      </div>
    </div>
  )
}
