import React from 'react'
import {Element} from "react-scroll"
import {ImTwitter} from 'react-icons/im'
import {BsLinkedin} from "react-icons/bs"
import {AiFillGithub} from "react-icons/ai"
import {useState} from "react"
import {useRouter} from "next/router"
const Contact = () => {
  const router = useRouter();
  const [input, setInput] = useState(null)
  const Submit =(e)=>{
   if(input === null){
       alert('input email')
   }
   else{
    console.log(input);
     router.push('./')
   }
  }
  return (
   
      <Element id="contact" name="contact">
    <div className='flex flex-col my-20 justify-center items-center w-full h-auto'>
        <h4 className="text-gray-400 uppercase text-sm">Contact Me</h4>
        <div className='flex justify-center items-center w-full md:w-1/2 my-5'>
            <input type="email" value={input} name="email" onChange={(e)=>setInput(e.target.value)}  placeholder='xy@email.com' autoComplete="email" className="p-3 pl-3 rounded-tl-lg rounded-bl-lg mt-5 pb-1 w-full text-xl border-2 border-indigo-300"/>
            <button type="submit" value={input} onClick={Submit}  className='bg-black mt-5 text-sm w-35 h-12 px-5 rounded-br-lg rounded-tr-lg hover:bg-indigo-200 text-xl py-3 text-white'>Submit</button>
        </div>
        <div className="flex flex-col justify-center mx-auto items-center">
          <h1 className="text-indigo-400 text-md ">Further Contact Me</h1> 
          <h4 className="text-pink-800 text-md ">summyalena@gmail.com</h4> 
          <div className="flex mt-5 inline-flex justify-center gap-5 ">
          <a href="https://twitter.com/AOkolike" target="blank" className=""> <ImTwitter  className=" w-50 shadow-xl text-[#61DBFB] h-50 "/></a> 
          <a href="https://www.linkedin.com/in/assumpta-okolike-58aba41b3/" target="blank" className=" " ><BsLinkedin className=" text-blue-800  shadow-xl w-50 h-50 "/></a>
          <a href="https://github.com/summyalena" target="blank" className=" " ><AiFillGithub className=" text-black-300  shadow-xl w-50 h-50 "/></a>
           
          </div>
        </div>

    </div>
    </Element>
  )
}

export default Contact