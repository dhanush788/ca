import React from 'react'
import companies from '../assets/companies.png'

const Companies = () => {
  return (
    <div className='md:block hidden px-10 py-20 bg-opacity-90 bg-black flex justify-center'>
        <img src={companies} alt='companies' />
    </div>
  )
}

export default Companies