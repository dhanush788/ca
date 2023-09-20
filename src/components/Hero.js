import React from 'react'
import CountUp from 'react-countup'
const Hero = () => {
    const [animateCountUp, setAnimateCountUp] = React.useState(false);
    React.useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY >= 50) {
            setAnimateCountUp(true);
            window.removeEventListener('scroll', handleScroll);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
  return (
    <div className='spacebg md:h-screen'>
    <div className='px-8 md:px-20 py-10 '>
        {/* <div className='bg-black bg-opacity-50 absolute z-[20] h-[100%] w-screen left-0 top-0'></div> */}
        <h1 className='my-5 md:text-8xl text-4xl text-white font-bold text-white text-center my-5'>DHISHNA</h1>
        <h1 className='my-5 md:text-8xl text-4xl text-white font-bold text-white text-center my-5'>CAMPUS AMBASSADOR</h1>
        <p className='text-center text-white font-md lg:text-3xl md:text-2xl text-md my-5'>Be the emissary of Dhishna 2023</p>
        <div className='flex md:flex-row flex-col justify-center my-16'>
            <div className='ml-10 cursor-pointer group mr-10 md:px-16 px-5 py-4 bg-white hover:-translate-x-2 hover:-translate-y-2 transform transition-transform duration-200 ease-in-out mb-10' >

                {/* <div class="absolute top-0 left-0 w-8 h-8 bg-purple-950 transform rotate-45 -translate-x-7 -translate-y-5"></div>

                <div class="absolute bottom-0 right-0 w-8 h-8 bg-purple-950 transform rotate-45 translate-x-7 translate-y-5"></div> */}

                <p className='text-black text-center font-bold text-md md:text-xl'>SIGN UP</p>
            </div>
            <div className='ml-10 cursor-pointer group mr-10 md:px-16 px-5 py-4 bg-black bg-opacity-40 hover:-translate-x-2 hover:-translate-y-2 transform transition-transform duration-200 ease-in-out mb-10'>
                {/* <div class="absolute top-0 left-0 w-8 h-8 bg-purple-950 transform rotate-45 -translate-x-5 -translate-y-5"></div>

                <div class="absolute bottom-0 right-0 w-8 h-8 bg-purple-950 transform rotate-45 translate-x-5 translate-y-5"></div> */}

                <p className='text-white text-center font-bold text-md text-xl'>EXPLORE</p>
            </div>
        </div>
        <div className='flex justify-center my-20'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-x-60 gap-y-10'>
                <div className='md:px-10 px-7 md:py-12 py-9 rounded-[50%] bg-white'>
                    <h3 className='text-black font-semibold text-5xl text-center'>{animateCountUp && <CountUp end={30} duration={3} />}+</h3>
                    <p className='text-black text-md my-2 text-center font-semibold'>WORKSHOPS</p>
                </div>
                <div className='md:px-10 px-7 md:py-10 py-9 rounded-[50%] bg-white'>
                    <h3 className='text-black font-semibold text-5xl text-center'>{animateCountUp && <CountUp end={12} duration={4} />}+</h3>
                    <p className='text-black text-md my-2 text-center font-semibold'>LECTURES</p>
                </div>
                <div className='md:px-10 px-7 md:py-10 py-9 rounded-[50%] bg-white'>
                    <h3 className='text-black font-semibold text-5xl text-center'>{animateCountUp && <CountUp end={44} duration={5} />}+</h3>
                    <p className='text-black text-md my-2 text-center font-semibold'>SPONSORS</p>
                </div>
            </div>    
        </div>
    </div>
    </div>
  )
}

export default Hero