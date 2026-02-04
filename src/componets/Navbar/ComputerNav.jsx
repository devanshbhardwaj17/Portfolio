import React from 'react'
import MyPic from '../../Photo/Mypic2.jpeg'
import Card1 from '../Card/Card1'
import { FaMapMarkerAlt, FaMobileAlt, FaRegCalendarAlt, FaRegEnvelope } from 'react-icons/fa'

export default function ComputerNav() {
    //Done
    return (
        <div>
            <div className=' w-full flex flex-wrap gap-4 py-3 mb-4'>
                <Card1
                    icon={<FaRegEnvelope />}
                    title="Email"
                    value="devanshb661@gmail.com"
                />
                <Card1
                    icon={<FaMobileAlt />}
                    title="Mobile No."
                    value="+91 7820061773"
                />
                <Card1
                    icon={<FaRegCalendarAlt />}
                    title="Date of Birth"
                    value="25-07-2005"
                />
                <Card1
                    icon={<FaMapMarkerAlt />}
                    title="Location"
                    value="Kasganj, Uttar Pradesh"
                />
            </div>
            
        </div>
    )
}
