import React from 'react'
import { FaGithub, FaLinkedinIn, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import SocialMediaElement from '../SocialMediaElement'


export default function SocialMedia() {
  return (
    <div className=' flex flex-wrap justify-center md:justify-start lg:justify-center gap-3 mt-3'>
                <SocialMediaElement
                    link="https://x.com/17_devansh?t=2YR4UjxtPAXxlUQq8U0lwA&s=09"
                    icon={<FaTwitter />}
                />
                <SocialMediaElement
                    link="https://www.linkedin.com/in/devansh-bhardwaj29?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                    icon={<FaLinkedinIn />}
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
  )
}
