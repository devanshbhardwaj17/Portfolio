import React from 'react'
import JobCard from './JobCard'
import Photo1 from '../Photo/icon-design.svg'
import Photo2 from '../Photo/icon-dev.svg'
import Photo3 from '../Photo/icon-photo.svg'
import ReviewCard from './ReviewCard'
import Nikhil from '../Photo/Nikhil.jpeg'
import Praveen from '../Photo/Praveen.jpeg'
import Vishal from '../Photo/Vishal.jpeg'
import Abhay from '../Photo/Abhay.jpeg'






export default function About() {
    return (
        <div className=' py-2 px-5 font-sans'>
            <h2 className=' text-3xl font-bold text-white'>About Me</h2>
            <div className='w-[10%] p-0.5 bg-[rgb(255,215,0)] my-3 rounded-lg'></div>
            <p className=' text-white font-thin text-lg my-7'>I am a <span className=' text-white font-semibold'>Frontend Web Developer</span> from <span className=' text-white font-semibold'>Kasganj Uttar Pradesh, India</span>. I build the projects using <span className=' text-white font-semibold'>HTML, CSS, JavaScript, React, TailwindCSS</span>.I enjoy turning complex problems into simple, beautiful and intuitive designs. <br /> <br />My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way.</p>
            <h2 className=' text-2xl font-bold text-white mb-2'>What I'm Doing</h2>
            <div className=' p-2 flex flex-wrap justify-between mt-2'>
                <JobCard
                    image={Photo1}
                    title="Web Design"
                    dis="The most modern and high-quality design made at a professional level."
                />
                <JobCard
                    image={Photo2}
                    title="Web Development"
                    dis="High-quality development of sites at the professional level."
                />
            </div>
            <div className=' p-2 flex flex-wrap mb-5'>
                <JobCard
                    image={Photo3}
                    title="Photography"
                    dis="I make high-quality photos of any category at a professional level."
                />
            </div>
            <h2 className=' text-2xl font-bold text-white mb-2'>Testimonials</h2>
            <div className=' my-3 p-2 overflow-hidden flex justify-around flex-wrap'>
                <ReviewCard
                    name="Nikhil Sharma"
                    massage="Devansh is a very good developer. He build the extra odinery web sites."
                    city="Budaun"
                    pic={Nikhil}
                />
                <ReviewCard
                    name="Praveen Shakya"
                    massage="Devansh is a very good developer. He build the extra odinery web sites."
                    city="Budaun"
                    pic={Praveen}
                />

            </div>
            <div className=' my-3 p-2 overflow-hidden flex justify-around flex-wrap'>
                <ReviewCard
                    name="Abhay Pratap"
                    massage="Devansh is a very good developer. He build the extra odinery web sites."
                    city="Nagariya"
                    pic={Abhay}
                />
                <ReviewCard
                    name="Vishal Yadav"
                    massage="Devansh is a very good developer. He build the extra odinery web sites."
                    city="Kasganj"
                    pic={Vishal}
                />
            </div>
        </div>
    )
}
