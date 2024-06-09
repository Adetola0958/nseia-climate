import React from 'react'

const Hero = () => {
  return (
    <section id="#home">
        <div className='mt-[80px]'>
            <div className='bg-[#000300] opacity- bg-blend-overlay'>
                <div className="bg-hero bg-no-repeat bg-cover bg-center h-[60vh] md:h-[90vh]">
                    <div className='max-w-[1240px] md:mx-auto pt-[10rem] px-4 md:px-0'>
                        <p className='uppercase text-white font-bold p-2 font-lexend'>growing with data analytics</p>
                        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 font-lexend'>Grow with data</h1>
                        <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4 font-lexend'>Fast, flexible financing for</p>
                            
                        <p className='md:text-2xl text-xl font-bold text-gray-500 font-lexend'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
                        <button className='bg-[#1BB661] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black hover:text-white font-lexend'>Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero