import React from 'react';
import Navbar from './components/navbar';
import Landingpage from './components/landingpage';
import Marquee from './components/marquee';
import About from './components/about';
import Eyes from './components/eyes';
import Featured from './components/featured';
import Cards from './components/cards';
import Startproject from './components/startproject';
import Footer from './components/footer';
import LocomotiveScroll from 'locomotive-scroll';


function App() {
const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full h-screen text-zinc-100 bg-zinc-900'>
      <Navbar />
      <Landingpage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      {/* <Cards /> */}
      <Startproject />
      <Footer />
    </div>
  )
}

export default App