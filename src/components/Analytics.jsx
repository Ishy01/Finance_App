import React from 'react'
import laptop from '../assets/laptop.jpg'

export const Analytics = () => {
  return (
    <div className='bg-white w-full py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img src={laptop} alt="Laptop" className='w-[500px] mx-auto my-4' />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>DATA ANALYTICS DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia explicabo iste blanditiis rerum alias assumenda laboriosam officiis amet accusamus ipsam possimus voluptates voluptas sed et enim, nostrum sequi vel porro.</p>              
                <button className="bg-black text-[#00df9a] rounded-md font-medium my-6 px-6 py-3 w-[200px] mx-auto md:ml-0">Get Started</button>
            </div>
        </div>
    </div>
  )
}
