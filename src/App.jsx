import { useState } from 'react'
import Hero from './componets/Hero'
import { createBrowserRouter, createRoutesFromElements, Route, Router, RouterProvider, Routes } from 'react-router-dom'
import About from './componets/About'
import Resume from './componets/Resume'
import Conctact from './componets/Conctact'
import Projects from './componets/Projects'


function App() {

  const router= createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='' element={<Hero/>}>
          <Route path='' element={<About/>}/>
          <Route path='/resume' element={<Resume/>}/>
          <Route path='/projects' element={<Projects/>}/>
          <Route path='/contact' element={<Conctact/>}/>

        </Route>
      </Route>
    )
  )
  return (
    <RouterProvider router={router}/>
  )
}

export default App
