import React from 'react'
import Image from 'next/image'

function ProductRange() {
  return (
    <div className="flex bg-white pt-12">
      <div className="w-1/2 h-[30vh] bg-white sticky top-0 flex flex-col items-center justify-center">
        <p className="text-black text-xl">WE HAVE VARIOUS</p>
        <p className="font-extrabold text-black text-3xl">PRODUCT RANGE</p>
      </div>
      <div className="flex">
        <div className="flex flex-col items-center mr-6">
          <img
            src="/images/tvasttelogo.png"
            alt="Image 1"
            className="w-48 h-48 object-cover mb-2"
          />
          <p className="text-center text-xl font-semibold">Blackhoe Loader H4</p>
        </div>

        <div className="flex flex-col items-center mr-6">
          <img
            src="/images/tvasttelogo.png"
            alt="Image 2"
            className="w-48 h-48 object-cover mb-2"
          />
          <p className="text-center text-xl font-semibold">Front Loader H4</p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="/images/tvasttelogo.png"
            alt="Image 3"
            className="w-48 h-48 object-cover mb-2"
          />
          <p className="text-center text-xl font-semibold">Front Loader E2</p>
        </div>
      </div>
      </div>
    
  )
}

export default ProductRange