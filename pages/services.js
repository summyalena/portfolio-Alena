import React from 'react'
import {Element} from 'react-scroll';
import { TiHtml5 } from "react-icons/ti";
import {SiNextdotjs} from "react-icons/si"
import {SiTailwindcss} from "react-icons/si"
import {RiReactjsLine} from "react-icons/ri"
import {IoLogoJavascript} from "react-icons/io"
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import {useInView} from 'react-intersection-observer'
import {useAnimation} from 'framer-motion'
import {useState} from 'react'

const Variants = {
   visible:{opacity:1, scale:1, transition:{duration:1,delay:0.7, type:"spring"}},
   hidden:{opacity:0, scale:0}
}
function Services() {
 
  const [ref, inView] = useInView();
  const animation = useAnimation();
         useEffect(() => {
          if(inView){

             animation.start("visible")  
          }
             }, [animation,inView])
  return (
    <Element  id="services" name="services">
        
       <div 
        className="w-full h-auto my-20 md:my-35 md:pb-20 md:pt-10 items-center flex flex-col justify-center">
               <h2 className="text-5xl mb-3 mt-2 text-center font-bold text-indigo-700">My Skillset</h2>
                <p className='text-center text-1.3xl max-w-xl font-serif mt-2'>A couple of tech stacks and tools I have integrated into my workflow to deliver efficient, well-tested and scalable applications to clients.</p>
         <div  ref={ref}
                  className="w-full mt-5 flex flex-wrap justify-center ">
                 {/* wrapper */}
               
                 
                 <motion.div  animate={animation}  variants={Variants} className="flex flex-col bg-white rounded-lg mx-10 shadow-md w-50
                 m-7  overflow-hidden  sm:w-30 cursor-pointer ">
                  <motion.div className='' whileHover={{scale:0.8, transition:{duration:0.2, type:"fade-in"}}}>
                      <TiHtml5 className='rounded-md bg-[#E34C26] m-6 mx-auto shadow-xl w-40 h-40 text-[#ebebeb]  '/>                      
                          <p className='text-black-900 fontx-bold text-center px-2 pb-5'>HTML</p>
                        
                          </motion.div>
                 </motion.div>
                
                 <motion.div initial="hidden" animate={animation}  variants={Variants} className="flex flex-col bg-white rounded-lg mx-10 shadow-md w-50
                 m-7  overflow-hidden sm:w-30  cursor-pointer ">
                  <motion.div className='' whileHover={{scale:0.8, transition:{duration:0.2, type:"fade-in"}}}>
                      <RiReactjsLine className='rounded-md bg-[#61DBFB] m-6 mx-auto shadow-xl w-40 h-40 text-[#ebebeb]  '/>                      
                          <p className='text-black-900 font-bold text-center px-2 pb-5'>REACT</p>
                           
                          </motion.div>
                 </motion.div>
                

                 <motion.div initial="hidden" animate={animation} variants={Variants} 
                  className="flex flex-col bg-white rounded-lg shadow-md w-50
                 m-7 overflow-hidden sm:w-52  cursor-pointer ">
                   <motion.div className='' whileHover={{scale:0.8, transition:{duration:.2,}}}>
                      <SiNextdotjs className='rounded-md bg-white m-6 mx-auto shadow-xl w-40 h-40 text-black'/>                      
                          <p className='text-black-900 font-bold text-center px-2 pb-5'>Nextjs</p>
                          </motion.div>
                 </motion.div>

                 <motion.div animate={animation} variants={Variants} initial="hidden"
                 className="flex flex-col bg-white rounded-lg shadow-md w-50
                 m-7 overflow-hidden sm:w-52 ">
                    <motion.div className='' whileHover={{scale:0.8, transition:{duration:.2}}}>
                      <SiTailwindcss className='rounded-md bg-[#0f1a26] m-6 mx-auto shadow-xl w-40 h-40 text-[#3d9690]'/>                      
                          <p className='text-black-900 font-bold text-center px-2 pb-5'>Tailwind CSS</p>

                          </motion.div>
                 </motion.div>

                 <motion.div initial="hidden" animate={animation} variants={Variants} 
                  className="flex flex-col bg-white rounded-lg shadow-md w-50
                 m-7 overflow-hidden sm:w-52 ">
                    <motion.div className='' whileHover={{scale:0.8, transition:{duration:.2}}}>
                      <IoLogoJavascript className='rounded-md bg-[#ffdb6e] m-6 mx-auto shadow-xl w-40 h-40 '/>                      
                          <p className='text-black-900 font-bold text-center px-2 pb-5'>JavaScript</p>
                          </motion.div>

                          
                 </motion.div>
                 </div>
             </div>   
            
                 
    </Element>
        

  )
}

export default Services;