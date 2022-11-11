import React, { useState } from 'react'

// - Logo image
import Logo from '../../assets/websiteLogo.png'

import {MdMenu} from 'react-icons/md'
import { BsX, BsFacebook, BsMessenger, BsTelegram, BsInstagram, BsWhatsapp} from 'react-icons/bs'


import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'


const navLinks = [
    {name: 'Home', path: ''},
    {name: 'Pricing', path: '/pricing'},
    {name: 'Channels', path: '/channels'},
    {name: 'Reseller', path: 'reseller'},
    {name: 'Contact Us', path: '/contactus'},
    {name: 'About Us', path: '/aboutus'},
]

const Navbar = () => {

    const[showMenu, setShowMenu] = useState(false) // false

  return (
    <div className='fixed top-0 left-0 z-[100] w-full bg-softblue h-[10vh] flex items-center justify-between px-[1rem] md:px-1 lg:px-8 xl:px-12 shadow-sm text-white'>
        {/* <img className='h-full p-2' src={Logo} alt="" /> */}
        <Link to='/'><h1 className='cursor-pointer'>Blue Ocean LIVE</h1></Link>
        <motion.div className='block md:hidden'
        whileTap={{ scale: 0.8 }}>
        <MdMenu       
        onClick={() => setShowMenu(true)}
        className='w-7 h-7 cursor-pointer'/>
        </motion.div>

        {
            showMenu &&
            <div 
            onClick={() => setShowMenu(false)}
            className="overlay absolute bg-black opacity-50 top-0 left-0 w-full h-screen md:hidden"></div>
        }

        {/* - FOR MOBILE SCREEN */}
        {showMenu && (
            <motion.div 
            initial={{ x: "-100%" }}
            animate={{ x: "0" }}
            className='md:hidden absolute top-0 left-0 h-screen w-[16rem] p-6 bg-softblue overflow-scroll overflow-x-hidden'>

                <BsX 
                onClick={() => setShowMenu(false)}
                className='h-8 w-8 mb-2 cursor-pointer'/>
                <hr className='mb-6'/>

                <div className='flex flex-col gap-y-[4rem]'>
                <div className='flex flex-col gap-y-5 px-4'>
                {navLinks.map( item => (
                    <Link to={item.path} key={item.name}>
                    <motion.h1 
                    whileHover={{ scale: 1.1 }}
                    onClick={() => setShowMenu(false)}
                    className='cursor-pointer w-fit '>{item.name}</motion.h1>
                    </Link>
                ))}
                </div>

                <Link to='/download' className='w-fit mx-auto'>
                    <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setShowMenu(false)}
                    className='btn '>Download</motion.button>
                </Link>
              
                <div className='border p-3 rounded-md px-4'> 
                <h1 className='text-center underline underline-offset-8 mb-6'>contact via</h1>
                <div className='flex items-center justify-center gap-6'>

                    <a href="https://www.facebook.com/blueoceantv.mm/" target='_blank'><BsFacebook onClick={() => setShowMenu(false)}
                    className='nav_icon'/></a>

                    <a href="https://instagram.com/Blue_Ocean_Tv?igshid=ue88wjka9m5y" target='_blank'><BsInstagram onClick={() => setShowMenu(false)}
                    className='nav_icon'/></a>

                    <a href="https://t.me/CONTACT_SKYNET" target='_blank'><BsTelegram onClick={() => setShowMenu(false)}
                    className='nav_icon'/></a>

                    <a href="https://wa.me/17166228262" target='_blank'><BsWhatsapp onClick={() => setShowMenu(false)}
                    className='nav_icon'/></a>
                    
                </div>
                </div>
                </div>

            </motion.div>
        )}

        <div className='hidden md:flex items-center gap-4 lg:gap-8 flex-1 justify-end px-6 lg:px-12'>
            {navLinks.map( item => (
                <Link to={item.path} key={item.name}>
                <motion.h1 
                whileHover={{ scale: 1.05 }}
                className='nav_link '>{item.name}</motion.h1>
                </Link>
            ))}
        </div>

        <Link className='hidden md:block' to="/download">
            <button className='text-sm px-3 py-2 btn rounded-lg font-semibold '>Download</button>
        </Link>

    </div>
  )
}

export default Navbar