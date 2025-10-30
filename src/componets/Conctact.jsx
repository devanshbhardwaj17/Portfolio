import React from 'react'
import { FaFileAlt, FaMapMarkerAlt, FaPaperPlane, } from 'react-icons/fa'
export default function Conctact() {
    return (
        <>
            <div className='py-2 px-5 font-sans'>
                <h2 className=' text-3xl font-bold text-white'>Contact Me</h2>
                <div className='w-[10%] p-0.5 bg-[rgb(255,215,0)] my-3 rounded-lg'></div>
            </div>
            <div className=' flex items-center gap-4 mx-5'>
                <FaMapMarkerAlt className=' text-5xl text-white bg-gray-500 bg-opacity-40 p-2 rounded-xl' />
                <p className=' text-white text-3xl font-bold'>Location</p>
            </div>
            <div className=' h-[400px] mx-7 my-5 overflow-hidden bg-white rounded-2xl shadow-xl'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26836.35786983341!2d78.62314582297796!3d27.804695572087333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974e017ea59c0cf%3A0xd9e1865d96650334!2sKasganj%2C%20Uttar%20Pradesh%20207123!5e1!3m2!1sen!2sin!4v1761446053910!5m2!1sen!2sin" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" className=' w-full h-full '></iframe>
            </div>
            <div className=' flex items-center gap-4 mx-5 my-7'>
                <FaFileAlt className=' text-5xl text-white bg-gray-500 bg-opacity-40 p-2 rounded-xl' />
                <p className=' text-white text-3xl font-bold'>Contact Form</p>
            </div>
            <form action="" className=' mx-7 mb-7 py-3   flex flex-wrap justify-evenly bg-gray-700 rounded-2xl'>
                <input type="text" name="" id="" placeholder='Name' className=' text-lg md:w-[45%] w-[94%] bg-gray-600 bg-opacity-90 p-2 rounded-xl shadow-xl text-white placeholder:text-gray-300 md:my-0 my-2' />
                <input type="text" name="" id="" placeholder='Address' className=' text-lg md:w-[45%] w-[94%] bg-gray-600 bg-opacity-90 p-2 rounded-xl shadow-xl text-white placeholder:text-gray-300 md:my-0 my-2' />
                <input type="text" name="" id="" placeholder='Email' className=' text-lg md:w-[45%] w-[94%] bg-gray-600 bg-opacity-90 p-2 rounded-xl shadow-xl text-white placeholder:text-gray-300 md:my-3 my-2' />
                <input type="text" name="" id="" placeholder='Mobile' className=' text-lg  md:w-[45%] w-[94%] bg-gray-600 bg-opacity-90 p-2 rounded-xl shadow-xl text-white placeholder:text-gray-300 md:my-3 my-2' />
                <textarea name="" id="" rows={8} placeholder='Message' className=' text-lg w-[94%] bg-gray-600 bg-opacity-90 p-2 rounded-xl shadow-xl text-white placeholder:text-gray-300 md:my-0 my-2' />
                <div className=' w-full px-5 mt-3 flex justify-center md:justify-end'>
                    <button className='  bg-gray-600 bg-opacity-90 md:text-xl font-semibold font-sans shadow-2xl md:px-3 text-center w-full md:w-auto text-3xl rounded-lg text-yellow-500 flex justify-center md:justify-start gap-3'>
                        <FaPaperPlane className=' p-1 text-3xl'/><p><span></span>Send Message</p>
                    </button>
                </div>
            </form>
        </>
    )
}
