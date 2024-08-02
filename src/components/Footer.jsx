import React from 'react'
import {copyright} from '../assets/assets'
const Footer = () => {
  return (
    <div className='max-w-none flex flex-col gap-7 py-4 px-3 border border-t-2 bg-white md:text-[1rem] sm:text-[1.1rem] max-sm:text-[0.9rem]'>
        <div className='flex justify-around max-md:flex-col'>
        <div className='flex gap-4 justify-center '>
            <h1>Help</h1>
            <h1>About</h1>
            <h1>Terms</h1>
            <h1>Career</h1>
        </div>
        <div className='flex gap-4 justify-center'>
            <h1>Privacy</h1>
            <h1>Terms & Conditions</h1>
        </div>
        </div>
        <div className='flex items-center gap-5 justify-center'>
            <h1 className='flex items-center gap-1'><img className='w-5 h-5' src={copyright} alt="" />
            2024 JobHook</h1>
            <h1>All Rights Reserved.</h1>
        </div>
    </div>
  )
}

export default Footer