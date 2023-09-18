import React from 'react'

const What = () => {
  return (
    <div className="px-20 py-20 bg-transparent">
        <h1 className='text-5xl text-white font-extrabold text-center'>WHAT YOU SHOULD DO</h1>
        <div className='my-20'>
            <div className='ml-20'>
                <div className='grid grid-cols-3 gap-7'>
                    <div>
                        <div className='absolute bg-transparent border-2 rounded-[16px] border-white w-[300px] h-[200px]'></div>
                        <div className='hover:-translate-x-3 hover:-translate-y-3 transform transition-transform duration-200 ease-in-out gloss w-[300px] h-[200px] px-10 py-10 flex justify-center'>
                            <h2 className='text-white font-bold text-2xl text-center'>PROMOTE</h2>
                        </div>
                    </div>
                    <div>
                        <div className='absolute bg-transparent border-2 rounded-[16px] border-white w-[300px] h-[200px]'></div>
                        <div className='hover:-translate-x-3 hover:-translate-y-3 transform transition-transform duration-200 ease-in-out gloss w-[300px] h-[200px] px-10 py-10 flex justify-center'>
                            <h2 className='text-white font-bold text-2xl text-center'>NOTICE</h2>
                        </div>
                    </div>
                    <div>
                        <div className='absolute bg-transparent border-2 rounded-[16px] border-white w-[300px] h-[200px]'></div>
                        <div className='hover:-translate-x-3 hover:-translate-y-3 transform transition-transform duration-200 ease-in-out gloss w-[300px] h-[200px] px-10 py-10 flex justify-center'>
                            <h2 className='text-white font-bold text-2xl text-center'>CONNECT</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default What