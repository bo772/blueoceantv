import React from 'react'

import homenba from '../../assets/home/homenba.jpg'
import homesport from '../../assets/home/homepage7.jpg'

const HomeNba = () => {
  return (
    <div className='flex flex-col gap-y-12 py-[5rem] md:py-[6rem] p-2 '>
        <div className='flex flex-col gap-y-6 text-center'>
        <h1 className='text-3xl font-bold'>WATCH <span className='text-blue'>ALL THE SPORTS</span> YOU NEED NOW INCLUDED <span className='text-blue'>!</span></h1>
        <p className='text-lg '>Stop paying for NBA league pass and more, <span className='text-blue font-semibold'>Blue Ocean</span> has them all included!</p>
        </div>
        <img className='block sm:hidden' src={homenba} alt="" />
        <img src={homesport} className='hidden sm:block' alt="" />
    </div>
  )
}

export default HomeNba