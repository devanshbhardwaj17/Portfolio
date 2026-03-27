import React, { useState } from 'react'

export default function Card1(props) {
    const [open, setOpen] = useState(false)
    //Done
    return (
        <div className=' w-full md:w-auto lg:w-full flex-wrap flex gap-3 overflow-hidden' onClick={() => { setOpen(s => !s) }}>
            <div className='  bg-gray-500 bg-opacity-40 text-white p-1 px-2 text-4xl rounded-lg shadow-lg'>
                {props.icon}
            </div>
            <div className=' overflow-auto md:hidden lg:block'>
                <p className=' text-white text-sm'><span className=' text-xl font-semibold'>{props.title}</span><br /><span>{props.value}</span></p>
            </div>
            <div className=' hidden md:block lg:hidden'>
                <div className={` absolute py-2 px-3 bg-gray-500 text-white left-[37.5%] rounded-md shadow-lg ${open ? " block" : " hidden"}`}>
                    <p className=' text-2xl flex gap-2 items-center font-semibold'>{props.icon}{props.title}</p>
                    <p className=' text-lg'>{props.value}</p>
                </div>
            </div>

        </div>
    )
}
