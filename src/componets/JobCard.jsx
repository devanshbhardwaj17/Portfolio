import React from 'react'


export default function JobCard(props) {
  return (
    <div className=' md:w-[45%] w-full bg-gray-800 bg-opacity-50 rounded-md shadow-xl px-2 py-1'>
      <div className=' flex gap-4 items-center'>
        <img src={props.image} alt="" className=' md:w-[100px] w-[60px] ' />
        <div>
          <h2 className=' text-2xl font-semibold text-white'>{props.title}</h2>
          <p className=' text-gray-200 text-sm md:text-base'>{props.value}</p>
        </div>
      </div>
    </div>
  )
}
