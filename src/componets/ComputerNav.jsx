import React from 'react'
import { FaBeer, FaMobile, FaMobileAlt, FaSnapchat, FaSnapchatGhost } from "react-icons/fa";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
    FaYoutube,
    FaGithub,
    FaWhatsapp,
    FaCalendar,
    FaRegCalendarAlt,
    FaMapMarkerAlt,
    FaLocationArrow,
} from "react-icons/fa";
import { FaEnvelope, FaRegEnvelope } from "react-icons/fa";
import pic3 from '../Photo/Mypic2.jpeg'

export default function ComputerNav() {
    return (
        <div className=' bg-gray-700 bg-opacity-30 w-[20%] h-[730px] p-4 my-16 shadow-xl rounded-lg overflow-hidden sticky top-16'>
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
                <div className=' flex items-center gap-4'>
                    <FaRegEnvelope className=' text-5xl text-white bg-gray-500 bg-opacity-40 px-2 rounded-xl shadow-xl' />
                    <p className=' text-white'><span className=' text-lg font-semibold'>Email</span><br /><span>devanshb661@gamil.com</span></p>
                </div>
                <div className=' flex items-center gap-4 mt-5'>
                    <FaMobileAlt className=' text-5xl text-white bg-gray-500 bg-opacity-40 p-2 rounded-xl shadow-xl' />
                    <p className=' text-white'><span className=' text-lg font-semibold'>Mobile</span><br /><span>+91 7820061773</span></p>
                </div>
                <div className=' flex items-center gap-4 mt-5'>
                    <FaRegCalendarAlt className=' text-5xl text-white bg-gray-500 bg-opacity-40 p-2 rounded-xl' />
                    <p className=' text-white'><span className=' text-lg font-semibold'>Date of Birth</span><br /><span>25-07-2005</span></p>
                </div>
                <div className=' flex items-center gap-4 my-5'>
                    <FaMapMarkerAlt className=' text-5xl text-white bg-gray-500 bg-opacity-40 p-2 rounded-xl' />
                    <p className=' text-white'><span className=' text-lg font-semibold'>Location</span><br /><span>Kasganj-207403, UP</span></p>
                </div>
                <div className=' mt-8 flex justify-center gap-4 '>
                    <a href="https://x.com/17_devansh?t=2YR4UjxtPAXxlUQq8U0lwA&s=09">
                        <FaTwitter className=' shadow-xl text-white hover:bg-blue-700 bg-gray-500 bg-opacity-40 text-3xl p-1 rounded-full' />
                    </a>
                    <a href="https://www.instagram.com/devanshbhardwaj17?igsh=MWptNjk5eDdjcjYwYg==">
                        <FaInstagram className=' shadow-xl text-white hover:bg-gradient-to-br from-[#feda75] via-[#d62976] to-[#4f5bd5] bg-gray-500 bg-opacity-40 text-3xl p-1 rounded-full' />
                    </a>
                    <a href="https://www.linkedin.com/in/devansh-bhardwaj29?utm_source=share_via&utm_content=profile&utm_medium=member_android">
                        <FaLinkedinIn className=' shadow-xl text-white hover:bg-blue-700 hover:bg-opacity-100 bg-gray-500 bg-opacity-40 text-3xl p-1 rounded-full' />
                    </a>
                    <a href="https://github.com/devanshbhardwaj17">
                        <FaGithub className=' shadow-xl text-white hover:bg-black bg-gray-500 bg-opacity-40 text-3xl p-1 rounded-full' />
                    </a>
                    <a href="https://wa.me/7820061773">
                        <FaWhatsapp className=' shadow-xl text-white hover:bg-green-600 bg-gray-500 bg-opacity-40 text-3xl p-1 rounded-full' />
                    </a>
                </div>
            </div>
        </div>
    )
}
