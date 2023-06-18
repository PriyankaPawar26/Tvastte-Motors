import React from 'react'

function Footer() {
  return (
    <div>
         <div className="w-full h-96 dark:bg-neutral-800 pt-14" >
    <div className="flex">
      <div className="w-1/2 h-[20vh] sticky top-0 flex flex-col items-center justify-center pl-6">
        <p className="font-bold text-white text-lg  pl-4 pt-14">ABOUT US</p>
        <p className="text-white font-normal pl-44 text-neutral-600 pt-6">Our mission is to revolutioize the automotive industry by producing high-quility, environmentally-friendly electric vehicles that provides our customers with a superior driving that provide out customers with a superior driving experience while reducing their carbon footprint</p>
      </div>
      <div className="w-1/2 h-[20vh] sticky top-0 flex flex-col items-center justify-center pl-6">
      <p className="font-bold text-white text-lg  pl-4 pt-14 ">PRODUCTS</p>
        <p className="text-white font-thin pl-44 text-neutral-400 pt-6">Our mission is to revolutioize the automotive industry by producing high-quility, environmentally-friendly electric vehicles that provides our customers with a superior driving that provide out customers with a superior driving experience while reducing their carbon footprint</p>
     
        </div>
      <div className="w-1/2 h-[20vh] sticky top-0 flex flex-col items-center justify-center pl-6">
      <p className="font-bold text-white text-lg  pl-4 pt-14 ">CONTACT US</p>
        <p className="text-neutral-400 font-thin pl-44 text-neutral-400 pt-6">Our mission is to revolutioize the automotive industry by producing high-quility, environmentally-friendly electric vehicles that provides our customers with a superior driving that provide out customers with a superior driving experience while reducing their carbon footprint</p>
      </div>
      </div>
    </div>



    {/* Footer */}

    <div className="w-100 h-[10vh] bg-yellow-500 sticky top-0 flex flex-col items-center justify-center">
        <p className="font-midium text-black text-lg">Copyright @2023. All Rights Reserved. __Tvastte India Pvt. ltd.</p>
       
      </div>
  
    </div>
  )
}

export default Footer