import React, { useState } from 'react'

import {MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowDown} from 'react-icons/md'

import img_1 from '../assets/download/store.jpg'
import img_2 from '../assets/download/tivimate.jpg'
import img_3 from '../assets/download/xc.jpg'
import img_4 from '../assets/download/vod.jpg'

import img_5 from '../assets/download/download_img.jpg'
import web_playerImg from '../assets/download/player.jpg'
const watch_player_link = 'http://tonystarks.website/tonystarks/alextv020820/index.php?loggedout'

const id_1_link1 = 'https://s.id/botv'


const id_2_link1 = 'https://tinyurl.com/blueoceantivi'
const id_2_link2 = 'https://www.mediafire.com/file/6gqrfdmle2ab8aw/Blue_Ocean_TIVI.apk/file'


const id_3_link1 = 'https://www.google.com/url?q=https%3A%2F%2Farchive.org%2Fdownload%2Fblueoceantv%2FBOXC.apk&sa=D&sntz=1&usg=AOvVaw3l_r4p7tkNKsq4Oo1JpVEj'
const id_3_link2 = 'https://www.google.com/url?q=https%3A%2F%2Fwww.mediafire.com%2Ffile%2Ff6rx9ul5j5nwp1h%2FBOXC.apk%2Ffile&sa=D&sntz=1&usg=AOvVaw0VdBniPVO-_zPv49GaFgR5'


const id_4_link1 = 'https://tinyurl.com/blueoceanplus'
const id_4_link2 = 'https://www.mediafire.com/file/wvrp1b96csf1o2j/BOPLUS.apk/file'


const downloadLinks = [
    {id: 1, name: 'BLUE OCEAN APP STORE', link1Name: 'DIRECT DOWNLOAD', link1: id_1_link1,  img: img_1},

    {id: 2, name: 'BLUE OCEAN TIVIMATE', link1Name: 'DIRECT DOWNLOAD', link1: id_2_link1, link2Name: 'MEDIAFIRE', link2: id_2_link2, img: img_2},

    {id: 3, name: 'BLUE OCEAN XC', link1Name: 'DIRECT DOWNLOAD', link1: id_3_link1, link2Name: 'MEDIAFIRE', link2: id_3_link2, img: img_3},
    
    {id: 4, name: 'BLUE OCEAN VOD', link1Name: 'DIRECT DOWNLOAD', link1: id_4_link1, link2Name: 'MEDIAFIRE', link2: id_4_link2, img:img_4},
]

const Download = () => {

    const [showBuffer, setShowBuffer] = useState(false)

  return (
    <div className='flex flex-col gap-y-6 sm:gap-y-12 p-3'>


        {downloadLinks.map( item => (

        <div key={item.id} >
            <div className='mx-auto w-fit py-4'>
                <img className='ma-h-[10rem] object-contain' src={item.img} alt="" />
            </div>

            <div>
                {item.name &&
                <h1 className='text-center font-semibold text-lg sm:text-xl'>{item.name}</h1>
                }
                <div className='flex flex-col py-3 gap-y-3'>

                    { item.link1 &&
                    <a href={item.link1} className="btn rounded-full w-[15rem] text-center" target='_blank'>{item.link1Name}</a>
                    }

                    {item.link2 &&
                    <a href={item.link2} className="btn rounded-full w-[15rem] text-center" target='_blank'>{item.link2Name}</a>
                    }

                </div>
            </div>
        </div>

        ))}

        <div className='py-6 flex flex-col gap-y-8 mb-8'>
        <div className='mx-auto w-fit ma-w-[90vh]'>
            <img className=' object-contain' src={web_playerImg} alt="" />
        </div>

        <div className='flex justify-center'>
        <a href={watch_player_link} className="btn rounded-full w-[15rem] text-center" target='_blank'>Web Player</a>
        </div>
        </div>

        <img src={img_5} alt="" />

        <div className='flex flex-col gap-y-5 py-6 p-2'>
            <h1 className='text-3xl font-semibold'>How to install apps on firestick</h1>
            <div>
                <h1 className='download_heading'>1. Go to my fire tv in settings</h1>
                <p className='download_para'>Click on developer options and turn on Adb debugging and apps from unknown sources. After that hit home button on remote.</p>
            </div>
            <div>
                <h1 className='download_heading'>2 . Go to find and search for downloader</h1>
                <p className='download_para'>Install and open it</p>
            </div>
            <div>
                <h1 className='download_heading'>3. Type in <span className='text-yellow'>56331</span> and hit go.</h1>
                <p className='download_para'>This will direct you to website where you can install apks for dacableplug. I recommend the (dacableplug live xciptv apk ) and dacableplug cinema. Both these apps you will log into with your account info</p>
            </div>
            <div>
                <h1 className='download_heading'>4. There are free apps for movies and TV series also.</h1>
                <p className='download_para'>I recommend adguard with these as it blocks ads. Adguard can be found under utilities. Install , open it , turn on and create local VPN. After this you should be good to go!!!!! Android Device Recommed you install downloader from the playstore. Then follow instructions from step 3.If you can't install downloader on your device you can use a broswer(recommend firefox)and type aftv.news/56331. This will direct you to links for apks.</p>
            </div>
        </div>

        <div className=' mb-12 '>
            <div 
            onClick={() =>setShowBuffer(!showBuffer)}
            className=' flex  items-center gap-6 p-4 shadow-lg cursor-pointer btn'>
                <h1 className='text-xl'>How To Fix Buffering</h1>
                {showBuffer ?
                <MdOutlineKeyboardArrowDown className='w-8 h-8'/> : <MdOutlineKeyboardArrowRight className='w-8 h-8'/>}
            </div>

            {showBuffer && 
            <div className='p-4 flex flex-col gap-y-4 transition-all duration-150 ease-in-out shadow-lg'>
            <div className='flex flex-col gap-y-3 py-4'>
                <h1 className='font-semibold text-xl'>Having other apps like hulu or netflix work does not mean the issue is with our service and not your equipment/internet.</h1>
                <p className='tracking-wide text-xl'>Paying for high speed internet and actually testing to see what your device is getting are 2 different things. You want to be sure you are actually getting 25+ download speeds for each device thats connected to your internet.</p>
            </div>

            <hr className='text-blue'/>

            <div className='flex flex-col gap-y-3 py-4'>
                <h1 className='font-semibold text-xl'>Even if you are but your paying for say 100 and only getting 25, there is a problem and you should contact your internet service provider.</h1>
                <p className='tracking-wide text-xl'>Analiti is a speed test app you can download directly from the firestick search icon and run a speed test to see wht your getting.</p>
            </div>

            <hr className='text-blue'/>

            <div className='flex flex-col gap-y-3 py-4'>
                <h1 className='font-semibold text-xl'>If your using the modem/router given to you by your internet provider then you for sure are not getting the best results.</h1>
                <p className='tracking-wide text-xl'>Routers themselves can make a big difference. You want to make sure you get/have a robust router.</p>
            </div>

            <hr className='text-blue'/>

            <div className='flex flex-col gap-y-3 py-4'>
                <h1 className='font-semibold text-xl'>Choosing between the 2.4 and 5 ghz bands on your wireless router can make a difference. 5 is generally faster but 2.4 is generally more stable.</h1>
                <p className='tracking-wide text-xl'>Try them both and see what works for you. If your on 5 and having issues, switch to 2.4 and vice versa. If your router doesnt have dual bands then it may be time to upgrade. Please never use an all in one device that is a modem and wireless router. Make sure you have a seperate modem and router. The all in ones are generally junk. You should be rebooting your modem/router weekly to keep it in good working order. Reboot by unplugging them from the wayy and wait 2-3 minutes before plugging them back in. This reset can help with the buffering. If possible, hardwire your device to the router. That is, connect it directly to your modem or router with an ethernet cable so it is directly connected to the internet and doesnt use wifi. This will eliminate any/all issues related to wifi. Even amazon makes an ethernet adapter for firesticks because they know wifi can have/cause issues. Having an older device means processing power and chips are outdated and can be causing buffering. Things get better and require more to work efficiently. You wouldnt use that laptop from the 90’s to run a brand new video game. What video player you use can have an effect as well. Using a different player such as mx player or vlc can help with buffering. Both of those players are available for download from out filelinked store. ( filelink info is on the how to install pages ) Changing the setting within the app to use the hardware decoder instead of the software decoder can help give a better picture if your device has good processor and chips. If your using a firestick, make sure your using the hdmi extender. Having the stick hidden by the tv or furniture not only will cause interference with the wifi but can overheat the device ( especially since they never turn off ) and damage the wifi chips inside. Other devices near your firestick like security cameras can cause interference as well. Regularly delete apps not used and clear cache on apps you keep. A device that is near full on its resources will bog down and run slow. On a firestick, goto settings, applications, manage installed apps and then go down the list and delete ones you dont need and the ones you dont delete, click on them and go down and select clear cache. I know our service isnt perfect BUT the majority ( if not all ) of buffering you experience on live tv is not due to the service itself.</p>
            </div>
            </div>
            }
        </div>

        {/* <img className='mb-6' src={img_5} alt="" /> */}

        
    </div>
  )
}

export default Download 