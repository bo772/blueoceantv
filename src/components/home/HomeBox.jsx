import React from 'react'

import {MdTv, MdPhoneIphone} from 'react-icons/md'
import {IoMdTrophy, IoMdGlobe,} from 'react-icons/io'
import {BsFilm} from 'react-icons/bs'

const box_items =[
    {name: 'High Quality', paragraph: 'We offer best in class quality. We have SD, HD 720p and FHD 1080p with FULL BIT RATE support.', icon: <MdTv className='homebox_icon'/>},
    {name: 'Devices Support IPTV', paragraph: 'Fire TV Stick 4K streaming device , Android Phone , Android Box , Android TV , Smart TV And, iPhone  , iPad , Computer , WebPlayer are the Supported Platforms', icon: <MdPhoneIphone className='homebox_icon'/>},
    {name: 'Global provider', paragraph: 'We offer our services World-Wide. There are no limits with our service. You can watch any channel you wish and buy subscription from where ever you are located.', icon: <IoMdGlobe className='homebox_icon'/>},
    {name: 'High speed and stability', paragraph: 'Our infrastructure in regards of servers and bandwidth is one of its kind. We are very proud of our high quality channel list and streaming.', icon: <IoMdTrophy className='homebox_icon'/>},
    {name: 'Custom playlist', paragraph: 'You can edit your channel list. The channels are grouped by countries, all you have to do is choose which you want.', icon: <BsFilm className='homebox_icon'/>},
]

const HomeBox = () => {
  return (
    <div className='flex flex-wrap justify-center gap-8 sm:gap-12 py-4 sm:py-16'>
        {box_items.map( item => (
            <div key={item.name} className="flex flex-col  items-center justify-center gap-y-4 p-4 rounded-xl shadow-lg max-w-[20rem] min-h-[15rem] bg-">
                <div className='sm:h-[18%]'>{item.icon}</div>
                <hr className='w-full bg-slate text-softblue'/>
                <h1 className='sm:h-[15%]  text-xl font-semibold text-blue text-center'>{item.name}</h1>
                <p className='sm:h-[60%] '>{item.paragraph}</p>                
            </div>
        ))}
    </div>
  )
}

export default HomeBox