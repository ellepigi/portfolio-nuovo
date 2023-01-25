import React from 'react'
import './Header.css'

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from 'react-icons/fa';




export default function Header  () {
  return (
  
  <div id='about'>
 <header>
  <div className='background2'></div>
  <img src='/undraw.png' className='background'></img>
   <div className='intro'>
    <div className='container'>
    <h1 id='greeting'>Hi, i'm <span>Ludovico</span>!</h1>
    </div>
    <h2>I'm a "semi" self-taught Junior Frontend Developer. If you're interested, check out my skills and my code!</h2>
    <div className='buttons'>
    <a href="https://github.com/ellepigi" target="_blank"><button type='button' className='button1'>Github Profile<FaGithub/></button></a>
    <a href="https://www.linkedin.com/in/ludovico-pio-gnerre-04b326252/" target="_blank"><button type='button' className='button1'>Linkedin Profile<FaLinkedin/></button></a>
   
    </div>

   </div>
   <div className='skills'>
    <h2 className='title-skills'> My Skills!</h2>
    <div className='logos'>
      <img src='/skills/html.png' alt='#'></img>
      <img src='/skills/css.png' alt='#'></img>
      <img src='/skills/javascript.png' alt='#'></img>
      <img src='/skills/vscode.png' alt='#'></img>
      <img src='/skills/git.png' alt='#'></img>
      <img src='/skills/github.png' alt='#'></img>
      <img src='/skills/react.png' alt='#'></img>
      <img src='/skills/tailwind.png' alt='#'></img>

    </div>
   </div>
 </header>
 </div>
       )
}
