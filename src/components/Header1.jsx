import React from 'react'
import Image from 'next/image'
import localFont from 'next/font/local'



const myFont = localFont({
    src: '../../public/fonts/space-age.ttf',
    display: 'swap',
  })
  
function Header1() {
  return (
    <>   
   
    
  <header className="flex items-center justify-between p-4 bg-white-200 mt-15 mb-5">
      <div className="flex items-center ml-200 pl-60">
        <img
          src="/images/tvasttelogo.png"
          alt="Logo"
          className="w-14 h-14 text-aline:center px-0"
        />
         
         <h1 className="ml-6 bg-white font-bold text-4xl text-center text-gray-950">TVASTTE</h1>
      </div>
      <div className="flex items-center">
        <div className="ml-4 text-lg">
          <p className="ml-4 text-lg">Call Us:</p>
          <p className="ml-4 font-bold text-lg">123-456-7890</p>
        </div>
        <div className="ml-4">
          <p className="ml-4 text-lg">Email Us:</p>
          <p className="ml-4 font-bold text-lg">info@example.com</p>
        </div>
        <button className="ml-6 bg-blue-500 text-white px-4 py-2 rounded-md">
          Book Now
        </button>
      </div>
    </header>



  </>
  )

}

export default Header1