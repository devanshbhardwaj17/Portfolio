import React from 'react'

export default function ReviewCard2(props) {
  return (
    <div className=' p-2 bg-gray-800 bg-opacity-50 rounded-xl shadow-xl font-sans w-full flex-shrink-0'>
        <div className=' w-full flex justify-center overflow-hidden mt-4'>
            <img src={props.pic} alt="" className=' sm:w-[340px] w-[90%] h-[300px] sm:h-[350px] rounded-xl shadow-2xl' />
        </div>
        <div className=' mt-2'>
            <p className=' text-center text-4xl text-yellow-200 font-semibold'>{props.name}</p>
            <p className=' text-center text-gray-100 text-xl'>City : {props.city}</p>
            <p className=' text-xl text-gray-100 my-2 px-3'><span className=' text-2xl text-white font-semibold'>Review :</span> <br />{props.massage}</p>
        </div>
    </div>
  )
}
