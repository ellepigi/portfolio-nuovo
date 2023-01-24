import React from 'react'
import './Nav.css'


export default function Nav  () {
  return (
<nav>   <div className="logo-container">
        <h2 id='logo'>Ludovico Pio Gnerre</h2>
        </div>
        <ul>
        <li><a href='#about'>About</a></li>
        <li>< a href='#projects'>My Projects</a></li>

        <li>< a href='#contact'>Contact me</a></li>

        </ul>
       </nav>  
       )
}
