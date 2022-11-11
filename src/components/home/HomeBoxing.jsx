import React from 'react'
import { Link } from 'react-router-dom'
import boxing from '../../assets/home/homeboxing.jpg'

const HomeBoxing = () => {
  return (
    <div className='mt-12 max-w-auto max-w-none flex flex-col gap-y-6'>
        <img className='h-full object-cover w-full object-center rounded-md' src={boxing} alt="" />
        {/* <div className="overlay absolute top-0 z-[1] left-0 w-full h-full bg-gradient-to-b from-blue  to-black opacity-60"></div> */}
        <div className='flex flex-col items-center justify-center p-2 gap-y-8 md:gap-y-12 text-center '> 
            <h1 className=' text-3xl font-bold sm:text-2xl md:text-3xl lg:text-4xl  lg:w-[60%] mx-auto '>NEVER MISS A <span className='text-blue'>PPV EVENT</span> AGAIN</h1>
            <p className='text-lg lg:w-[60%] mx-auto'>If you love watching Boxing, UFC, or any PPV Event. <span className='text-blue'>Blue Ocean TV</span> has them all included with your monthly package.</p>
            <p className='text-lg lg:w-[60%] mx-auto'>Don’t pay for a PPV ever again when you have our <span className='text-blue'>Premium Tv Service</span></p>
            <Link to="/pricing"><button className='btn'>BUY NOW</button></Link>
        </div>
    </div>
  )
}

export default HomeBoxing