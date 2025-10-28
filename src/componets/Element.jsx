import React from 'react'
import { FaMobile } from 'react-icons/fa'

export default function Element(props) {
  return (
    <div className=' w-full p-1 flex gap-5 my-2'>
      <div className=' p-2 rounded-xl shadow-xl bg-gray-500 bg-opacity-40'>
        <p className=' text-white text-4xl'>{props.icon}</p>
      </div>
      <div className=' overflow-auto'>
         <p className=' text-white'><span className=' text-lg font-semibold'>{props.title}</span><br /><span>{props.value}</span></p>
      </div>
    </div>
  )
}
