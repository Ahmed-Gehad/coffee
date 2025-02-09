import React from 'react'
import Landing from '../components/home/Landing'
import Menu from '../components/home/Menu'
import Gallery from '../components/home/Gallery'
import Testimonials from '../components/home/Testimonials'
import Contact from '../components/home/Contact'



const HomePage = () => {
  return (
    <div>
      <Landing />
      <Menu />
      <Gallery />
      <Testimonials />
      <Contact />
    </div>
  )
}

export default HomePage