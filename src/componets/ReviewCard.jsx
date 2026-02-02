import React from 'react'

export default function ReviewCard(props) {
    return (
        <div className=' bg-gray-800 bg-opacity-50 p-2 rounded-lg w-[45%] shadow-xl flex flex-wrap gap-2'>
            <img src={props.image} alt="" className=' w-[30%] rounded-md shadow' />
            <div className=' w-[60%] font-sans'>
                <p className=' text-yellow-200 font-semibold text-2xl'>{props.name}</p>
                <p className=' text-gray-200'>City : {props.city}</p>
                <p className=' text-lg text-white font-semibold'>Review :</p>
                <p className=' text-gray-200 font-[cursive]'>"{props.massage}"</p>
            </div>
        </div>
    )
}
