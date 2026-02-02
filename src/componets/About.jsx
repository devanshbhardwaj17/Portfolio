import React, { useState } from 'react'
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

    const slides = [
        {
            image: `${ Praveen }`,
            name: "Praveen Shakya",
            city: "Gonthra",
            massage: "Devansh is a very good web desiner and developer.",
        },
        {
            image: `${ Nikhil }`,
            name: "Praveen Shakya",
            city: "Gonthra",
            massage: "Devansh is a very good web desiner and developer.",
        },
        {
            image: `${ Vishal }`,
            name: "Vishal Yadav",
            city: "Kasganj",
            massage: "Devansh is a very good web desiner and developer.",
        },
        {
            image:`${Abhay}`,
            name: "Abhay Pratap",
            city: "Nagriya",
            massage: "Devansh is a very good web desiner and developer.",
        },
        
    ];

    const [index, setIndex] = useState(0);
    const nextSlide = () => {
        setIndex((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };


    return (
        <div className=' py-2 md:px-5 px-2 font-sans'>
            <h2 className=' text-3xl font-bold text-white'>About Me</h2>
            <div className='w-[10%] p-0.5 bg-[rgb(255,215,0)] my-3 rounded-lg'></div>
            <p className=' text-white font-thin text-lg my-7'>I am a <span className=' text-white font-semibold'>Frontend Web Developer</span> from <span className=' text-white font-semibold'>Kasganj Uttar Pradesh, India</span>. I build the projects using <span className=' text-white font-semibold'>HTML, CSS, JavaScript, React, TailwindCSS</span>.I enjoy turning complex problems into simple, beautiful and intuitive designs. <br /> <br />My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way.</p>
            <h2 className=' text-3xl font-bold text-white mb-2'>What I'm Doing</h2>
            <div className=' flex flex-wrap gap-3'>
                <JobCard
                    image={Photo1}
                    title="Web Desing"
                    value="The most modern and high-quality design made at a professional level."
                />
                <JobCard
                    image={Photo2}
                    title="Web Develpoment"
                    value="High-quality development of sites at the professional level."
                />
                <JobCard
                    image={Photo3}
                    title="Photography"
                    value="I make high-quality photos of any category at a professional level."
                />
            </div>
            <h2 className=' text-3xl mt-7 font-bold text-white'>Testimonials</h2>
            <div className=' hidden lg:flex flex-wrap gap-3 my-3 justify-center'>
                {slides.map(a=>(
                    <ReviewCard
                        name={a.name}
                        image={a.image}
                        massage={a.massage}
                        city={a.city}
                    />
                ))}
            </div>
            <div className=' lg:hidden flex justify-center items-center py-5'>
                <div className=' w-[320px] bg-gray-800 bg-opacity-50 rounded-xl shadow-xl relative overflow-hidden py-3'>
                    <div
                        className=" flex transition-transform duration-500 ease-in-out"
                        style={{ transform: `translateX(-${index * 100}%)` }}
                    >
                        {slides.map((slide, i) => (
                            <div
                                key={i}
                                className={`min-w-full h-full  overflow-hidden py-2 px-2`}
                            >
                                <div className=' flex justify-center'>
                                    <img src={slide.image} alt="" className=' w-[170px] rounded-lg shadow-lg'/>
                                </div>
                                <p className=' text-center mt-4 text-yellow-200 font-semibold text-2xl'>{slide.name}</p>
                                <p className=' text-white text-center text-lg'>City : {slide.city}</p>
                                <p className=' mt-2 text-xl font-semibold text-white'>Review :</p>
                                <p className=' text-white font-[cursive] text-lg'>"{slide.massage}"</p>
                            </div>
                        ))}
                    </div>
                    <button
                        onClick={prevSlide}
                        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full hover:bg-black"
                    >
                        ❮
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 text-white px-3 py-1 rounded-full hover:bg-black"
                    >
                        ❯
                    </button>
                </div>
            </div>
        </div>
    )
}
