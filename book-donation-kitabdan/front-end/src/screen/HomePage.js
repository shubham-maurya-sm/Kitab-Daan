import React from 'react'
import Navigation from '../components/Navigation'
import Carousel from '../components/Carousel'
import AboutUs from '../components/AboutUs'
import Footer from '../components/Footer'
import CustReview from '../components/UserReview'
import WhatWork from '../components/WhatWork'
import BooksCategory from '../components/BooksCategory'
import Vision from '../components/Vision'
export default function HomePage() {
  return (
    <div>
      <div><Navigation/></div>
      <div> <Carousel/> </div>
      <div> <AboutUs/></div>
      <div><Vision/></div>
      <div> <BooksCategory/> </div>
      <div> <WhatWork /></div>
      <div><CustReview /></div>
      <div> <Footer/> </div>
    </div>
  )
}
