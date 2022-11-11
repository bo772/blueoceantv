import React, { useState } from 'react'

import { BsWhatsapp, BsArrowRight } from 'react-icons/bs'


const ContactUs = () => {


  return (
    <div className='-mt-5 p-4 sm:p-6 flex flex-col gap-y-6 max-w-lg mx-auto' >

        <h1 className=' text-center font-bold text-3xl py-4'>Contact Us</h1>

        <h1 className='text-xl'>Whatever your query, whether you’re looking for answers, would like to solve a problem, or just want to let us know how we did, you’ll find many ways to contact us right here.
        </h1>

        <p className='text-lg '>
        Monday to Friday : <span className='text-blue'>9:30AM-6:30PM</span> <br />  Saturday to Sunday : <span className='text-blue'>9:30AM-5PM,</span> <br />
        </p>

        <p className='text-lg'>Email us at 
        <a href="mailto:blueoceanservice1@gmail.com">
            <div className='mt-3 flex flex-wrap items-center gap-3 w-fit border px-2 py-1 text-blue border-blue rounded-md sm:text-lg hover:text-white hover:bg-blue'>
                <h1 className='wordbreak'>blueoceanservice1@gmail.com </h1>
                <BsArrowRight />
            </div>
        </a>
        </p>


       <h1 className='text-lg '>You can contact one of our agents directly via Whatsapp</h1>

       <div className='flex items-center gap-6'>
       <a href="https://wa.me/17166228262" target="_blank"><BsWhatsapp className='w-6 h-6 cursor-pointer text-blue'/></a>
       <h1>716-622-8262</h1>
       </div>

        <p>or use the form:</p>

        <div className='bg- rounded-lg p-4 flex flex-col gap-y-4 py-5'>
            <h1 className='text-center text-xl font-semibold underline underline-offset-8 decoration-blue'>Contact Me Directly</h1>
            <form target="_blank" action="https://formsubmit.co/blueoceanservice1@gmail.com" method="POST">
            <div>
                <div>
                    <h1>Name:</h1>
                    <input 
               
                    className='input_field' name="name" type="text" required/>
                </div>
                <div>
                    <h1>Email:</h1>
                    <input 
                
                    className='input_field' name="email" type="email" required/>
                </div>
            </div>
            <div>
                <h1>Message:</h1>
                <textarea 
               
                className='input_field h-[15rem]' name="message" id="" required></textarea>
            </div>
            <div 
            className='flex justify-center p-2'><button 
            type="submit" className='btn cursor-pointer'>Submit Form</button></div>
        </form>
        </div>
    </div>
  )
}

export default ContactUs