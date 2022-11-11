import React from 'react'

import img1 from '../../assets/testimonial/customer1.png'
import img2 from '../../assets/testimonial/customer2.png'
import img3 from '../../assets/testimonial/customer3.jpg'

const Testimonial = () => {
  return (
    <div className='p-4 text-white' 
    >

        <h1 className='mb-20 md:mt-8 text-blue text-2xl sm:text-2xl md:text-3xl p-1 font-bold text-center'>What Our Customers Say</h1>

        <div className='flex flex-wrap justify-center'>

        <div 
        className='mb-20 text-center bg-blue rounded-md shadow-sm relative  mx-auto p-1 w-[20rem]'>
            <p className='pb-16'></p>
            <img className='w-20 h-20 rounded-full absolute -top-10 left-[36%]' src={img3} alt="" />
            <blockquote className='relative text-sm italic leading-6 tracking-wider text-slate-600'><span className='text-5xl'>&#8220;</span>Thank you - that all seems to be working fine again now. Likely to be home for a while recovering so need my TV for sanity!! Appreciate the help It’s actually very good, from what I have seen so far
            <span className='text-5xl absolute -bottom-12 right-4'>&#8221;</span></blockquote>
            <h3 className='py-5 text-lg font-semibold'>Tommy</h3>
        </div>

        <div 

        className='mb-20 text-center bg-blue rounded-md shadow-sm relative  mx-auto p-1 w-[20rem]'>
            <p className='pb-16'></p>
            <img className='w-20 h-20 rounded-full absolute -top-10 left-[36%]' src={img1} alt="" />
            <blockquote className='text-sm relative italic leading-6 tracking-wider text-slate-600'><span className='text-5xl '>&#8220;</span>I just want to say if it wasn’t for people like you we wouldn’t tv so thank you for all your hard working in making tv good for people. I hope you keep up the good work that you do we really appreciate it . We love watching our favorite programs again and the choices we have are granite so thank you for all your hard work
            <span className='text-5xl absolute -bottom-12 right-4 '>&#8221;</span></blockquote>
            <h3 className='py-5 text-lg font-semibold '>Jessica</h3>
        </div>

        <div
        className='mb-20 text-center bg-blue rounded-md shadow-sm relative  mx-auto p-1 w-[20rem]'>
            <p className='pb-16'></p>
            <img className='w-20 h-20 rounded-full absolute -top-10 left-[36%]' src={img2} alt="" />
            <blockquote className='text-sm relative italic leading-6 tracking-wider text-slate-600'><span className='text-5xl '>&#8220;</span>Fist i have tired it for 3 months, works rock solid on multiple devices in the Netherlands. Now I bought it for a year, very happy and the support is really fast and very helpful. With both accounts I couldn’t start watching directly. After contact with the support my country was UK instead of NL. From asking help desk to got it fixed in a few minutes
            <span className='text-5xl absolute -bottom-12 right-4 '>&#8221;</span></blockquote>
            <h3 className='py-5 text-lg font-semibold '>Rebecca</h3>
        </div>

        </div>
        

    </div>
  )
}

export default Testimonial