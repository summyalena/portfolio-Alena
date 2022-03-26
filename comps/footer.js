import React from 'react'
import {AiTwotoneHeart} from "react-icons/ai"
import {motion} from "framer-motion"
import {useEffect} from "react"
import {useAnimation} from "framer-motion"
import {useInView} from "react-intersection-observer"

const Variants = {
  visible:{opacity:1,scale:1,transition:{duration:1.2}},
  hidden:{opacity:0, scale:0 }
}
const Footer = () => {
  const {ref, inView} = useInView();
  const animation = useAnimation();
  useEffect(()=>{
     if(inView){
       animation.start("visible")
     }
  },[animation,inView])
  return (
      <div className="bg-black flex-col flex justify-center items-center w-full h-20">
   <div ref={ref} className='flex justify-center items-center'>
 <h4 className="text-xl text-white"> Created by </h4> <AiTwotoneHeart className='text-pink-500'/>  <motion.a animate={animation} variants={Variants} initial="hidden" href="#" className='text-pink-600 text-xl'> Assumpta Okolike</motion.a> 
 </div>
     
    <p className="text-white justify-center mt-3">All Rights Reserved</p>
        </div>
  )
}

export default Footer