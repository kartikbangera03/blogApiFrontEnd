import React from 'react'
import Navbar  from '../components/Navbar'
import Intro from '../components/Intro'
import BrowsePosts from '../components/BrowsePosts'
import Footer from '../components/Footer'


const Homepage = () => {
  return (
    <>
    <Navbar />
    <Intro/>
    <BrowsePosts/>
    <Footer/>
  </>
  )
}

export default Homepage