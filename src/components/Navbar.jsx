import React from 'react'
import {user} from '../assets/assets'
import { Link } from 'react-router-dom'
import {more} from '../assets/assets'

const Navbar = () => {
  return (
    <div className='w-[100%] border border-b-1'>
    <div className='flex items-center justify-between px-10 py-5 '>
        <h1 className='font-bold md:text-[2rem] sm:text-[1.5rem] max-sm:text-[1.3rem] text-sky-600'>JobHook</h1>
        <img className='w-6 sm:hidden' src={more} alt="User" />
        <div>
          <ul className='flex justify-center items-center md:gap-8 max-md:gap-4 md:text-[1.1rem] sm:text-[1rem] max-sm:text-[0.9rem] font-medium max-sm:hidden'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/trendingjobs'>Trending Jobs</Link></li>
                <li><Link to='/'>About Us</Link></li>
                <li><Link to='/'>Contact</Link></li>
            </ul>
        </div>
        <div className='flex items-center gap-8 max-sm:hidden'>
          <button className='md:text-[1.1rem] sm:text-[1rem] max-sm:text-[0.9rem] border rounded-xl border-black bg-black text-white md:py-2 md:px-4 max-md:py-1 max-md:px-1'>Sign In</button>
            <img className='w-6 ' src={user} alt="User" />
        </div>
    </div>
    </div>
  )
}

export default Navbar