import React, { useEffect, useState } from 'react'

function Eyecmp() {
     const [rotate, setrotate] = useState(0);
     const Area = document.getElementsByClassName("eyes");
     useEffect(()=>{
          window.addEventListener("mousemove", (e)=>{
               const moseX = e.clientX;
               const moseY = e.clientY;

               let deltaX = moseX - window.innerWidth/2;
               let deltaY = moseY - window.innerHeight/2;

               var angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);
               setrotate(angle-180);
          })
     })
  return (
    <div data-scroll data-scroll-speed="-.3" id='eyemouse'>
     <div className=" absolute w-fit top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex items-center justify-center gap-20">
          <div className="eyes bg-zinc-50 w-[15vw] h-[15vw] rounded-full flex items-center justify-center">
               <div className="blccir rounded-full w-1/2 h-1/2 bg-zinc-900 relative items-center justify-center">
                    <div style={{transform:`translate(-50%, -50%) rotate(${rotate}deg)`}} className='w-full line h-10 px-1 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                    <div className="blccir rounded-full w-6 h-6 bg-zinc-100 flex items-center justify-cente">
                         
                    </div>
                    </div>
               </div>
          </div>
          <div className="eyes bg-zinc-50 w-[15vw] h-[15vw] rounded-full flex items-center justify-center">
               <div className="blccir rounded-full w-1/2 h-1/2 bg-zinc-900 relative items-center justify-center">
                    <div style={{transform:`translate(-50%, -50%) rotate(${rotate}deg)`}} className=' w-full line h-10 px-1 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                    <div className="blccir rounded-full w-6 h-6 bg-zinc-100 flex items-center justify-cente">
                         
                    </div>
                    </div>
               </div>
          </div>
     </div>
    </div>
  )
}

export default Eyecmp