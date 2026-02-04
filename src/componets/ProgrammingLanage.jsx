import React from 'react'
import { FaCode } from 'react-icons/fa'
import ProgrammingCard from './ProgrammingCard'
import "devicon/devicon.min.css";
import { DiJava, DiPython, DiMysql, DiMongodb } from 'react-icons/di'


export default function ProgrammingLanage() {
    return (
        <div>
            <div className=' flex items-center gap-4 mt-7'>
                <FaCode className=' text-5xl text-white bg-gray-500 bg-opacity-40 p-2 rounded-xl shadow-xl' />
                <p className=' text-white text-2xl font-bold'>Programin Language</p>
            </div>
            <div className=' bg-gray-800 bg-opacity-50 shadow-xl flex flex-wrap gap-2 justify-center my-5 p-2 rounded-md '>
                <ProgrammingCard
                    name="C Language"
                    logo={<i className="devicon-c-plain" />}
                />
                <ProgrammingCard
                    name="C++ Language"
                    logo={<i className="devicon-cplusplus-plain" />}
                />
                <ProgrammingCard
                    name="C# Language"
                    logo={<i className="devicon-csharp-plain" />}
                />
                <ProgrammingCard
                    name="Python"
                    logo={<DiPython />}
                />
                <ProgrammingCard
                    name="Java"
                    logo={<DiJava />}
                />
                <ProgrammingCard
                    name="MySQL"
                    logo={<DiMysql />}
                />
            </div>
        </div>
    )
}
