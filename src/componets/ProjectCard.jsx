import React from 'react'
import { FaGithub, FaLink } from 'react-icons/fa'

export default function ProjectCard(props) {
    return (
        <div className=' lg:w-[48%] w-full bg-gray-800 bg-opacity-50 rounded-md shadow-xl p-2 text-white hover:bg-white hover:text-black hover:scale-105 duration-300'>
            <img src={props.image} alt="" className=' w-full rounded-md shadow-lg' />
            <p className=' text-2xl font-semibold'>{props.title}</p>
            <p className=' mt-2'>{props.dis}</p>
            <div className=' w-full flex mt-3 gap-2 text-2xl'>
                <a href={props.repolink}><FaGithub /></a>
                <a href={props.hostlink}><FaLink /></a>
            </div>
        </div>
    )
}
