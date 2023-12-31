import Image from "next/image"
import Link from "next/link"

const Nav = () => {
  return (
    <nav
      className="relative flex w-full flex-nowrap items-center justify-between bg-slate-900 py-2 text-neutral-500 shadow-lg hover:text-neutral-700 focus:text-neutral-700 dark:bg-neutral-600 lg:flex-wrap lg:justify-start lg:py-4"
      data-te-navbar-ref>
      <div className="flex w-full flex-wrap items-center justify-between px-3">
        <button
          className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
          type="button"
          data-te-collapse-init
          data-te-target="#navbarSupportedContent3"
          aria-controls="navbarSupportedContent3"
          aria-expanded="false" 
          aria-label="Toggle navigation">
          <span className="[&>svg]:w-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-7 w-7">
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clip-rule="evenodd" />
            </svg>
          </span>
        </button>
    
        <div
          className="!visible mt-2 hidden flex-grow basis-[100%] items-center lg:mt-0 lg:!flex lg:basis-auto"
          id="navbarSupportedContent3"
          data-te-collapse-item>
          <Link className="pr-2 text-xl text-yellow-400 dark:text-neutral-200" href="#"
            >Home</Link
          >
          <ul
            className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row"
            data-te-navbar-nav-ref>
            {/* <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
              <Link
                className="p-0 text-neutral-100 hover:text-yellow-400 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                href="/products"
                data-te-nav-link-ref
                >Products</Link
              >
            </li> */}

<div className="group relative text-2xl">       
        <button className="dark:bg-neutral-600 dark:[&.active]:text-neutral-100 rounded inline-flex items-center group p-0 text-neutral-100 hover:text-yellow-400 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"> 
       <span className="mr-1 text-base">Products</span>  
       
      <svg  className="fill-current h-4 w-4 group-hover:rotate-180 transition-transform"          xmlns="http://www.w3.org/2000/svg"          viewBox="0 0 20 20"        >  
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />      
              </svg>    
          </button>            {/* menu list */}     
           <ul className="rounded absolute hidden text-gray-700 pt-4 group-hover:block w-32   border-x-2 border-gray-200">       
           <hr className="h-px my-1 bg-yellow-400 border-0 dard:bg-yellow-400 " />
           <li className="bg-white hover:text-yellow-500 cursor-pointer text-base pl-3 font-medium">          Profile        </li>
           <hr className="h-px my-1 bg-gray-200 border-0 dard:bg-yellow-400 mx-2 " />
                   <li className="bg-white hover:text-yellow-500 cursor-pointer text-base pl-3 font-medium">          Settings        </li>  
                   <hr className="h-px my-1 bg-gray-200 border-0 dard:bg-yellow-400 mx-2 " />
                         <li className="bg-white hover:text-yellow-500 cursor-pointer text-base pl-3 font-medium">          Logout        </li>  
                         <hr className="h-px my-1 bg-gray-200 border-0 dard:bg-yellow-400 mx-2" />
                             </ul>          </div>  

            <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
              <Link
                className="p-0 text-neutral-100 hover:text-yellow-400 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                href="/attachments"
                data-te-nav-link-ref
                >Attachments</Link
              >
            </li>
            <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
              <Link
                className="p-0 text-neutral-100 hover:text-yellow-400 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                href="/about"
                data-te-nav-link-ref
                >About Us</Link
              >
            </li>
            <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
              <Link
                className="p-0 text-neutral-100 hover:text-yellow-400 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                href="/contactus"
                data-te-nav-link-ref
                >Contact</Link
              >
            </li>

            <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref>
              <Link
                className="p-0 text-neutral-100 hover:text-yellow-400 focus:text-neutral-700 disabled:text-black/30 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                href="/register"
                data-te-nav-link-ref
                >Register</Link>
            </li>        
          </ul>
          
        </div>
      </div>
    </nav>
    
                             
                            
  )
}

export default Nav