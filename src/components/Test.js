import React from 'react'
import Round from './Round'

function Test() {
  return (
    <div>
        <Round />
        <div className='flex flex-row'>
          <div className='w-1/2'></div>
          <div className='w-screen h-screen flex flex-col justify-center items-center'>
          <h1 className="font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 text-white">
            Guess what??
          </h1>
          
          <p className="text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 text-white-100">
          <span className='text-[#915EFF]'>Dishna </span>
            is back...<br className='sm:block hidden' />
          </p>
          </div>

        </div>
    </div>
  )
}

export default Test