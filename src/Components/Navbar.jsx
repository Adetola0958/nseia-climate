import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"
// import { useLocation } from 'react-router-dom'

const Navbar = () => {
  const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
  return (
    <nav className='bg-white top-0 right-0 left-0 fixed z-50 shadow-lg'>
      <div className='max-w-[1240px] mx-auto px-4 h-20 flex justify-between'>
        <h1 className='p-5 text-3xl font-bold text-[#1BB661]'>NSEAI</h1>
        <ul className='hidden md:flex ml-auto'>
          <li className='p-5 mr-5 font-lexend'>
            <a href="/">Home</a> 
          </li> 
          <li className='p-5 mr-5 font-lexend'>
            <a href="/about">About Us</a>
          </li>
          <li className='p-5 mr-5 font-lexend'>
            <a href="/projects">Projects</a>
          </li>
          <li className='p-5 mr-5 font-lexend'>
            <a href="/team">Our Team</a>
          </li>
          <li className='p-5 mr-5 font-lexend'>
            <a href="/gallery">Gallery</a>
          </li>
          <li className='p-5 mr-5 font-lexend'>
            <a href="/contact">Contact Us</a>
          </li>
        </ul>
        <div onClick={handleNav} className='block md:hidden p-5 mt-2'>
         {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>} 
        </div>
        <div className={nav ? 'text-deepgreen font-lexend shadow-xl fixed right-0 top-20 w-[60%] h-full border-r border-r-gray-900 bg-white ease-in-out duration-700' : 'ease-in-out fixed left-[-100%]'}>
          <ul className='p-4'>
            <li className='p-4 border-b border-gray-600 text-[15px] md:text-[20px] font-lexend'>
              <a href="/">Home</a>
            </li> 
            <li className='p-4 border-b border-gray-600 text-[15px] md:text-[20px] font-lexend'>
              <a href="/about">About Us</a>
            </li>
            <li className='p-4 border-b border-gray-600 text-[15px] md:text-[20px] font-lexend'>
              <a href="/projects">Projects</a>
            </li>
            <li className='p-4 border-b border-gray-600 text-[15px] md:text-[20px] font-lexend'>
              <a href="/team">Our Team</a>
            </li>
            <li className='p-4 border-b border-gray-600 text-[15px] md:text-[20px] font-lexend'>
              <a href="/gallery">Gallery</a>
            </li>
            <li className='p-4 text-[15px] md:text-[20px]'>
              <a href="/contact">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar