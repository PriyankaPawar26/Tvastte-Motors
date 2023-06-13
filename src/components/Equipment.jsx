import React from 'react'
import Link from "next/link"
import Image from "next/image"

function Equipment() {
  return (
    <div>
    <div className="bg-white font-light text-xl flex flex-col text-center pt-20">
        <h1>WORK OF EXCELLENCE</h1>
        <h1 className="bg-white font-black text-4xl text-center text-gray-950">THE PERFECT EQUIPMENT FOR</h1>
    </div>
    <div className=" bg-white flex text-center flex-row pl-64">
     <img className="w-1/4 h-1/4 pt-16" src="/images/building.jpg" />
     <img className="w-1/4 h-1/4 pt-16" src="/images/building.jpg" />
     <img className="w-1/4 h-1/4 pt-16" src="/images/building.jpg" />
    </div>
    <div className="bg-white font-light text-xl flex flex-col text-center ">
    <div className=" bg-white flex text-center flex-row pl-64">
     <img className="w-1/4 h-1/4" src="/images/building.jpg" />
     <img className="w-1/4 h-1/4 " src="/images/building.jpg" />
     <img className="w-1/4 h-1/4 " src="/images/building.jpg" />
    </div>
    </div>


    <div className="bg-white font-light text-xl flex flex-col text-center pt-20">
        <h1>CHOOSE THE RIGHT TOOLS FROM OUR VERSATILE SELECTION OF</h1>
        <h1 className="bg-white font-black text-4xl text-center text-gray-950">ATTACHMENTS</h1>
    </div>
    <div className="bg-white font-light text-xl flex flex-col text-center pt-20 pl-64">
    <ul class="flex">
  <li class="mr-3">
    <a class="inline-block  py-1 px-5 bg-yellow-500 text-black font-bold text-base" href="#">SHOW ALL</a>
  </li>
  <li class="mr-3">
    <a class="inline-block py-1 px-5 text-black font-bold text-base hover:bg-yellow-500" href="#">BLACKHOE LOADER H4</a>
  </li>
  <li class="mr-3">
    <a class="inline-block py-1 px-5 text-black font-bold text-base hover:bg-yellow-500" href="#">FRONT LOADER H4</a>
  </li>
  <li class="mr-3">
    <a class="inline-block py-1 px-5 text-black font-bold text-base hover:bg-yellow-500" href="#">FRONT LOADER H4</a>
  </li>
</ul>
<hr className="w-100 h-0.5 bg-yellow-400 border-0 rounded md:my-0"/>
    </div>
  
  {/* Attachments field */}

    <div className="flex bg-white pl-64">
        <div className="flex flex-col items-center mr-6 pt-20 px-1 py-1">
          <img
            src="/images/tvasttelogo.png"
            alt="Image 1"
            className="w-48 h-48 object-cover mb-2"
          />
          <p className="text-center text-xl font-semibold">Blackhoe Loader H4</p>
        </div>

        <div className="flex flex-col items-center mr-6 pt-20 px-1 py-1">
          <img
            src="/images/tvasttelogo.png"
            alt="Image 2"
            className="w-48 h-48 object-cover mb-2"
          />
          <p className="text-center text-xl font-semibold">Front Loader H4</p>
        </div>

        <div className="flex flex-col items-center pt-20 px-1 py-1">
          <img
            src="/images/tvasttelogo.png"
            alt="Image 3"
            className="w-48 h-48 object-cover mb-2"
          />
          <p className="text-center text-xl font-semibold">Front Loader E2</p>
        </div>
        <div className="flex flex-col items-center pt-20 px-6 py-1">
          <img
            src="/images/tvasttelogo.png"
            alt="Image 3"
            className="w-48 h-48 object-cover mb-2"
          />
          <p className="text-center text-xl font-semibold">Front Loader E2</p>
        </div>
      </div>
      <div className="flex bg-white pl-64">
        <div className="flex flex-col items-center mr-6 pt-20 px-1 py-1">
          <img
            src="/images/tvasttelogo.png"
            alt="Image 1"
            className="w-48 h-48 object-cover mb-2"
          />
          <p className="text-center text-xl font-semibold">Blackhoe Loader H4</p>
        </div>

        <div className="flex flex-col items-center mr-6 pt-20 px-1 py-1">
          <img
            src="/images/tvasttelogo.png"
            alt="Image 2"
            className="w-48 h-48 object-cover mb-2"
          />
          <p className="text-center text-xl font-semibold">Front Loader H4</p>
        </div>

        <div className="flex flex-col items-center pt-20 px-1 py-1">
          <img
            src="/images/tvasttelogo.png"
            alt="Image 3"
            className="w-48 h-48 object-cover mb-2"
          />
          <p className="text-center text-xl font-semibold">Front Loader E2</p>
        </div>
        <div className="flex flex-col items-center pt-20 px-6 py-1">
          <img
            src="/images/tvasttelogo.png"
            alt="Image 3"
            className="w-48 h-48 object-cover mb-2"
          />
          <p className="text-center text-xl font-semibold">Front Loader E2</p>
        </div>
      </div>

      {/* Features And Benifits */}
      <div className="bg-white font-light text-xl flex flex-col text-center pt-20">
        <h1>CHOOSE THE RIGHT TOOLS FROM OUR VERSATILE SELECTION OF</h1>
        <h1 className="bg-white font-black text-4xl text-center text-gray-950">FEATURES & BENEFITS</h1>
        <div className="flex flex-col items-center pt-20 px-1 py-1">
          <img
            src="/images/truck.png"
            alt="Image 3"
            className="w-5/6 h-5/6 object-cover mb-2"
          />
        </div>
    </div>

    {/* Contact Page */}
    <div className="w-full h-96 dark:bg-neutral-800 pt-14" >
    <div className="flex">
      <div className="w-1/2 h-[20vh] sticky top-0 flex flex-col items-center justify-center pl-6">
        <p className="font-bold text-white text-lg  pl-4 pt-14">ABOUT US</p>
        <p className="text-white font-normal pl-44 text-neutral-600 pt-6">Our mission is to revolutioize the automotive industry by producing high-quility, environmentally-friendly electric vehicles that provides our customers with a superior driving that provide out customers with a superior driving experience while reducing their carbon footprint</p>
      </div>
      <div className="w-1/2 h-[20vh] sticky top-0 flex flex-col items-center justify-center pl-6">
        <p className="font-bold text-white text-lg  pl-4 pt-14">PRODUCTS</p>
        <p className="text-white font-thin pl-44 text-neutral-400 pt-6"></p>
      </div>
      <div className="w-1/2 h-[20vh] dark:bg-neutral-800 sticky top-0  pb=[10%] flex items-center justify-center">
     
        
      </div>
    </div>
  
    </div>

    </div>
  )
}

export default Equipment