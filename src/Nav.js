import {React, useRef} from 'react'
import './Nav.css'
import { RxHamburgerMenu } from 'react-icons/rx';



export default function Nav  () { 

  const navRef= useRef()
  

  const showNav= () => {
    navRef.current.classList.add("active")
    // navRef.current.classList.remove("menu-responsive")
  }

  const removeNav= ()=>{
    // navRef.current.classList.add("menu-responsive")
    navRef.current.classList.remove("active")

  }



  return (
    <>
    <div ref={navRef}  className='menu-responsive'>

    <ul>
        <li><a href='#about'>About</a></li>
        <li>< a href='#projects'>My Projects</a></li>

        <li>< a href='#contact'>Contact me</a></li>

        </ul>
        <button onClick={removeNav}>X</button>
    </div>
   
<nav>   
    
  <div className="logo-container">
        <h2 id='logo'><a href='#about'>Ludovico Pio Gnerre</a></h2>
        </div>
        <div className='burger' onClick={showNav}><RxHamburgerMenu></RxHamburgerMenu></div>
        <ul>
        <li><a href='#about'>About</a></li>
        <li>< a href='#projects'>My Projects</a></li>

        <li>< a href='#contact'>Contact me</a></li>

        </ul>
       </nav>  
       </>
       )
}
