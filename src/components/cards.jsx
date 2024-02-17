import { motion } from 'framer-motion'
import React from 'react'

function Cards() {
  return (
    <div className='card w-full h-screen bg-zinc-900 flex items-center justify-around px-10 gap-6'>
     <div className=' bg-[#004D43] w-[45vw] h-[56vh] rounded-[20px] flex items-center justify-center relative'>
          <img className='scale-[1.7]' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" />
          <a className=' absolute bottom-2 left-4 text-[0.8vw] border-[1px] px-3 pb-1 rounded-full flex items-center justify-center' href="#"><p><span className=' text-[1.2vw]'>©</span>2019-2022</p></a>
     </div>
     <div className=' bg-[#212121] w-[20vw] h-[56vh] rounded-[20px] flex items-center justify-center relative'>
          <img className=' scale-[1.2]' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" />
          <a className=' absolute bottom-2 left-4 text-[0.7vw] border-[1px] px-3 py-1 rounded-full flex items-center justify-center' href="#"><p>RATING 5.0 ON CLUTCH</p></a>
     </div>
     <div className=' bg-[#212121] w-[20vw] h-[56vh] rounded-[20px] flex items-center justify-center relative'>
          <img className='scale-[0.6]' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" />
          <a className=' absolute bottom-2 left-4 text-[0.7vw] border-[1px] px-3 py-1 rounded-full flex items-center justify-center' href="#"><p>BUSINESS BOOTCAMP ALUMNI</p></a>
     </div>
    </div>
  )
}

export default Cards