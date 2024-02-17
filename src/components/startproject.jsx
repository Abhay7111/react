import React from "react";
import Eyecmp from "./eyecmp";
import { GoDotFill } from "react-icons/go";
import { motion } from "framer-motion";

function Startproject() {
  return (
    <div data-scroll data-scroll-speed="1" className="strtp w-full relative bg-[#CDEA68] flex items-center justify-center flex-col mt-[-45vh]">
      <h1 className=" w-fit flex flex-col text-center mt-28 text-[10vw] tracking-tighter leading-none font-[800] text-zinc-900 text-[Founders_Grotesk]">READY <br /> TO START <br /> THE PROJECT?</h1>
          <div className=" relative top-[-40vh]"><Eyecmp /></div>
          <a href="#" className="bg-[#212121] px-6 rounded-full flex items-center py-3 gap-4 mt-10 mb-3">START THE PROJEC <GoDotFill /></a>
          <p className=" text-[1.7vw] font-thin text-zinc-900">or</p>
          <a href="#" className=" px-6 rounded-full flex items-center py-3 gap-4 mt-4 mb-12 border-[1px] border-zinc-800 text-zinc-800">HELL@OCHI.DESIGN <GoDotFill /></a>
    </div>
  );
}

export default Startproject;
