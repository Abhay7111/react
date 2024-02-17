import { easeIn, motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div data-scroll data-scroll-speed="-.3" className='w-full py-14 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl h-fit mt-[70vh]'>
     <div className="text border-t-[1px] border-b-[1px] flex gap-1 overflow-hidden border-zinc-400">
     <motion.h1
     initial={{x:"0"}} animate={{x:"-100%"}}
     transition={{repeat: Infinity, ease:"linear", duration:10}}
     className=' text-[18vw] whitespace-nowrap uppercase mb-1 pr-20 leading-none font-[Founders Grotesk Semibold] font-bold'>we are ochi</motion.h1>
     <motion.h1
     initial={{x:"0"}} animate={{x:"-100%"}}
     transition={{repeat: Infinity, ease:"linear", duration:10}}
     className=' text-[18vw] whitespace-nowrap uppercase mb-1 pr-20 leading-none font-[Founders Grotesk Semibold] font-bold'>we are ochi</motion.h1>
     <motion.h1
     initial={{x:"0"}} animate={{x:"-100%"}}
     transition={{repeat: Infinity, ease:"linear", duration:10}}
     className=' text-[18vw] whitespace-nowrap uppercase mb-1 pr-20 leading-none font-[Founders Grotesk Semibold] font-bold'>we are ochi</motion.h1>
     </div>
    </div>
  )
}

export default Marquee