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
import SocialMediaElement from './SocialMediaElement';
import ElementSecond from './ElementSecond';

export default function ComputerNav() {
    return (
        <div className=' bg-gray-700 bg-opacity-30 w-[90%] lg:w-[20%] lg:h-[730px] p-4 shadow-xl rounded-lg overflow-hidden lg:sticky lg:top-16 mt-7'>
            <div className='py-3 border-b-2 lg:block sm:flex gap-5'>
                <div className=' flex justify-center sm:w-[30%] lg:w-full w-full'>
                    <div className=' h-[220px] w-[200px] bg-gray-800 bg-opacity-30 rounded-xl shadow-2xl overflow-hidden bg-cover bg-center' style={{ backgroundImage: `url(${pic3})` }}>
                    </div>
                </div>
                <div className=' font-sans my-3 sm:w-[70%] lg:w-full w-full'>
                    <h1 className=' text-4xl font-semibold text-white lg:text-center sm:text-start text-center'>Devansh</h1>
                    <p className=' lg:text-center sm:text-start text-center my-3'><span className=' bg-gray-500 bg-opacity-50 px-4 text-white rounded-lg shadow-lg py-0.5'>Web Developer</span></p>
                    <div className=' w-full flex flex-wrap justify-around lg:hidden'>
                        <ElementSecond
                            icon={<FaRegEnvelope />}
                            title="Email"
                            value="devanshb661@gmail.com"
                        />
                        <ElementSecond
                            icon={<FaMobileAlt />}
                            title="Mobile"
                            value="+91 7820061773"
                        />
                        <ElementSecond
                            icon={<FaRegCalendarAlt />}
                            title="Date of Birth"
                            value="25-07-2005"
                        />
                        <ElementSecond
                            icon={<FaMapMarkerAlt />}
                            title="Location"
                            value="Kasganj, Uttar Pradesh"
                        />
                    </div>
                    <div className=' md:hidden  mt-4 hidden sm:flex justify-center gap-4 overflow-hidden'>
                        <SocialMediaElement
                            link="https://x.com/17_devansh?t=2YR4UjxtPAXxlUQq8U0lwA&s=09"
                            icon={<FaTwitter />}
                            color="bg-blue-700"
                        />
                        <SocialMediaElement
                            link="https://www.instagram.com/devanshbhardwaj17?igsh=MWptNjk5eDdjcjYwYg=="
                            icon={<FaInstagram />}
                            color="bg-gradient-to-br from-[#feda75] via-[#d62976] to-[#4f5bd5]"
                        />
                        <SocialMediaElement
                            link="https://www.linkedin.com/in/devansh-bhardwaj29?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                            icon={<FaLinkedinIn />}
                            color="blue-700"
                        />
                        <SocialMediaElement
                            link="https://github.com/devanshbhardwaj17"
                            icon={<FaGithub />}
                            color="bg-black"
                        />
                        <SocialMediaElement
                            link="https://wa.me/7820061773"
                            icon={<FaWhatsapp />}
                            color="bg-green-600"
                        />
                    </div>
                </div>
            </div>
            <div className=''>
                <div className=' flex flex-wrap sm:hidden lg:block justify-center gap-5'>
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
                </div>
                <div className=' mt-4 flex sm:hidden md:flex flex-wrap justify-center gap-4 '>
                    <SocialMediaElement
                        link="https://x.com/17_devansh?t=2YR4UjxtPAXxlUQq8U0lwA&s=09"
                        icon={<FaTwitter />}
                        color="bg-blue-700"
                    />
                    <SocialMediaElement
                        link="https://www.linkedin.com/in/devansh-bhardwaj29?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                        icon={<FaLinkedinIn />}
                        color="bg-blue-700"
                    />
                    <SocialMediaElement
                        link="https://github.com/devanshbhardwaj17"
                        icon={<FaGithub />}
                        color="bg-black"
                    />
                    <SocialMediaElement
                        link="https://wa.me/7820061773"
                        icon={<FaWhatsapp />}
                        color="bg-green-600"
                    />
                </div>
            </div>

        </div>
    )
}
