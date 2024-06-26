import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-deepgreen px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 font-lexend'>
            Want tips & tricks to optimize your flow?
          </h1>
          <p className='font-lexend'>Sign up to our newsletter and stay up to date.</p>
        </div>
        <div className='my-4'>
          <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
            <input
              className='p-3 flex w-full rounded-md text-black border border-deepgreen'
              type='email'
              placeholder='Enter your email address'
            />
            <button className='bg-deepgreen text-white rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3 font-lexend'>
              Notify Me
            </button>
          </div>
          <p className='font-lexend'>
            We care bout the protection of your data. Read our{' '}
            <span className='text-[#1BB661]'>Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Newsletter