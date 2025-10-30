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
import ReviewCard2 from './ReviewCard2'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function About() {

    const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

    return (
        <div className=' py-2 px-5 font-sans'>
            <h2 className=' text-3xl font-bold text-white'>About Me</h2>
            <div className='w-[10%] p-0.5 bg-[rgb(255,215,0)] my-3 rounded-lg'></div>
            <p className=' text-white font-thin text-lg my-7'>I am a <span className=' text-white font-semibold'>Frontend Web Developer</span> from <span className=' text-white font-semibold'>Kasganj Uttar Pradesh, India</span>. I build the projects using <span className=' text-white font-semibold'>HTML, CSS, JavaScript, React, TailwindCSS</span>.I enjoy turning complex problems into simple, beautiful and intuitive designs. <br /> <br />My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way.</p>
            <h2 className=' lg:text-2xl text-4xl font-bold text-white mb-2'>What I'm Doing</h2>
            <div>
                <div className=' sm:p-2 flex flex-wrap justify-between mt-2'>
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
                <div className=' sm:p-2 flex flex-wrap sm:mb-5 mb-0'>
                    <JobCard
                        image={Photo3}
                        title="Photography"
                        dis="I make high-quality photos of any category at a professional level."
                    />
                </div>
            </div>
            <h2 className=' lg:text-2xl font-bold text-white mb-2 text-4xl'>Testimonials</h2>
            <div className=' hidden md:block'>
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
                <div className='my-3 p-2 overflow-hidden flex justify-around flex-wrap'>
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
            <div className=' w-full sm:p-3 py-3 flex flex-col justify-center items-center md:hidden'>
                <div className=' relativ overflow-hidden sm:w-[75%] w-full h-auto'>
                    <div className=' flex transition-transform duration-700 ease-in-out'
                    >
                        <ReviewCard2
                            name="Praveen Shakya"
                            massage="Devansh is a very good developer. He build the extra odinery web sites."
                            city="Budaun"
                            pic={Praveen}
                        />
                        <ReviewCard2
                            pic={Nikhil}
                            name="Nikhil Sharma"
                            massage="Devansh is a very good developer. He build the extra odinery web sites"
                            city="Budaun"
                        />
                        <ReviewCard2
                            name="Abhay Pratap"
                            massage="Devansh is a very good developer. He build the extra odinery web sites."
                            city="Nagariya"
                            pic={Abhay}
                        />
                        <ReviewCard2
                            name="Vishal Yadav"
                            massage="Devansh is a very good developer. He build the extra odinery web sites."
                            city="Kasganj"
                            pic={Vishal}
                        />
                    </div>
                </div>
                <div className=' flex absolute w-full justify-between px-[10%]'>
                    <button className=' text-white bg-slate-600 opacity-70 font-semibold rounded-full p-1'
                    onClick={prevSlide}><ChevronLeft /></button>
                    <button className=' text-white bg-slate-600 opacity-70 font-semibold rounded-full p-1'
                    onClick={nextSlide}><ChevronRight /></button>


                </div>
            </div>
        </div>
    )
}
