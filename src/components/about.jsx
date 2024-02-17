import React from "react";
import { GoArrowUpRight } from "react-icons/go";

function About() {
  return (
    <div data-scroll data-scroll-speed="-.1" className=" about w-full px-10 py-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl z-32">
      <h1 className='text-[4vw] text-black font-["Neue Montreal"] leading-[4.5vw] tracking-tighter'>
        Ochi is a strategic partner for fast-growing tech businesses that need
        to{" "}
        <a className=" underline underline-offset-4" href="#">
          raise funds
        </a>
        ,{" "}
        <a className=" underline underline-offset-4" href="#">
          sell products
        </a>
        ,{" "}
        <a className=" underline underline-offset-4" href="#">
          explain complex ideas
        </a>
        , and{" "}
        <a className=" underline underline-offset-4" href="#">
          hire great people
        </a>
        .
      </h1>
      <div className="w-full border-t-[1px] border-zinc-800 mt-14"></div>
      <div className="w-full gap-10 flex text-zinc-800 mt-5">
        <div className="w-1/2">
          <p>What you can expect:</p>
        </div>
        <div className="w-1/2 flex items-end gap-20">
          <div className="w-1/2 flex flex-col text-[1rem] tracking-tighter leading-[2vw] gap-6 font-['Neue Montreal']">
            <p>
              We create tailored presentations to help you persuade your
              colleagues, clients, or investors. Whether it’s live or digital,
              delivered for one or a hundred people.
            </p>
            <p>
              We believe the mix of strategy and design (with a bit of coffee)
              is what makes your message clear, convincing, and captivating.
            </p>
          </div>
          <div>
            <p className="flex flex-col gap-5">S:
              <div className="flex flex-col underline underline-offset-2">
              <a href="#">Instagram</a>
              <a href="#">Behance</a>
              <a href="#">Facebook</a>
              <a href="#">Linkedin</a>
              </div>
            </p>
          </div>
        </div>
      </div>
      <div className=" border-b-[1px] border-zinc-800 mt-10"></div>
      <div className="w-full flex mt-5">
        <div className="w-1/2">
          <h1 className=" text-[4vw] text-zinc-800">Our approach:</h1>
          <div>
            <a href="#" className=" mt-5 bg-zinc-800 px-4 rounded-full py-4 flex w-fit gap-12 text-[1.2vw] font-['Neue Montreal'] items-center justify-between tracking-tighter">READ ME <div className=" text-zinc-800 bg-zinc-200 p-1 scale-[1.7] text-[1vw] rounded-full"><GoArrowUpRight /></div></a>
          </div>
        </div>
        <div className="w-1/2">
          <div className=" overflow-hidden rounded-xl w-full">
            <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
