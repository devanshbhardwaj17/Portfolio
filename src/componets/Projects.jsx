import React from 'react'
import ProjectCard from "./ProjectCard"
import WeatherApp from "../Photo/WeatherApp.png"
import CCA from "../Photo/CCA.png"
import ATMS from "../Photo/ATMS.png"
import ASNPS from "../Photo/ASNPUBLIC.png"



export default function Projects() {
  //Done
  return (
    <div className=' py-2 md:px-5 px-2 font-sans'>
      <h2 className=' text-3xl font-bold text-white'>Projects</h2>
      <div className='w-[10%] p-0.5 bg-[rgb(255,215,0)] my-3 rounded-lg'></div>
      <div className=' my-2 flex flex-wrap justify-center gap-4'>
        <ProjectCard
          image={ASNPS}
          title="ASN Public School"
          dis="A School website created with React-Js, Javascript, TailwindCSS, HTML, CSS."
          repolink="https://github.com/devanshbhardwaj17/ASNPSchool.git"
          hostlink="https://asnp-school.vercel.app"
        />
        <ProjectCard
          image={ATMS}
          title="Attendance Management System"
          dis="An Attendance Management System special developed for ASN Public School. In this project we use React JS, Tailwind CSS and local storage. "
          repolink="https://github.com/devanshbhardwaj17/ASN-Attendance-Management-System.git"
          hostlink="https://asn-attendance-management-system.vercel.app/"
        />
        <ProjectCard
          image={WeatherApp}
          title="Weather App"
          dis="A HTML, CSS, JS app that fetches live weather data using an API. Displays current temperature and conditions."
          repolink="https://github.com/devanshbhardwaj17/WeatherWEB.git"
          hostlink="https://devanshbhardwaj17.github.io/WeatherWEB/"
        />
        <ProjectCard
          image={CCA}
          title="Currency Converter"
          dis="A HTML, CSS, JS app that use to convert the currency from one currency to other currency. It use API for conver the currency."
          repolink="https://github.com/devanshbhardwaj17/Currency-Convertor-Core-JS.git"
          hostlink="https://devanshbhardwaj17.github.io/Currency-Convertor-Core-JS/"
        />
      </div>

    </div>
  )
}
