
import React from 'react'
import Header1 from './Header1'
import Nav from './Nav'
import Homescreen from './Homescreen'
import Booking from './Booking'
import Footer from './Footer'

function AboutUs() {
  return (
   <div>
  <Header1 />
  <Nav />
  < Homescreen />
  <Booking />
  <div className=' pl-20 bg-white'>
    <div className='bg-white flex flex-row'>
        
        <div className='flex flex-col bg-white w-full pl-12'>
        <p className='text-xl pt-12'>ABOUT US</p>
     <h1 className='font-black text-3xl pt-4'>WE DELIVER LANDMARK PROJECTS</h1>
     <h1 className='pt-4 text-lg'>Our vision is to be the world's leading electric vehicle manufacturer, recognized for our commitment to innovation, sustainability, and customer satisfaction. We aim to create a cleaner, greener, and more sustainable future for all, while delivering value to our stakeholders and shareholders. </h1>
        </div>
        <div className='flex flex-col pl-20 pr-16 pt-8 bg-white'>
          <h1 className='font-black text-3xl pt-14'>OUR MISSION</h1>
          <h1 className='pt-4 text-lg'>Our mission is to revolutionize the automotive industry by producing high-quility, environmentally friendly electric vehicles that provide our customers with a superior driving experience while redusing their carbon footprint. </h1>
          <div className='flex flex-row'><h1>WE'VE REPUTION FOR EXCELLENCE.</h1>
          <h1>WE BUILD PARTNERSHIPS</h1>
          </div>
        </div>
    </div>
    </div>
    <Footer />
    </div>

  )
}

export default AboutUs