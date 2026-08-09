import React, { useState } from 'react'
import JobCard from './JobCard'
import Photo1 from '../Photo/icon-design.svg'
import Photo2 from '../Photo/icon-dev.svg'
import Photo3 from '../Photo/icon-photo.svg'

export default function About() {

    //Done
    return (
        <div className=' py-2 md:px-5 px-2 font-sans'>
            <h2 className=' text-3xl font-bold text-white'>About Me</h2>
            <div className='w-[10%] p-0.5 bg-[rgb(255,215,0)] my-3 rounded-lg'></div>
            <p className=' text-white font-thin text-lg my-7'>I am a <span className=' text-white font-semibold'>Frontend Web Developer</span> from <span className=' text-white font-semibold'>Kasganj Uttar Pradesh, India</span>. I build the projects using <span className=' text-white font-semibold'>HTML, CSS, JavaScript, React, TailwindCSS</span>. I enjoy turning complex problems into simple, beautiful and intuitive designs. <br /> <br />My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way.</p>
            <h2 className=' text-3xl font-bold text-white mb-2'>What I'm Doing</h2>
            <div className=' flex flex-wrap gap-3'>
                <JobCard
                    image={Photo1}
                    title="Web Design"
                    value="The most modern and high-quality design made at a professional level."
                />
                <JobCard
                    image={Photo2}
                    title="Web Development"
                    value="High-quality development of sites at the professional level."
                />
                <JobCard
                    image={Photo3}
                    title="Photography"
                    value="I make high-quality photos of any category at a professional level."
                />
            </div>
        </div>
    )
}
