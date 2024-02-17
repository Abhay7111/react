import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { GoDotFill } from "react-icons/go";
import Cards from "./cards";

function Featured() {
  useEffect(() => {
    const card1 = document.querySelector("#card1");
    const card2 = document.querySelector("#card2");
    const imgdv = document.querySelector("#imgdv");
    const imgdv2 = document.querySelector("#imgdv2");
    const imgscl = document.querySelector("#imgscl");
    const imgscl2 = document.querySelector("#imgscl2");
    const text1 = document.querySelector("#text1");
    const text2 = document.querySelector("#text2");
    text1.style.opacity = "0%";
    text2.style.opacity = "0%";

    imgdv.addEventListener("mousemove", (e) => {
      imgdv.style.scale = "0.97";
      imgscl.style.scale = "1.1";
      text1.style.bottom = "4vh";
      text1.style.transitionDuration = "0.3s";
      text1.style.opacity = "100%";
    });
    imgdv.addEventListener("mouseleave", (e) => {
      imgdv.style.scale = "1";
      imgscl.style.scale = "1";
      text1.style.bottom = "-15vh";
      text1.style.transitionDuration = "0.07s";
      text1.style.opacity = "0%";
    });

    imgdv2.addEventListener("mousemove", (e) => {
      imgdv2.style.scale = "0.97";
      imgscl2.style.scale = "1.1";
      text2.style.bottom = "4vh";
      text2.style.transitionDuration = "0.3s";
      text2.style.opacity = "100%";
    });
    imgdv2.addEventListener("mouseleave", (e) => {
      imgdv2.style.scale = "1";
      imgscl2.style.scale = "1";
      text2.style.bottom = "-15vh";
      text2.style.transitionDuration = "0.07s";
      text2.style.opacity = "0%";
    });
  });

  
  return (
    <div>
      <div data-scroll data-scroll-speed=".2" className="featured w-full py-10 bg-zinc-900">
      <div className=" w-full border-b-[1px] pb-14 border-zinc-300">
        <h1 className=" text-6xl font-[Neue_Montreal] tracking-tighter">
          Featured projects
        </h1>
      </div>
      <div className="card w-full mt-20 flex items-center justify-center">
        <div className="headings absolute w-fit h-[30vh] z-10 flex gap-4 items-center justify-center overflow-hidden">
          <div className=" relative h-40 w-[20vw] flex items-center justify-center">
          <h1
            id="text1"
            className=" py-3 absolute -bottom-[100%] text-[9vw] tracking-tighter ease-in transition-all leading-none font-bold  card1heading text-[#CDEA68]"
          >
            FYDE
          </h1>
          <h1
            id="text2"
            className=" py-3 absolute -bottom-[100%] text-[9vw] tracking-tighter ease-in transition-all leading-none font-bold card2heading text-[#CDEA68]"
          >
            VISE
          </h1>
          </div>
        </div>
        <div
          id="card1"
          className="card1 w-[45vw] h-fit rounded-[15px] overflow-hidden"
        >
          <p className=" ml-2 mb-4 flex items-center gap-2 font-thin text-[1vw]">
            <GoDotFill />
            FYDE
          </p>
          <div
            id="imgdv"
            className=" overflow-hidden scale-[1] rounded-[15px] ease-in transition-all duration-[0.5s]"
          >
            <img
              className="ease-in transition-all duration-[0.5s] w-full"
              id="imgscl"
              src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
            />
          </div>
          <div className=" w-full h-10 flex items-center px-2 mt-2">
            <ul className="flex gap-2 text-[0.91vw] tracking-tighter">
              <li className=" border-[1px] px-4 py-1 rounded-full w-fit">
                AUDIT
              </li>
              <li className=" border-[1px] px-4 py-1 rounded-full w-fit">
                COPYWRITING
              </li>
              <li className=" border-[1px] px-4 py-1 rounded-full w-fit">
                SALES DECK
              </li>
              <li className=" border-[1px] px-4 py-1 rounded-full w-fit">
                SLIDES DESIGN
              </li>
            </ul>
          </div>
        </div>
        <div
          id="card2"
          className="card2 w-[45vw] h-fit rounded-[15px] overflow-hidden"
        >
          <p className=" ml-2 mb-4 flex items-center gap-2 font-thin text-[1vw]">
            <GoDotFill />
            VISE
          </p>
          <div
            id="imgdv2"
            className="overflow-hidden scale-[1] rounded-[15px] ease-in transition-all duration-[0.5s]"
          >
            <img
              id="imgscl2"
              className="ease-in transition-all duration-[0.5s] w-full"
              src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
            />
          </div>
          <div className=" w-full h-10 flex items-center px-2 mt-2">
            <ul className="flex gap-2 text-[0.91vw] tracking-tighter">
              <li className="border-[1px] px-4 py-1 rounded-full w-fit">
                AGENCY
              </li>
              <li className="border-[1px] px-4 py-1 rounded-full w-fit">
                COMPANY PRESENTATION
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className=" btndv w-full flex items-center justify-center mt-10">
          <a className="w-full flex items-center justify-center" href="#"><div className="btn w-1/5 h-14 bg-zinc-100 text-zinc-900 font-semibold tracking-tighter leading-none rounded-full flex items-center justify-center"><h3 className="gap-7 flex items-center">VIEW ALL CASE STUDIES <span><GoDotFill /></span></h3></div></a>
      </div>
    </div>
    <Cards/>
    </div>
  );
}

export default Featured;
