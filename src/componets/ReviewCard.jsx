import React from 'react'

export default function ReviewCard(props) {
    return (
        <div className='p-2 bg-gray-800 bg-opacity-50 rounded-md shadow-xl sm:w-[45%] w-full px-3 my-3 sm:my-0'>
            <div className='flex gap-4 sm:items-center'>
                <div className=' sm:w-[25%] w-[40%] h-full rounded-md overflow-hidden'>
                    <div className='bg-white sm:h-full w-full overflow-hidden'>
                        <img src={props.pic} alt="" className=' w-full'/>
                    </div>
                </div>
                <div className=' sm:w-[70%] w-[50%] overflow-hidden'>
                    <p className=' sm:text-xl text-3xl font-bold font-sans text-yellow-200'>{props.name}</p>
                    <p className=' text-white text-lg sm:text-base'>City : {props.city}</p>
                    <p className=' text-white font-semibold text-xl font-sans sm:hidden mt-5'>Review :</p>
            <p className=' text-gray-300 font-sans sm:hidden'>{props.massage}</p>
                </div>
            </div>
        <div className=' my-1 sm:block hidden'>
            <p className=' text-white font-semibold text-lg font-sans'>Review :</p>
            <p className=' text-gray-300 font-sans'>{props.massage}</p>
        </div>
        </div>
    )
}
