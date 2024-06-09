import React from 'react'
import {WiRain} from "react-icons/wi"
import {GiPlantSeed} from "react-icons/gi"
import {GrStorage} from "react-icons/gr"

const Services = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-[#19232d] text-white'>
        <h2 className='mb-[5rem] md:text-6xl text-3xl font-lexend font-bold text-center'>
            Our Services
            <span className='bg-[#1BB661] block h-[2px] w-[60px] md:w-[100px] mt-[20px] mx-auto mb-0'></span>
        </h2>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        
        <div className='w-full flex flex-col p-4 my-4 rounded-lg '>
            <WiRain size={50} className='w-20 mx-auto mt-[-3rem]'/>
            {/* <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt="/" /> */}
            <h2 className='text-2xl font-bold text-center py-8 font-lexend'>Climate Change</h2>
            <p className='font-lexend'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio voluptas consectetur praesentium quos mollitia illo expedita facilis, odio repellat fugiat dignissimos est officiis maxime voluptatibus dolorum modi quae iste vitae harum cupiditate. Fugiat tempora modi accusantium architecto, ullam nihil veniam maxime perspiciatis illum blanditiis commodi! Aperiam eius soluta commodi possimus.</p>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 font-lexend'>Read More</button>
        </div>
        <div className='w-full flex flex-col p-4 my-4 rounded-lg'>
            <GiPlantSeed size={50} className='w-20 mx-auto mt-[-3rem]'/>
            {/* <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt="/" /> */}
            <h2 className='text-2xl font-bold text-center py-8 font-lexend'>Plants and Harvesting</h2>
            <p className='font-lexend'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate vel a quo voluptates aliquam omnis nulla voluptatum ad. Officiis id inventore, dignissimos, voluptatum sed quasi est autem eos accusamus quia placeat dolore labore, alias ea quo totam officia dolor repellendus debitis! Voluptatum similique repellat vero eligendi voluptate, optio culpa dolor?</p>
            <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Read More</button>
        </div>
        <div className='w-full flex flex-col p-4 my-4 rounded-lg'>
            <GrStorage size={50} className='w-20 mx-auto mt-[-3rem]'/>
            {/* <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt="/" /> */}
            <h2 className='text-2xl font-bold text-center py-8 font-lexend'>Barns and Storage</h2>
            <p className='font-lexend'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, esse porro provident veritatis dolorum quaerat ex repellat pariatur quibusdam dolore nihil quod doloremque minus sunt tempore voluptas? Debitis quisquam atque modi maiores dolores vero nihil ipsum quibusdam excepturi unde harum, suscipit quo rerum deserunt sint numquam consequatur! Animi, ipsam necessitatibus.</p>
            <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 font-lexend'>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Services