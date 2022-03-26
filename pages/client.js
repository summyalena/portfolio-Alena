import React from 'react'
import {Element} from "react-scroll"
import {SiIbm} from "react-icons/si"
import {ImTwitter} from "react-icons/im"
import {SiMicrosoft} from "react-icons/si"
import {AiOutlineGoogle} from "react-icons/ai"
import {motion} from 'framer-motion'
import {useAnimation} from 'framer-motion'
import {useEffect} from 'react'
import {useInView} from "react-intersection-observer"


const list = {hidden:{scale:0, opacity:0}, visible:{scale:1, opacity:1, transition:{duration:0.1}}}
const variants = {hidden:{scale:0, opacity:0}, visible:{scale:1, opacity: 1, transition:{ delay:0.4, duration:0.4}}}
const Client = () => {
    const [ref, inView] = useInView({threshold:0.2});
    const animation = useAnimation();
    useEffect(()=>{
          if(inView){
              animation.start("visible")
          }
    }, [animation,inView])
  return (
      <Element  id="client" name="client">
    <div ref={ref}  variants={list} initial="hidden" animate={animation} className="w-full h-auto pt-20 py-20 flex flex-col justify-center items-center">
        <p className="text-gray-500 text-sm uppercase">Clients</p>
        <h3 className='text-indigo-500 font-bold text-3xl'>Future Clients</h3>
         <motion.div animate={animation} initial="hidden" variants={list} className='flex md:flex-row sm:flex-row gap-10 justify-center items-center'>
             <motion.div className='w-20 sm:w-full'>
                 <AiOutlineGoogle className="text-gray-500 hover:text-black hover:cursor-pointer bg-gray p-3 w-20 h-20"/>
             </motion.div>
             <motion.div animate={animation} initial="hidden" variants={variants} className='w-20 sm:w-full'>
                 <SiIbm className="text-gray-500 bg-gray hover:text-black hover:cursor-pointer p-3 w-20 h-20"/>
             </motion.div>
             <motion.div animate={animation} initial="hidden" variants={variants} className='w-20 sm:w-full'>
                 <ImTwitter className="text-gray-500 bg-gray hover:text-black hover:cursor-pointer p-3 w-20 h-20"/>
             </motion.div>
             <motion.div animate={animation} initial="hidden" variants={variants} className='w-20 sm:w-full'>
                 <SiMicrosoft className="text-gray-500 bg-gray hover:text-black hover:cursor-pointer p-3 w-20 h-20"/>
             </motion.div>
            
             </motion.div>        
        </div>


    </Element>
  )
}

export default Client