import React from 'react'
import { FaBeer, FaCalendarAlt, FaMobile, FaMobileAlt } from "react-icons/fa";
import {
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
    FaGithub,
    FaWhatsapp,
    FaCalendar,
    FaRegCalendarAlt,
    FaMapMarkerAlt,
    FaLocationArrow,
} from "react-icons/fa";
import { FaEnvelope, FaRegEnvelope } from "react-icons/fa";
import pic3 from '../Photo/Mypic2.jpeg'
import Element from './Element';

export default function ComputerNav() {
    return (
        <div className=' bg-gray-700 bg-opacity-30 w-[20%] h-[730px] p-4 shadow-xl rounded-lg overflow-hidden sticky top-16'>
            <div className='py-3 border-b-2'>
                <div className=' flex justify-center'>
                    <div className=' h-[220px] w-[200px] bg-gray-800 bg-opacity-30 rounded-xl shadow-2xl overflow-hidden bg-cover bg-center' style={{ backgroundImage: `url(${pic3})` }}>
                    </div>
                </div>
                <div className=' font-sans my-3'>
                    <h1 className=' text-3xl font-semibold text-white text-center'>Devansh</h1>
                    <p className=' text-center my-2'><span className=' bg-gray-500 bg-opacity-50 px-4 text-white rounded-lg shadow-lg py-0.5'>Web Developer</span></p>
                </div>
            </div>
            <div className=' py-3'>

                <Element
                    icon={<FaRegEnvelope />}
                    title="Email"
                    value="devanshb661@gmail.com"
                />
                <Element
                    icon={<FaMobileAlt />}
                    title="Mobile"
                    value="+91 7820061773"
                />
                <Element
                    icon={<FaRegCalendarAlt />}
                    title="Date of Birth"
                    value="25-07-2005"
                />
                <Element
                    icon={<FaMapMarkerAlt />}
                    title="Location"
                    value="Kasganj, Uttar Pradesh"
                />
                <div className=' mt-8 flex flex-wrap justify-center gap-4 '>
                    <div className='bg-gray-500 bg-opacity-40 hover:bg-blue-700 p-2 rounded-full shadow-2xl'>
                        <a href="https://x.com/17_devansh?t=2YR4UjxtPAXxlUQq8U0lwA&s=09">
                            <FaTwitter className='  text-white  text-2xl' />
                        </a>
                    </div>
                    <div className='bg-gray-500 bg-opacity-40 hover:bg-gradient-to-br from-[#feda75] via-[#d62976] to-[#4f5bd5] p-2 rounded-full shadow-2xl'>
                        <a href="https://www.instagram.com/devanshbhardwaj17?igsh=MWptNjk5eDdjcjYwYg==">
                            <FaInstagram className='  text-white  text-2xl' />
                        </a>
                    </div>
                    <div className='bg-gray-500 bg-opacity-40 hover:bg-blue-700 p-2 rounded-full shadow-2xl'>
                        <a href="https://www.linkedin.com/in/devansh-bhardwaj29?utm_source=share_via&utm_content=profile&utm_medium=member_android">
                            <FaLinkedinIn className='  text-white  text-2xl' />
                        </a>
                    </div>
                    <div className='bg-gray-500 bg-opacity-40 hover:bg-black p-2 rounded-full shadow-2xl'>
                        <a href="https://github.com/devanshbhardwaj17">
                            <FaGithub className='  text-white  text-2xl' />
                        </a>
                    </div>
                    <div className='bg-gray-500 bg-opacity-40 hover:bg-green-600 p-2 rounded-full shadow-2xl'>
                        <a href="https://wa.me/7820061773">
                            <FaWhatsapp className='  text-white  text-2xl' />
                        </a>
                    </div>

                </div>
            </div>
        </div>
    )
}
