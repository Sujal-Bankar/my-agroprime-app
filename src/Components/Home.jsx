import React from 'react'
import PageIcon from './PageIcon'
import HeroSection from './HeroSection'
import IntroSection from './IntroSection'
import WhatWeOffer from './WhatWeOffer'
import FAQSection from './FAQSection'
import WhyChooseUs from './WhyChooseUs'
import Footer from './Footer'
import Navbar from './Navbar'

const Home = () => {
  return (
    <>
    <Navbar variant="hero" />
      <PageIcon />
      <HeroSection />
      <IntroSection />
      <WhatWeOffer />
      <FAQSection />
      <WhyChooseUs />
      <Footer />
    </>
  )
}

export default Home
