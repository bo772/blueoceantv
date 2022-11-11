import React, { useState } from 'react'
import {BsFillCheckCircleFill, BsInstagram, BsFacebook, BsMessenger, BsTelegram, BsSignal, BsWhatsapp} from 'react-icons/bs'
import {FaGooglePay} from 'react-icons/fa'
import {SiCashapp} from 'react-icons/si'
import {IoLogoVenmo} from 'react-icons/io5'
import Modal from '../components/pricing/Modal'

import logo from '../assets/pricing.jpg'

const pricingTxtv1 = [
    {id: 1, name: 'OVER 3,000 + CHANNELS'},
    {id: 2, name: 'HD & SD QUALITY'},
    {id: 3, name: 'PPV CHANNELS INCLUDED'},
    {id: 4, name: 'MOVIES & SERIES APP'},
    {id: 5, name: 'NFL, NBA, NHL, MLB'},
    {id: 6, name: 'SUPPORT ALL DEVICES'},
    {id: 7, name: '24/7 ONLINE SUPPORT '},
    
]

const pricingTxtv2 = [
    {id: 1, name: 'OVER 7,000 + CHANNELS'},
    {id: 2, name: 'SD HD & FHD QUALITY'},
    {id: 3, name: 'PPV CHANNELS INCLUDED'},
    {id: 4, name: 'MOVIES & SERIES APP'},
    {id: 5, name: 'NFL, NBA, NHL, MLB'},
    {id: 6, name: 'SUPPORT ALL DEVICES'},
    {id: 7, name: '24/7 ONLINE SUPPORT '},  
]

const standardPlan = [
    {id: 1, plan: '1 Months 3 Device', price: '15', credit_link: 'https://buy.stripe.com/28o3d4aJ96gFcM0289', pricetxt: pricingTxtv1}, 
    {id: 2, plan: '3 Months 3 Device', price: '40', credit_link: 'https://buy.stripe.com/9AQ5lcaJ9eNbaDSbIK', pricetxt: pricingTxtv1},
    {id: 3, plan: '6 Months 3 Device ', price: '70',
    credit_link: 'https://buy.stripe.com/fZe4h87wXbAZ9zOeUX', pricetxt: pricingTxtv1},
]

const premiumPlan = [
    {id: 4, plan: '1 Months 2 Device', price: '20', credit_link: 'https://buy.stripe.com/3cseVMeZp5cBh2g9AE', pricetxt: pricingTxtv2},
    {id: 5, plan: '3 Months 2 Device', price: '50', credit_link: 'https://buy.stripe.com/eVa3d4eZp7kJ13ifZ3', pricetxt: pricingTxtv2},
    {id: 6, plan: '6 Months 2 Device', price: '100', credit_link: 'https://buy.stripe.com/3cs6pg6sT20pdQ49AG', pricetxt: pricingTxtv2},
]

const Pricing = () => {

    const [showModal, setShowModal] = useState(false)
    const [plan ,setPlan] = useState('')
    const [price, setPrice] = useState('')
    const [creditLink, setCreditLink] = useState('')

  return (
    <div className='p-2 mt-[7rem]'>
        <h1 className='text-2xl md:text-4xl text-center  font-semibold leading-10 tracking-widest mb-6'>SUBSCRIPTION PACKAGES</h1>    

        {/* -------------------------------MODAL --------------------- */}

            <Modal 
            showModal={showModal} 
            setShowModal={setShowModal} 
            price={price} 
            plan={plan}
            creditLink={creditLink}/>

        {/* -------------------------------MODAL --------------------- */}   

        <div className=' p-2 '>
            <h1 className='text-xl text-center py-4 sm:text-2xl md:text-3xl '>STANDARD PLANS</h1>

                <div className='flex flex-wrap justify-center sm:gap-8 lg:gap-12'>
                {standardPlan.map( item => (
                    <div key={item.id} className='mb-[4rem] p-3 rounded-2xl shadow-xl bg-[#eeeeee] w-[20rem] '>
                        <h1 className='py-3 text-xl text-center font-[900]'>{item.plan}</h1>
                        {item.pricetxt.map( txt => (
                            <div key={txt?.id} className="flex gap-x-3 py-3 ">
                               <div className='px-1 w-6 h-6 flex items-center'>
                               <BsFillCheckCircleFill className='text-blue'/>
                               </div>
                               <p className='w-fit '>{txt?.name}</p>
                            </div>
                        ))}
                        <p className='py-3 text-center text-xl font-bold tracking-widest '>${item.price} /Month</p>
                        <div className='flex justify-center py-3'>
                            <button 
                            onClick={() => {setShowModal(true) , setPlan(item.plan), setPrice(item.price), setCreditLink(item.credit_link)}}
                            className='btn '>Buy Now</button>
                        </div>

                    </div>
                ))}
                </div>

        </div>

        {/* - PREMIUM */}
        <div className=' p-2 '>
            <h1 className='text-xl text-center py-4 sm:text-2xl md:text-3xl '>PREMIUM PLANS</h1>

            <div className='flex flex-wrap justify-center sm:gap-8 lg:gap-12'>
            {premiumPlan.map( item => (
                    <div key={item.id} className='mb-[4rem] p-3 rounded-2xl shadow-xl bg-[#eeeeee] w-[20rem] '>
                        <h1 className='py-3 text-xl text-center font-[900]'>{item.plan}</h1>
                        {item.pricetxt.map( txt => (
                            <div key={txt?.id} className="flex gap-x-3 py-3 ">
                               <div className='px-1 w-6 h-6 flex items-center'>
                               <BsFillCheckCircleFill className='text-blue'/>
                               </div>
                               <p className='w-fit '>{txt?.name}</p>
                            </div>
                        ))}
                        <p className='py-3 text-center text-xl font-bold tracking-widest'>${item.price} /Month</p>
                        <div className='flex justify-center py-3'>
                            <button 
                            onClick={() => {setShowModal(true) , setPlan(item.plan), setPrice(item.price), setCreditLink(item.credit_link)}}
                            className='btn '>Buy Now</button>
                        </div>
                    </div>
                ))}
            </div>

        </div>

        <div className='flex flex-col items-center justify-center'>
            <h1 className='text-lg md:text-2xl font-semibold text-center py-2'>CHAT WITH US FOR ACTIVATION AFTER CHECKOUT</h1>

            <div className='flex gap-6 justify-center py-8 text-blue'>
                <a href="https://www.facebook.com/blueoceantv.mm/" target='_blank'><BsFacebook className='w-8 h-8 cursor-pointer'/></a>

                <a href="https://m.me/blueoceantv.mm" target='_blank'><BsMessenger className='w-8 h-8 cursor-pointer'/></a>

                <a href="https://instagram.com/Blue_Ocean_Tv?igshid=ue88wjka9m5y" target='_blank'><BsInstagram className='w-8 h-8 cursor-pointer'/></a>

                <a href="https://t.me/CONTACT_SKYNET" target='_blank'><BsTelegram className='w-8 h-8 cursor-pointer'/></a>

                <a href="https://wa.me/17166228262" target='_blank'><BsWhatsapp className='w-8 h-8 cursor-pointer'/></a>

                <a href="https://signal.group/#CjQKIFTceY-16vu7vI2mf9yMOmLBzeRs9r_1KXHoFIpiP_eCEhClcc4uX-YjLmqM0XBxMf8N" target='_blank'><BsSignal className='w-8 h-8 cursor-pointer'/></a>
            </div>

            <img className='mb-4' src={logo} alt="" />
        </div>
    </div>
  )
}
 
export default Pricing