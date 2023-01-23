import React from 'react'
import './Projects.css'
import './App.css'


export default function Projects  () {
  return (
<main id='main'>
   <h1 ><span className='line'></span> My projects</h1>
   
   <div className='projects'>
    <div className="cards">
      <div className='card'><img src="/projects/todo.png" alt="#"/></div>
      <p>Just a very simple To do list...
</p>
<div className="buttons">
<button disabled>Html</button>
<button disabled>Javascript</button>
</div>
    </div>
    <div className="cards">
      <div className='card'><img src="/projects/ecommerce.png" alt="#"/></div>
      <p>An ecommerce made with React... still needs some changes though!
</p>
<div className="buttons">
<button disabled>React</button>
</div>
    </div>
    

   </div>
</main>
       )
}
