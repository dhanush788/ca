import React from 'react'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

const Footer = () => {
  return (
    <div className='bg-black'>
        <div className='px-10 py-20'>
            <div className='flex md:flex-row flex-col justify-between'>
                <div className='md:mb-0 mb-20 flex flex-col'>
                    <h2 className='text-3xl text-white font-semibold text-center'>Got any Doubts?</h2>
                    <button className='mt-5 px-10 py-3 text-black flex font-semibold rounded-[10px] bg-[#E5F358] hover:scale-105 duration-200 ease-in-out'><ChatBubbleIcon className='text-black mr-4' /> Drop Us a message</button>
                </div>
                <div className='md:mb-0 mb-20 '>
                    <h2 className='text-white text-center font-bold text-xl'>D H I S H N A</h2>
                    <h2 className='text-white text-center font-semibold'>SOE | CUSAT</h2>
                </div>
                <div className='md:mb-0 mb-20 '>
                    <p className='text-white text-center'>Terms</p>
                    <p className='text-white text-center'>Privacy Policy</p>
                </div>
                <div className='mid-glow h-56'></div>
            </div>
        </div>
            <p className='text-center text-white text-lg'>© Copyright 2023 Dhishna - All Rights Reserved</p>
    </div>
  )
}

export default Footer