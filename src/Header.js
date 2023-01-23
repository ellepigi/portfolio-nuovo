import React from 'react'
import './Header.css'


export default function Header  () {
  return (
  <div className='background'>
 <header>
   <div className='intro'>
    <div className='container'>
    <h1 id='greeting'>Hi, my name is <span>Ludovico</span>!</h1>
    </div>
    <h2>I'm a "semi" self-taught Junior Frontend Developer. If you're interested, check out my skills and my code!</h2>
   </div>
   <div className='skills'>
    <button type='button' id="github-button">Github Profile</button>
    <h1 className='title'> My Skills!</h1>
    <div className='logos'>
      <img src='/skills/html.png' alt='#'></img>
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
