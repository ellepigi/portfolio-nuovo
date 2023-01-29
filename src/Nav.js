import {React, useRef, useState, useEffect} from 'react'
import './Nav.css'
import { RxHamburgerMenu } from 'react-icons/rx';
 

export default function Nav  () { 


  // const [notInView, setNotInView] = useState(true);


  // const navRef= useRef()
  // const mainNavRef= useRef()

  // const showNav= () => {
  //   navRef.current.classList.add("active")
  // }

  // const removeNav= ()=>{
  //   navRef.current.classList.remove("active")

  // }


  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     ([entry]) => {
  //       if (!entry.isIntersecting) {
  //         setNotInView(false);
  //         mainNavRef.current.classList.add("nav-sticky");

  //       } else {
  //         setNotInView(true);
  //       }
  //     },
  //     { threshold: [0] }
  //   );
  //   if (mainNavRef.current) {
  //     observer.observe(mainNavRef.current);
  //   }
   
  // }, []);



  return (
    <>
    <div   className='menu-responsive'>

    <ul>
        <li><a href='#about'>About</a></li>
        <li>< a href='#projects'>My Projects</a></li>

        <li>< a href='#contact'>Contact me</a></li>

        </ul>
        <button >X</button>
    </div>
   
<nav >   
    
  <div className="logo-container">
        <h2 id='logo'><a href='#about'>Ludovico Pio Gnerre</a></h2>
        </div>
        <div className='burger' ><RxHamburgerMenu></RxHamburgerMenu></div>
        <ul>
        <li><a href='#section-skills'> My Skills</a></li>
        <li>< a href='#projects'>My Projects</a></li>

        <li>< a href='#contact'>Contact me</a></li>

        </ul>
       </nav>  
       </>
       )
}
