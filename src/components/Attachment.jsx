import React from 'react'
import Header1 from '@/components/Header1'
import Nav from '@/components/Nav'
import Homescreen from '@/components/Homescreen'
import Footer from '@/components/Footer'

function Attachment() {
  return (
    <div>
        <Header1 />
        < Nav />
        <Homescreen />
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

        <div className="flex flex-col items-center mr-6 pt-20 px-1 py-1 pb-40">
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
    <Footer />
    </div>
  )
}

export default Attachment