import React from 'react'
import {useState, useEffect} from 'react'
import {Element} from 'react-scroll';

function imageslide() {
    const [index,setIndex] = useState(0);
    const [index1,setIndex1] = useState(1);
    const [transL,setTransL] = useState(false);
    const [transR,setTransR] = useState(false);
    const images = [
        'image1.jpg',
        'image2.jpg',
        'image3.jpg',
        'image4.jpg'
    ]
    const handlePrev = ()=>{
        setTransR(true);
        setTransL(false);

        const nextIndex = index - 1;
        const nextIndex1 = index1 -1;

        if(nextIndex < 0){
            setIndex(images.length - 1)
        } else{
            setIndex(nextIndex)
        }

        if(nextIndex1 < 0){
            setIndex1(images.length - 1)
        } else{
            setIndex1(nextIndex1)
        }
    }
    const handleNext = ()=>{
          setTransL(true);
          setTransR(false);
        }
        useEffect(()=>{
            if(transR){
                setTimeout(()=>{
                    setTransR(false)
                }, 800)
            }
            if(transL){
                setTimeout(()=>{
                    setTransL(false),
                    setIndex((index + 1) % images.length)
                    setIndex1((index1 + 1) % images.length)
                },800)
            }
        }, [transL, transR])
  return (
      <Element id="imageslide" name="imageslide">  
          <>
          <div className='w-full md:mt-10 h-60'>
    <div className="flex h-auto justify-center  w-full">
        <button className="h-auto w-10 bg-pink-400 font-extrabold text-white text-3xl" onClick={handlePrev}>
            {"<"}
        </button>
        <div className="relative w-96 border-2 h-56 overflow-hidden rounded-xl">
            <img className={`absolute object-contain z-20 w-full h-full p-4 ${transL ? 'transition duration-500 ease-linear transform -translate-x-full' : transR ? 'animate-slideL' : ''} `} src={images[index]} alt=""/>
            <img className={`absolute object-contain z-20 w-full h-full p-4 ${transL ? 'animate-slideR' : transR ? 'transition duration-500 ease-linear transform translate-x-full' : ''} `} src={images[index1]} alt=""/>

        </div>
       <button className="h-auto w-10 text-white bg-pink-400 font-extrabold text-3xl" onClick={handleNext}>
           {">"}
       </button>
    </div>
    </div>
    </>
    </Element>
  )
}

export default imageslide