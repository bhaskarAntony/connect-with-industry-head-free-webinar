import React from 'react'
import '../styles/home.css'
import HomeHero from '../components/HomeHero'
import Works from '../components/Works'
import About from '../components/About'
import Highlights from '../components/Highlights'
import FAQ from '../components/FAQ'
import Enroll from '../components/Enroll'
import Footer from '../components/Footer'
import Certificate from '../components/Certificate'
import Modules from '../components/Modules'

function Home() {
  return (
    <div className='home'>
      <HomeHero/>
      {/* <Modules/> */}
      <Highlights/>
      <Enroll/>
      <Certificate/>
      {/* <About/>     */}
      
      <Enroll/>
      <FAQ/>

    </div>
  )
}

export default Home
