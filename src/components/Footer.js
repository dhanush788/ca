import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black px-10 py-20'>
        <div className='flex justify-between'>
            <div className='flex flex-col'>
                <h2 className='text-3xl text-white font-semibold'>Got any Doubts?</h2>
                <button className='mt-5 px-10 py-3 text-black flex font-semibold rounded-[10px] bg-[#E5F358]'>Drop Us a message</button>
            </div>
            <div>
                <h2 className='text-white text-center font-bold text-xl'>D H I S H N A</h2>
                <h2 className='text-white text-center font-semibold'>SOE | CUSAT</h2>
            </div>
            <div className=''>
                <p className='text-white'>Terms</p>
                <p className='text-white'>Privacy Policy</p>
            </div>
        </div>
    </div>
  )
}

export default Footer