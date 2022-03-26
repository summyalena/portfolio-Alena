import React from 'react'
import Image from "next/image"
import Alena from '../public/alena.jpg'
import {Element} from 'react-scroll'
import {motion} from 'framer-motion'
import {Link} from 'react-scroll'
const Home = () => {
  return (
    <Element id="home" name="home">
      <div className=''>
        <motion.div initial="hidden"
                     animate="visible"    
                      variants={{hidden:{scale:0.8,opacity:0},visible:{scale:1,opacity:1,transition:{delay:1}}}}    
        className='flex justify-between text-center 
         pt-28 md:pt-40 h-auto md:px-5 mx-10 md:mx-20'>
            <div className='w-2/4 h-92 mt-2 rounded-full relative px-2 hidden md:block shadow-xl ml-7 '>
                <Image 
                src={Alena}
                 alt="alena"
                  layout="fill"
                   object-fit="cover" className="rounded-full  bg-top shadow-xl hidden cursor-pointer md:block"/>
            </div>
            <div className="flex flex-col md:ml-20  md:mx-32 mt-10"> 
            <h1 className="font-bold text-left mb-5 text-6xl">Hi, I am <span className="text-pink-700 font-bold">Assumpta</span></h1>
             <p className=" font-normal mb-5 flex-wrap text-left"> I am <span className="font-bold text-indigo-700">Front-End Developer</span> who is proficient in using React Frameworks, Nextjs Framework, 
             Tailwind CSS and Javascript to build 
             a simple and responsive web Application for Use</p>
             <Link href="./project.js" activeClass="project" to="project" offset={50} smooth={true}  className='mt-5 pt-5 w-full text-lg md:mt-10 md:w-60 h-16 rounded-md cursor-pointer p-4 bg-black text-white hover:text-white-700 hover:bg-opacity-60 hover:rounded-lg hover:transition-all'>
               See My Portfolio !
             </Link>
            </div>
        </motion.div>
        </div>
    </Element>
  )
}

export default Home;