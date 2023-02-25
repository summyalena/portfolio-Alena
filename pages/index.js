import Head from 'next/head'
import Navbar from '../comps/Navbar'
import HomePage from './home';
import { StrictMode } from "react";
import Services from './services';
import Project from './project';
import Contact from './contact'
import Footer from  '../comps/footer'

export default function Home (){
  return (
    <StrictMode>
    <Head>
       <title>Lena Portfolio</title>
       <meta name="description" content="Generated by create next app" />
       <link rel="icon" href="/lena.ico" />
     </Head>
     <Navbar/>
        <HomePage/>
        <Services/>
        <Project/>
        <Contact/>
        <Footer/> 
  </StrictMode>
  )
  
}
 