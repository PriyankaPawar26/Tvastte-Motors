import React from 'react'
import Header1 from './Header1'
import Nav from './Nav'
import Footer from './Footer'
function ContactUs() {
  return (
    <div>
        <Header1 />
        <Nav />
<div className='bg-white w-100 pt-10'>
          <div className='bg-white pl-40 pt-6'>
            <h1 className='pt-4 text-lg'>REAH OUT TO US</h1>
            <h1 className='font-black text-4xl text-slate-800 pt-4'>CONTACT US</h1>
            <h1 className='pt-4 font-normal text-lg'>For more information please find your local dealer on our FIND A DEALER section or contact us online by filling in the fields below:</h1>
           <h1 className='pt-2 text-lg'> by filling in the fields below:</h1>
          </div>
         <div class="container ">
    <div class="w-100 bg-white rounded shadow-md pl-36">
    
    <div class="w-11/12 ">
  <div class=" items-center min-h-screen">
    <div class="w-full max-w-md bg-white rounded-lg shadow-md p-6">
    
      <form className='w-11/12'>
        <div class="mb-6 ">
          <label class="block mb-2 font-bold text-gray-700" for="enquiry">Nature of Enquiry</label>
          <select class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" id="enquiry" name="enquiry">
            <option value="sales">Sales</option>
            <option value="support">Support</option>
            <option value="general">General</option>
          </select>
        </div>
        <div class="mb-6">
          <label class="block mb-2 font-bold text-gray-700" for="name">Name</label>
          <input class=" w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" id="name" name="name" />
        </div>
        <div class="mb-6">
          <label class="block mb-2 font-bold text-gray-700" for="phone">Phone Number</label>
          <input class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" type="tel" id="phone" name="phone" />
        </div>
        <div class="mb-6">
          <label class="block mb-2 font-bold text-gray-700" for="pin">Pin Code</label>
          <input class="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500" type="text" id="pin" name="pin" />
        </div>
        <button class="w-40 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300" type="submit">
          Submit
        </button>
      </form>
    </div>
  </div>
</div>
    </div>
  </div>
    </div>

    <Footer />
    </div>
  )
}

export default ContactUs