import React from 'react'
import {LuHome, LuMail, LuPhoneCall} from "react-icons/lu"
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
  } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='w-full py-16 text-white bg-deepgreen px-4'>
        <h2 className='mb-[2.5rem] md:text-6xl text-3xl font-lexend font-bold text-center'>
            Contact Us
            <span className='bg-[#1BB661] block h-[2px] w-[60px] md:w-[100px] mt-[20px] mx-auto mb-0'></span>
        </h2>
        <p className='font-lexend text-center'>Please find us to make sure we make your environment a healthy living</p>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-2 gap-[4rem] mt-[4rem]'>
            <div className='flex flex-col '>
                <h2 className='font-lexend'>Contact Info</h2>
                <div className='flex mt-5 mb-[2rem]'>
                    <LuPhoneCall size={20}/>
                    <span className='font-lexend ml-5'>+234(0)8035515017 </span>
                </div>
                <div className='flex mb-[2rem]'>
                    <LuMail size={20}/>
                    <span className='font-lexend ml-5'>naturescopeadvocacy@gmail.com </span>
                </div>
                <div className='flex mb-[2rem]'>
                    <LuHome size={20}/>
                    <span className='font-lexend ml-5'>Isolo, Lagos. <br />Nigeria. </span>
                </div>
                <div className='flex justify-between md:w-[50%] my-6'>
                    <FaFacebookSquare size={30} />
                    <FaInstagram size={30} />
                    <FaTwitterSquare size={30} />
                    <FaGithubSquare size={30} />
                    <FaDribbbleSquare size={30} />
                </div>
            </div>
            <div className='flex flex-col justify-center'>
                <div className='lg:mb-10 mb-6'>
                    <label htmlFor="name" className='font-lexend'>Name</label>
                    <input type="text" className='p-1 flex w-full rounded-md text-black border border-deepgreen'/>
                </div>
                <div className='lg:mb-10 mb-6'>
                    <label htmlFor="name" className='font-lexend'>Email</label>
                    <input type="text" className='p-1 flex w-full rounded-md text-black border border-deepgreen'/>
                </div>
                <div className='lg:mb-10 mb-6'>
                    <label htmlFor="name" className='font-lexend'>Subject</label>
                    <input type="text" className='p-1 flex w-full rounded-md text-black border border-deepgreen'/>
                </div>
                <div className='lg:mb-10 mb-6'>
                    <label htmlFor="name" className='font-lexend'>Message</label>
                    <textarea name="" id="" cols="30" rows="5" className='p-1 flex w-full rounded-md text-black border border-deepgreen'></textarea>
                </div>
                <div className='lg:mb-10 mb-6 flex items-center justify-center md:items-left md:justify-start'>
                    <button className='bg-[#1BB661] font-bold flex items-center justify-center px-10 py-3'>Submit</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer