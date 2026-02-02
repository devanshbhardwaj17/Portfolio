import React from 'react'

export default function SocialMediaElement(props) {
    return (
        <div className={`bg-gray-500 bg-opacity-40 rounded-full shadow-2xl p-2 text-2xl text-white hover:bg-white hover:text-black`} >
            <a href={props.link}>
                {props.icon}
            </a>
        </div>
    )
}
