import React from 'react'
import './Nav.css'
import { RxHamburgerMenu } from 'react-icons/rx';



export default function Nav  () { 
  return (
    <>
    <div className='menu-responsive'>

    <ul>
        <li><a href='#about'>About</a></li>
        <li>< a href='#projects'>My Projects</a></li>

        <li>< a href='#contact'>Contact me</a></li>

        </ul>
        <button>X</button>
    </div>
   
<nav>   
    
  <div className="logo-container">
        <h2 id='logo'><a href='#about'>Ludovico Pio Gnerre</a></h2>
        </div>
        <div className='burger'><RxHamburgerMenu></RxHamburgerMenu></div>
        <ul>
        <li><a href='#about'>About</a></li>
        <li>< a href='#projects'>My Projects</a></li>

        <li>< a href='#contact'>Contact me</a></li>

        </ul>
       </nav>  
       </>
       )
}
