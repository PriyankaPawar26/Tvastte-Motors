import React from 'react'
import localFont from 'next/font/local'

// Font files can be colocated inside of `app`
const myFont = localFont({
  src: '../../public/fonts/space-age.ttf',
  display: 'swap',
})


function Header1() {
  return (
    <div>
      <div className="h-20 w-full bg-white">
      <header className="flex items-center p-4 bg-white-200 mt-15 mb-5">
      <div className={`${myFont.className} flex items-center ml-200 pl-72 pt-2 `}>
        <img
          src="/images/tvasttelogo.png"
          alt="Logo"
          className="w-10 h-10 text-aline:center px-0"
        />
         
         <h1 className="ml-2 bg-white font-normal text-4xl text-center text-gray-950">TVASTTE</h1>
      </div>
      <div className="flex items-center pl-28 pt-2">
        <div className=" text-lg ">
          <p className=" text-xs text-gray-700">Call Us</p>
          <p className=" font-bold text-xs">123-456-7890</p>
        </div>
        <div className="ml-4">
          <p className="ml-4 text-xs text-gray-700">Email Us:</p>
          <p className="ml-4 font-bold text-xs">info@example.com</p>
        </div>
        <button type='button' className="ml-20 bg-yellow-500 text-white text-xs px-5 py-2 rounded-sm">
          Book Now
        </button>
      </div>
    </header>
      </div>
    </div>
  )
}

export default Header1