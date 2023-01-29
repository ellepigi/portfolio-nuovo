import React, { useRef } from 'react'
import './Header.css'

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from 'react-icons/fa';




export default function Header  () {



  return (
  
  <div id='about'>
 <header>

   <div className='intro'>
    <div className='container'>
    <h1 id='greeting'>&#128075;Hi, i'm <span>Ludovico</span>!</h1>
    </div>
    <h2>I'm a "semi" self-taught Junior Frontend Developer.<br/> If you're interested, check out my skills and my code!</h2>
    <div className='buttons'>
    <a href="https://github.com/ellepigi" target="_blank"><FaGithub className='github'/></a>
    {/* <a href="https://www.linkedin.com/in/ludovico-pio-gnerre-04b326252/" target="_blank"><button type='button' className='button1'>Linkedin Profile<FaLinkedin/></button></a> */}
   
    </div>

   </div>
 
 </header>
 </div>
       )
}
