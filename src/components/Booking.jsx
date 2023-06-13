import React from 'react'

function Booking() {
  return (
    
<div className="flex fixed">
      <div className="w-1/2 h-[20vh] bg-yellow-500 sticky top-0 flex flex-col items-center justify-center">
        <p className="font-bold text-black text-lg">CAN WE HELP?</p>
        <p className="font-bold text-white text-lg">(+9) 847-291-4353</p>
      </div>
      <div className="w-1/2 h-[20vh] dark:bg-neutral-700 sticky top-0  pb=[10%] flex flex-col items-center justify-center">
      <p className="font-bold text-white text-lg">EARLY BOOKING IS AVAILABLE</p>
        <p className=" text-white">Latest update and news</p>
      </div>
      <div className="w-1/2 h-[20vh] dark:bg-neutral-700 sticky top-0  pb=[10%] flex items-center justify-center">
     
    
        <div>
          <input type="email" id="email" class="dark:bg-neutral-700 border-white  text-gray-900 text-sm   block w-full p-2.5 dark:bg-neutral-700 dark:placeholder-gray-400 dark:text-white border-0 border-gray-300 w-60 h-10 bg-transparent" placeholder="write your email and hit enter" required />
        
        </div>
       
        <button className="ml-6 bg-yellow-500 text-white px-4 py-2 rounded-md">
         Request For Enquiry
        </button>
        
      </div>
    </div>
  )
}

export default Booking