import React from 'react'


export default function JobCard(props) {
  return (
    <div className=' p-2 w-[48%] bg-gray-800 bg-opacity-50 rounded-md shadow-xl flex gap-3'>
      <div className=' p-2 '>
        <img src={props.image} alt="" className=' h-20'/>
      </div>
      <div className=' p-2'>
        <h2 className=' text-xl font-semibold text-white font-sans'>{props.title}</h2>
        <p className=' text-white font-sans'>{props.dis}</p>
      </div>
    </div>
  )
}
