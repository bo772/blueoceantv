import React, { useState } from 'react'

import handshake from '../assets/reseller/reseller.jpg'
import img from '../assets/reseller/reseller2.jpg'
import ModalReseller from '../components/reseller/ModalReseller'
import {BsFillCheckCircleFill, BsXCircle, BsFacebook, BsMessenger, BsTelegram, BsSignal, BsWhatsapp, BsInstagram} from 'react-icons/bs'
import logo from '../assets/pricing.jpg'

const payment = [
    {id: 1, credit: '50', price: '250'},
    {id: 2, credit: '100', price: '400'},
    {id: 3, credit: '200', price: '700'},
    {id: 4, credit: '400', price: '1000'},
]

const Reseller = () => {

    const [price, setPrice] = useState('')
    const [credit, setCredit] = useState('')
    const [showModalreseller, setShowModalreseller] = useState(false)

  return (
    <div className='flex flex-col gap-y-4 p-4 max-w-3xl mx-auto'>

        <img className='max-h-[20rem] sm:py-3 object-contain' src={handshake} alt="" />
        <h1 className='text-lg  font-semibold'>Live for the Dream - Become an IPTV reseller</h1>

        <div className='flex flex-col gap-y-3'>
            <h1 className='reseller_heading'>WHAT IS AN IPTV RESELLER?</h1>

            <p>A Blue Ocean TV IPTV reseller is someone, a freelancer, or a company who sells IPTV subscriptions to their own customers. The resellers do not work for Roomba, they are their own bosses and they set their own prices, as well as their own company name, logo and more.</p>

            <p>You only pay what you sell: That is why being an IPTV Reseller is a very attractive idea for a start-up or freelancer, because of the low investment. As an opening, a café or a restaurant needs huge investment, but for becoming an IPTV reseller, you need relatively way less investment power compared to other type of businesses.</p>

            <p>The IPTV field has growth around 425% during the pandemic year, with more than 50M people using different type of streaming service worldwide, it’s crazy. Everyone is switching to IPTV services since it’s cheaper and includes several more perks than a basic TV cable provider.</p>

            <p>You can generate a massive amount of income through an IPTV reselling business model. Our IPTV Reselling credits are sold like ice cream in summer and it’s market is getting popular with an extra fast pace and expanding really fast! Our stream quality, and stability is top notch and one of the bests in the market right now. Seconded by a very proactive technical support which treats resellers like a vital component of our core company.</p>
        </div>

        <div className='flex flex-col gap-y-3'>
            <h1 className='reseller_heading'>How Blue Ocean IPTV Reselling Panel work?</h1>

            <p>Blue Ocean IPTV Reselling works through something we called Credits. Credits are used to activate the IPTV Subscriptions for your clients. Where 1 Credit equals to 1 Month IPTV subscription, the cost of 1 Credit in our IPTV Reselling program is 5 USD, it’s even less if you take advantage of any of the available package Discounts.To become an IPTV Reseller you have to purchase Blue Ocean TV credits.</p>
        </div>

        <div className='flex flex-col gap-y-3'>
            <h1 className='reseller_heading'>Why a reseller benefits of the use of Credits?</h1>
            <p>For making this clearer let’s bring up a quick example: Let’s say a client buys you an IPTV subscription for 1 month at a price of 15 USD (this is just an example, you can set the price to whatever fits you best).</p>

            <p>As explained above, Blue Ocean  IPTV Resellers can purchase 1 month subscription for 1 Credit (5.USD), generating an income of 15.50 USD to the Reseller, a 500% profit, just for one month. Similar profits apply for larger subscriptions.</p>
        </div>

        <h1 className='reseller_heading text-center'>1 Account 3 Connection</h1>

        <div className='mx-auto'>
            <div className='flex gap-3 border max-w-lg justify-center'>
                <p className='border-r px-3 p-1'>1 Month Subscription</p>
                <p className='px-3 p-1'>1 Credit Points</p>
            </div>
            <div className='flex gap-3 border  max-w-lg justify-center'>
                <p className='border-r px-3 p-1'>3 Month Subscription</p>
                <p className='px-3 p-1'>3 Credit Points</p>
            </div>
            <div className='flex gap-3 border max-w-lg justify-center'>
                <p className='border-r px-3 p-1'>6 Month Subscription</p>
                <p className='px-3 p-1'>6 Credit Points</p>
            </div>
            <div className='flex gap-3 border max-w-lg justify-center'>
                <p className='border-r px-3 p-1'>12 Month Subscription</p>
                <p className='px-3 p-1'>12 Credit Points</p>
            </div>
        </div>

        <img src={img} alt="" />

        <div  className='flex  justify-center flex-wrap gap-2 py-5 gap-y-8'>
        {payment.map( item => (          

            <div key={item.id} className='bg-[#eeeeee] rounded-2xl p-4 w-[18rem] mx-auto flex flex-col gap-y-3 '>
                <h1 className='text-center text-2xl font-semibold underline underline-offset-8 py-3 text-blue'>{item.credit} Credit</h1>
                <div className='flex flex-col gap-y-1'>
                    <p>1 Month 1 Credit Points</p>
                    <p>3 Month 3 Credit Points</p>
                    <p>6 Month 6 Credit Points</p>
                    <p>12 Month 12 Credit Points</p>
                    <p>Free Trial Everyday</p>
                    <p>Customize Groups</p>
                    <p>Pay As You Go!</p>
                    <p>Credits Not Expire</p>
                    <p>24/7 Support</p>
                </div>
                <p className='text-center font-semibold text-blue text-xl'>${item.price}</p>
                <div className='flex justify-center '>
                <button className='btn'
                onClick={() => {setShowModalreseller(true) , setCredit(item.credit), setPrice(item.price) }}
                >Buy Now</button>
                </div>
            </div>

        ))}
        </div>

        <ModalReseller 
        showModalreseller={showModalreseller}
        setShowModalreseller={setShowModalreseller}
        credit={credit}
        price={price}
        />

<div className='py-4 flex flex-col items-center justify-center'>
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

export default Reseller