import Head from 'next/head'
import Navbar from '../comps/Navbar'
import HomePage from './home';
import Services from './services'
import Project from './project'
import Client from './client'
import Contact from './contact'
import Footer from  '../comps/footer'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Lena Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/lena.ico" />
      </Head>

      <main>
         <Navbar/>
         <HomePage/>
         <Services/>
         <Project/>
         <Client/>
         <Contact/>
         <Footer/>
</main>
    
    </div>
  )
}
