import React from 'react'
import {Element} from 'react-scroll'
import Image from "next/image"
import one from "../public/one.png"
import {motion} from "framer-motion"
import {useAnimation} from "framer-motion"
import {useEffect} from "react"
import {useInView} from "react-intersection-observer"

const Project = () => {
     const {ref, inView} = useInView();
     const animation = useAnimation();
     useEffect(()=>{
           
        if(inView){
            animation.start({x:0, transition:{type:"spring", duration:1,delay:0.3}})
        }
        if(!inView){
            animation.start({x:"-100vw"})
        }
     },[animation, inView])
  return (
      <Element id="project" name="project">
    <div ref={ref}  className="flex w-98vw h-auto justify-center mt-30 my-20 flex-col">
        <p className="text-center text-gray-500 text-sm">Portfolio</p>
        <h3 className="text-center text-indigo-700 font-bold text-4xl">All Creative Works </h3>
         
            <motion.div animate={animation} className="md:flex flex-col md:flex-row flex gap-10 mt-10 justify-center items-center mt-10">
                  <div className="rounded w-80 h-60 shadow-xl relative">
                      <Image src={one} alt="" layout="fill" objectFit="cover" className="p-2 rounded cursor-pointer"/>
                  </div>
                  <div className="rounded w-80 h-60 shadow-xl relative">
                      <Image src={one} alt=""  layout="fill" objectFit="cover" className="p-2 rounded cursor-pointer"/>
                  </div>
                  <div className="rounded w-80 h-60 shadow-xl relative">
                      <Image src={one} alt=""  layout="fill" objectFit="cover" className="p-2 rounded cursor-pointer"/>
                  </div>
            </motion.div>

            <motion.div animate={animation} className="md:flex flex-col md:flex-row flex gap-10 mt-10 justify-center items-center mt-10">
                  <div className="rounded w-80 h-60 shadow-xl relative">
                      <Image src={one} alt=""  layout="fill" objectFit="cover" className="p-2 rounded cursor-pointer"/>
                  </div>
                  <div className="rounded w-80 h-60 shadow-xl relative">
                      <Image src={one} alt=""  layout="fill" objectFit="cover" className="p-2 rounded cursor-pointer"/>
                  </div>
                  <div className="rounded w-80 h-60 shadow-xl relative">
                      <Image src={one} alt=""  layout="fill" objectFit="cover" className="p-2 rounded cursor-pointer"/>
                  </div>
            </motion.div>

            <div className="flex gap-5 mx-10 justify-items-start">
                
                </div>
     
        
        
        </div>
    </Element>
  )
}

export default Project