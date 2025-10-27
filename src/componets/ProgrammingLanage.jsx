import React from 'react'
import { FaCode } from 'react-icons/fa'
import ProgrammingCard from './ProgrammingCard'
import "devicon/devicon.min.css";
import { DiJava, DiPython, DiMysql, DiMongodb } from 'react-icons/di'
import { IoCarSharp, IoDiceSharp } from 'react-icons/io5'


export default function ProgrammingLanage() {
    return (
        <div>

            <div className=' flex items-center gap-4 mt-7'>
                <FaCode className=' text-5xl text-white bg-gray-500 bg-opacity-40 p-2 rounded-xl shadow-xl' />
                <p className=' text-white text-2xl font-bold'>Programin Language</p>
            </div>
            <div className=' bg-gray-800 bg-opacity-50 shadow-xl py-5 px-3 mx-2 my-5 rounded-lg flex flex-wrap justify-evenly'>
                <ProgrammingCard
                    name="C Language"
                    logo={<i className="devicon-c-plain" />}
                    size="xl"
                />
                <ProgrammingCard
                    name="C++ Language"
                    logo={<i className="devicon-cplusplus-plain" />}
                    size="2xl"
                />
                <ProgrammingCard
                    name="C# Language"
                    logo={<i className="devicon-csharp-plain" />}
                    size="3xl"
                />
                <ProgrammingCard
                    name="Python"
                    logo={<DiPython />}
                    size="3xl"
                />
                <ProgrammingCard
                    name="Java"
                    logo={<DiJava />}
                    size="3xl"
                />
                <ProgrammingCard
                    name="MySQL"
                    logo={<DiMysql />}
                    size="3xl"
                />
                

            </div>
        </div>
    )
}
