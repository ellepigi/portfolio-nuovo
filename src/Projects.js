import React from 'react'
import './Projects.css'
import './App.css'
import { FaGithub } from 'react-icons/fa'







export default function Projects  () {
  return (
<main id='projects'>
  <div className='title'>
   <h1 ><div className='line'></div> My projects</h1>
   
   </div>
   <div className='projects'>
    <div className="cards">
      <div className='card'><a href="https://github.com/ellepigi/esercizi/tree/main/todolist" target="_blank">
        <div className='github-icon'><FaGithub></FaGithub></div></a>
        <a href="https://todolistellepigi.netlify.app" target="_blank">
        <img src="/projects/todo.png" alt="#"/></a></div>
      <p>Just a very simple To do list...
</p>
<div className="buttons">
<button  className='html'>Html & CSS</button>
<button disabled className='javascript'>Javascript</button>
{/* <img src='/skills/html.png' alt='#'></img>
      <img src='/skills/css.png' alt='#'></img> */}
</div>
    </div>
    <div className="cards">
      <div className='card'><a href="https://github.com/ellepigi/react-shop-project" target="_blank">
        <div className='github-icon'><FaGithub></FaGithub></div></a>
        <a href="https://reactshop-ellepigi.netlify.app/" target="_blank">
        <img src="/projects/ecommerce.png" alt="#"/></a></div>
      <p>An ecommerce made with React, i used "Fake Store" api for the products and npm react-cart
        for the cart... still needs some changes though!
</p>
<div className="buttons">
<button disabled className='react'>React</button>
</div>
    </div>
    

   </div>
</main>
       )
}
