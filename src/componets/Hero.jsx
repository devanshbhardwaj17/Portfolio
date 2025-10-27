import React from 'react'
import ComputerNav from './ComputerNav'
import Desbord from './Desbord'

export default function Hero() {
  return (
    <div className=' w-full bg-gradient-to-tl from-black to-gray-500 flex flex-wrap justify-center gap-5'>
        <ComputerNav/>
        <Desbord/>
    </div>
  )
}
