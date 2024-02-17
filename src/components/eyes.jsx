import React from 'react'
import Eyecmp from './eyecmp';

function Eyes() {
     
  return (
    <div className='eyes w-full h-[110vh] bg-[#E5E5E5] overflow-hidden'>
     <div data-scroll data-scroll-speed="-.8" className="w-full relative h-screen bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]">
     <div data-scroll data-scroll-speed=".3" className=''><Eyecmp /></div>
     </div>
    </div>
  )
}

export default Eyes