import React from 'react'

export default function ReviewCard(props) {
    return (
        <div className='p-2 bg-gray-800 bg-opacity-50 rounded-md shadow-xl w-[45%] h-[170px] px-3 '>
            <div className='flex gap-4  items-center'>
                <div className=' w-[25%] h-[70px] rounded-md overflow-hidden'>
                    <div className='bg-white h-full w-full overflow-hidden'>
                        <img src={props.pic} alt="" className=' w-full'/>
                    </div>
                </div>
                <div className='w-[70%] overflow-hidden'>
                    <p className=' text-xl font-bold font-sans text-yellow-200'>{props.name}</p>
                    <p className=' text-white'>City : {props.city}</p>
                </div>
            </div>
        <div className=' my-1'>
            <p className=' text-white font-semibold text-lg font-sans'>Review :</p>
            <p className=' text-gray-300 font-sans'>{props.massage}</p>
        </div>
        </div>
    )
}
