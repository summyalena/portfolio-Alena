import React, {useState} from 'react'
import {Element} from 'react-scroll'
import Image from "next/image"
import Projects from '../comps/object';
// import Modal from 'react-modal';
import {motion} from "framer-motion"
import {useAnimation} from "framer-motion"
import {useEffect} from "react"
import {useInView} from "react-intersection-observer"
import styles from '../styles/home.module.css'
import ModalProjects from '../comps/modalProjects';

const Project = () => {
  
  const [modalOpen, setModalOpen] = useState(false);


  const setModalClose = () => {
    setModalOpen(false);
  }


  }

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
        <h2 className="text-center text-indigo-700 font-bold text-5xl mb-5">All Creative Works </h2>
          <p className="mb-5 font-sans text-center">Selected projects i've worked on in the past</p>
          <motion.div animate={animation}  className=" sm:flex-col md:grid-cols-3 grid gap-10 opacity-90 justify-center items-center mt-10">
          {Projects.map(project => 
            <div className='' key={project.id}>
             
            <motion.div className='' whileHover={{scale:0.8, transition:{duration:0.2, type:"fade-in"}}}>
                  <div className="rounded w-80 h-60 shadow-xl relative">
               <Image src={project.img} alt="" layout="fill" objectFit="cover" className="p-2 rounded"/>
               <div className='absolute bg-[#0f050454] hover:text-xl hover:transition  hover:font-bold mt-20 cursor-pointer font-semibold w-full h-10 text-center justify-center flex'>
                       <button onClick={() => {
                        // setModalData(project)
                        setModalOpen(true)                
                              }} 
                              className=' font-semibold text-[#fff]'>click to see Details</button>
                        </div>
                  </div>
                  { modalOpen ? 
                    <div className={styles.main} key={project.id}>
                    <button onClick={setModalClose}>Close</button>
                <h2 className='font-bold font-serif text-3xl'>{project.name}</h2>
            <div className="rounded w-60 h-40 shadow-xl">
            <Image src={project.img} objectFit="contain" 
            />
            </div>
            <div className={styles.text}>
            <p className={styles.desc}>{project.description}</p>
            <p className={styles.link}>Live-Link: <a className={styles.a} href={project.liveLink}>{project.liveLink}</a> </p>
            <p className={styles.link}>Github-Link: <a className={styles.a} href={project.codeLink}>{project.codeLink}</a> </p>
            <p className={styles.link}>TechStack: {project.techStack}</p>
            </div>
            </div>
                  : null}
                  </motion.div>
                  
            </div>
          )}
           
           </motion.div>
           
                  
        </div>
    </Element>
  )
}

export default Project