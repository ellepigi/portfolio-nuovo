import React from 'react'
import './Projects.css'
import './App.css'








export default function Projects  () {
  return (
<main id='projects'>
  <div className='title'>
   <h1 ><div className='line'></div> My projects</h1>
   
   </div>
   <div className='projects'>
    <div className="cards">
      <div className='card'><img src="/projects/todo.png" alt="#"/></div>
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
      <div className='card'><img src="/projects/ecommerce.png" alt="#"/></div>
      <p>An ecommerce made with React... still needs some changes though!
</p>
<div className="buttons">
<button disabled className='react'>React</button>
</div>
    </div>
    

   </div>
</main>
       )
}
