import React from 'react'

export default function ReviewCard(props) {
    return (
        <div className='  bg-gray-800 bg-opacity-50 p-2 rounded-lg w-[45%] shadow-xl'>
            <div className=' flex flex-wrap gap-4'>
                <div className=' w-[30%] h-full rounded-lg overflow-hidden'>
                    <img src={props.pic} alt="" className=' rounded-lg shadow-xl' />
                </div>
                <div className=' font-sans w-[60%]'>
                    <h4 className=' text-yellow-200 text-2xl font-semibold'>{props.name}</h4>
                    <p className=' text-gray-100'>City : {props.city}</p>
                    <p className=' text-white text-xl font-semibold mt-1'>Review :</p>
                <p className=' text-gray-100'>{props.massage}</p>
                </div>
            </div>
            <div className=' mt-2 px-2 hidden'>
                <p className=' text-white text-xl font-semibold mt-1'>Review :</p>
                <p className=' text-gray-100'>{props.massage}</p>
            </div>
        </div>
    )
}
