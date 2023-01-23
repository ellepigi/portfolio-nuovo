import React from 'react'
import './Projects.css'
import './App.css'


export default function Projects  () {
  return (
<main id='main'>
  <div className='container' id='title-container'>
   <h1 id='title'> My projects</h1>
   </div>
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
    <div className="cards">
      <div className='card'></div>
      <p>Con il termine lorem ipsum si indica un testo segnaposto utilizzato da grafici,
         progettisti, programmatori e tipografi a modo riempitivo per bozzetti e prove grafiche. Wikipedia
</p>
    </div>

   </div>
</main>
       )
}
