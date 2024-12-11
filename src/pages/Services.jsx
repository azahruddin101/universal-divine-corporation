import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import ServicesGrid from '../components/Services/ServicesData'

const Services = () => {
  return (
    <>
        <Navbar />
        <ServicesGrid/>
        <Footer/>
    </>
  )
}

export default Services