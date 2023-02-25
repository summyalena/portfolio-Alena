import React from 'react'
import { Transition } from '@headlessui/react'
import { Link } from 'react-scroll'
import {useState} from "react"
const Navbar = () => {
   const [isOpen,setIsOpen] = useState(false);
  return (
    <div>
      <nav className="w-full z-20 fixed md:mb-16 bg-[#F0F6F7FF]-400">

           {/* div for the main wrapper */}
        <div className="w-full bg-white-200">

                    {/* div that holds the first wrapper */}
           <div className="flex items-center w-full h-20">
                  {/* second wrapper that holds the nav writeups */}
             <div className="w-full flex items-center justify-between sm:mx-10 md:mx-20">

                         {/* div for the left heading */}
                 <div className="flex flex-shrink-0 px-1 items-center flex-justify-center py-2 ml-10">
                    <h1 className="font-bold cursor-pointer ">Lena <span className="text-pink-500 font-bold">Page</span></h1>
                 </div>
                       {/* div for the nav links */}
                        <div className="hidden md:block">
                        <div className="ml-32 pt-2 space-x-4 flex justify-center items-baseline ">
                            <Link activeClass="Home" to="home" offset={50} duration={500} smooth={true} className="text-pink-300 px-3 cursor-pointer hover:bg-white hover:text-indigo-500">Home</Link>
                            <Link activeClass="services" to="services" offset={50} duration={500}  smooth={true} className="text-black-300 px-3 cursor-pointer hover:text-pink-500">Skills</Link>
                            <Link activeClass="project" to="project" offset={50} duration={500}  smooth={true} className="text-black-300 px-3 cursor-pointer hover:text-pink-500">Projects</Link>
                            <Link activeClass="Contact" to="contact" offset={50} duration={500}  smooth={true} className="text-black-300 px-3 cursor-pointer hover:text-pink-500">Contact</Link>
                        </div>
                        </div>

                           {/* div for the right span */}
                        <div className='flex-shrink-0 justify-center flex justify-center '>
                           <h1 className='text-black-500 cursor-pointer hidden md:block font-semibold text-lg'>Say <span className="text-pink-500 text-xl font-bold">Hi!</span></h1>
                        </div>
                              {/* right span ends here */}

               </div>    
                          {/* second wrapper ends here */}

                 {/* for mobile screens */}
                 <div className="mr-14 flex md:hidden">
                    <button
                     onClick={()=>setIsOpen(!isOpen)} 
                     type="button" 
                    className='bg-pink-600 text-white inline-flex rounded-lg
                    cursor-pointer hover:bg-black
                     p-2 hover:text-white  focus:outline-none ring-white' 
                     aria-controls="mobile-menu" 
                     aria-expanded="false"
                     >
                       <span className='sr-only'>Open main menu</span>
                      {isOpen ? ( <svg
                               className="block h-6 w-6"
                               xmlns='http:///www.w3.org/2000/svg'
                               fill='none'
                               viewBox='0 0 24 24'
                               stroke='currentColor'
                               aira-hidden='true'>
                                 <path 
                                     strokeLinecap="round"
                                     strokeLinejoin ="round"
                                     strokeWidth="2"
                                     d="M6 18L18 6M6 6l12 12"/>
                               </svg>) :
                               (<svg
                                className="block h-6 w-6"
                                xmlns='http:///www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'
                                aira-hidden='true'>
                                  <path 
                                      strokeLinecap="round"
                                      strokeLinejoin ="round"
                                      strokeWidth="2"
                                     d= "M4 6h16M4 12h16M4 18h16"
                                      />
                                </svg>) }
                    </button>
                 </div>
                 {/* div that ends mobile screen button style up */}
           </div>
                {/* div that ends the first nav wrapper */}
        </div>
        {/* div that ends the main wrapper */}

        <Transition show={isOpen}
                     enter="transition ease-out duration-100
                     transform"
                     enterFrom="opacity-0 scale-95"
                     enterTo="opacity-100 scale-100"
                     leave='transition ease-out duration-80 transform'
                     leaveFrom='opacity-100 scale-100'
                     leaveTo="opacity-0 scale-95">
                       {(ref)=>(
                               <div className='md:hidden'
                                 id="mobile-menu" >
                                  <div 
                                  ref={ref}
                                   className="bg-white mr-15 flex flex-col space-y-5 mx-4 pt-5 pb-10"
                                   >
                                    <Link href='./home'
                                     activeClass='home'
                                      smooth={true} to='home'
                                       offset={50} 
                                       duration={100} 
                                    className="text-base text-black-200  hover:bg-pink-300 hover:text-white rounded-md p-3  hover:opacity-60">Home</Link>

                                   <Link href='./services' 
                                   activeClass='services'
                                    smooth={true} 
                                    to='services' 
                                    offset={50}
                                     duration={100} 
                                    className=" text-base text-black-200  hover:bg-pink-300 hover:text-white rounded-md p-3  hover:opacity-60">Services</Link>

                                   <Link href='./project' 
                                            activeClass='project' 
                                            smooth={true} 
                                            to='project'
                                              offset={50} 
                                              duration={100} 
                                       className="text-base text-black-200  hover:bg-pink-300 hover:text-white rounded-md p-3  hover:opacity-60">Projects</Link>

                                     <Link href='./contact' 
                                          activeClass='contact' 
                                          smooth={true} 
                                          to='contact'
                                          offset={50}
                                            duration={100} 
                                    className="text-base text-black-200  hover:bg-pink-300 hover:text-white rounded-md p-3  hover:opacity-60">Say <span className="text-blue-500 hover:text-white">hi!</span></Link>
                                  </div>
                                   </div> )}
            
        </Transition>
      </nav>
    </div>
  )
}

export default Navbar