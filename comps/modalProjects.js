import React from 'react'
import styles from '../styles/home.module.css'
import Image from 'next/image';

function ModalProjects({modalData}) {
  return (
    <div className={styles.main}>
      
    <h2 className={styles.heading}>{modalData.name}</h2>
<div className="rounded w-60 h-40 shadow-xl">
<Image src={modalData.img} objectFit="contain" 
/>
</div>
<div className={styles.text}>
<p className={styles.desc}>{modalData.description}</p>
<p className={styles.link}>Live-Link: <a className={styles.a} href={modalData.liveLink}>{modalData.liveLink}</a> </p>
<p className={styles.link}>Github-Link: <a className={styles.a} href={modalData.codeLink}>{modalData.codeLink}</a> </p>
<p className={styles.link}>TechStack: {modalData.techStack}</p>
</div>
</div>
  )
}

export default ModalProjects;