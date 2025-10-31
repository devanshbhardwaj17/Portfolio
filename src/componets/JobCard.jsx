import React from 'react'


export default function JobCard(props) {
  return (
    <div className=' p-2 w-full sm:w-[48%] my-2 sm:my-0 bg-gray-800 bg-opacity-50 rounded-md shadow-xl flex gap-3'>
      <div className=' flex justify-center items-center'>
        <img src={props.image} alt="" className=' sm:w-24 w-28'/>
      </div>
      <div className=' p-2'>
        <h2 className='text-xl font-semibold text-white font-sans'>{props.title}</h2>
        <p className=' text-white font-sans'>{props.dis}</p>
      </div>
    </div>
  )
}
