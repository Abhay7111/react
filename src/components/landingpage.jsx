import { motion } from "framer-motion";
import React from "react";
import { FaBeer } from 'react-icons/fa';
import { FiArrowUpRight } from "react-icons/fi";


function Landingpage() {
  return (
    <div data-scroll data-scroll-speed="-.7" className="w-full h-screen bg-zinc-900 pt-1 main z-0">
      <div className="textstructure mt-40 px-20">
        {["WE CREATE", "EYE-OPENING", "PRESENTATIONS"].map((item, index) => {
          return (
            <div className="masker font-['Founders Grotesk Semibold'] overflow-hidden">
              <div className="w-fit flex items-center">
               {index === 1 && (<motion.div 
               initial={{width:0}} 
               animate={{width:'9vw'}} 
               transition={{ease:[0.76, 0, 0.24, 1],duration:"1"}} 
               className="w-[9vw] h-[5vw] relative top-[0.5vw] rounded-md bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg')]"></motion.div>)}
              <h1 className="text-[7.5vw] leading-[6vw] font-bold tracking-tighter">
                {item}
              </h1>
              </div>
            </div>
          );
        })}
        <div className=" border-t-[1px] border-zinc-700 mt-32 flex justify-between items-center py-5">
        {[
             "For public and private companies",
             "From the first pitch to IPO",
          ].map((item, index) => (
               <p className="text-md font-light tracking-tight leading-none">
            {item}
          </p>
        ))}
        <div className="flex justify-between items-center gap-2">
        <a href="https://abhay7111.github.io/portfolio"><div className="px-5 py-2 border-[1px] rounded-full border-zinc-700 text-sm capitalize">START THE PROJECT</div></a>
        <div className="w-7 h-7 flex items-center justify-center rounded-full border-[1px] text-[1.5vw]"><FiArrowUpRight /></div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
