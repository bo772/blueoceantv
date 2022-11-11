import React from 'react'
import Img1 from '../assets/aboutus/aboutUs.jpg'
import Img2 from '../assets/aboutus/popcorn.jpg'

import Logo from '../assets/websiteLogo.png'

const AboutUs = () => {

  return (
    <div className='p-3 sm:p-12'>
        
 
        <div className='flex flex-col lg:flex-row py-6 lg:py-20 lg:mb-20 mb-6 gap-y-8 lg:gap-8'>
          <div className='flex items-center justify-center lg:w-[50%]'><img className='rounded-2xl  h-full ' src={Img1} alt="" /></div>

          <div className='flex flex-col gap-y-4 lg:w-[50%]'>     
            <h1 className='text-blue text-3xl font-semibold text-center lg:text-4xl'>One of the Largest IPTV provider in the World.</h1> 

            <h1 className='font-semibold text-blue py-3 tracking-wider'>WHO WE ARE</h1>

            <p className='about_text'><span className='text-blue'>Blue Ocean TV Services</span> was formed on March 1 , 2018 and is celebrating its 5th year  as one of the world’s leading providers of technology, communications, information and entertainment products and services.</p>
            <p className='about_text'> The company offers voice, data and video services and solutions on its award winning networks and platforms, delivering on customers.</p>
          </div>
        </div>

        <div className='flex flex-col gap-y-3'>
          <img className='' src={Img2} alt="" />

          <div className='flex flex-col gap-y-4'>

          <h1 className='text-center font-bold text-3xl py-4 '>About Us</h1>

            <p className='about_text'><span className='text-blue'>Blue Ocean LIVE</span> is an online streaming global IPTV provider through instant activation and free installation fees. compatible with all devices.</p>

            <p className='about_text'>Moreover, our team provides solid IPTV service to any country in the world.</p>

            <p className='about_text'>In addition to, having technical team that ensures delivering very high quality streaming to our clients.</p>

            <p className='about_text'>We provide the cheapest IPTV Prices for both Clients and resellers</p>

            <p className='about_text'>In addition to, we provide the best IPTV subscription service directly on your device using the internet. Including Samsung & LG Smart TVs Laptop PC Macbook Android TVs Android Boxes IPTV Box Dreamlink AVOV Smart IPTV MAG Openbox Apple TV 4 & 5 Tablets iPad iPhone Dreambox STB Emulator Enigma 2 Nividia shield box VU+ Amazon Firestick Smartphones.</p>

            <p className='about_text'>Certainly, there is huge demand on IPTV Services all over the world, there are millions of subscribers and so many providers and resellers as well. it’s your opportunity to make use of this now and joining the IPTV Community</p>

          </div>
        </div>

        <div className='flex items-center justify-center gap-10 py-6 sm:py-10'>
          <img className='w-[6rem] h-[6rem] sm:w-[8rem] sm:h-[8rem]' src={Logo} alt="" />
          <h1 className='text-2xl sm:text-4xl text-blue font-bold italic'>Blue Ocean TV</h1>
        </div>

    </div>
  )
}

export default AboutUs

{/*<TinyFlag  country={'US'} 
            alt={'US' + " Flag"}
            fallbackImageURL={flagURL('US')}/> */}
