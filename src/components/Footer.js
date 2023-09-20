import React from 'react'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import { YouTube ,Twitter } from '@mui/icons-material';
import logo from "../assets/dhishna_logo.png";

const Footer = () => {
  return (
    <div className='bg-black'>
        <div className='px-10  md:px-20 pb-10 pt-20'>
            <div className='flex md:flex-row flex-col justify-between md:items-end'>
                <div className='flex flex-col pb-10  z-[2]'>
                    <h2 className='text-3xl text-white font-semibold text-center'>Got any Doubts?</h2>
                    <button className='mt-5 px-10 py-3 text-black flex font-semibold rounded-[10px] bg-[#E5F358] hover:scale-105 duration-200 ease-in-out'><ChatBubbleIcon className='text-black mr-4' /> Drop Us a message</button>
                </div>
                <div className=' pb-10 z-[2]'>
                    <img src={logo} alt="logo" className="w-24 h-20 flex mx-auto object-contain " />
                    <h2 className='text-white text-center font-bold text-xl'>D H I S H N A</h2>
                    <h2 className='text-white text-center font-semibold'>SOE | CUSAT</h2>
                </div>
                <div className=' flex flex-col gap-y-4  z-[2]'>
                    <p className='text-white text-center md:text-right'>Terms</p>
                    <p className='text-white text-center md:text-right'>Privacy Policy</p>
                    <div className='flex flex-row gap-4 justify-center '>
                        <InstagramIcon  className='text-[#DCE95B]'/>
                        <FacebookIcon className='text-[#DCE95B]'/>
                        <YouTube className='text-[#DCE95B]'/>
                        <Twitter className='text-[#DCE95B]'/>
                    </div>
                </div>
                <div className='mid-glow h-56 mb-[-80px]'></div>
            </div>
        </div>
            <p className='text-center text-white text-lg relative z-[2]'>© Copyright 2023 Dhishna - All Rights Reserved</p>
    </div>
  )
}

export default Footer