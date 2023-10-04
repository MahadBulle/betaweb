import React from 'react'
import HeroSection from './HeroSection'
import HeroContent from './HeroContent'
import Navbar from '../shared/Navbar'
import Features from './features'
import OurClients from './OurClients'
import Services from './Services'
import Footer from '../shared/Footer'
// import  {CarouselWithContent}  from './clientCrouser'

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <HeroContent />
      <Features />
      <OurClients/>
      <Services/>
      <Footer/>

      {/* <CarouselWithContent/> */}




      </>
  )
}
