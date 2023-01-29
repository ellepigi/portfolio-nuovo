import {React, useRef, useState, useEffect} from 'react'
import './Skills.css'
import './App.css'
import { FaGithub } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'







export default function Skills  () {

  const [inView, setInView] = useState(false);

  const lineRef = useRef();
  const logosRef =useRef();

  useEffect(() => {
    const observer1 = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio > 0) {
          setInView(true);
          lineRef.current.classList.remove("hidden-line");
        } else {
          setInView(false);
        }
      },
      { threshold: [1] }
    );
    if (lineRef.current) {
      observer1.observe(lineRef.current);
    }

    const observer2 = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio > 0) {
          logosRef.current.classList.add("visible");
        } else {
          logosRef.current.classList.remove("visible");
        }
      },
      { threshold: [1] }
    );
    if (logosRef.current) {
      observer2.observe(logosRef.current);
    }
  }, []);


  return (
<section id='section-skills'>
  <div className='title'>
   <h1 ><div ref={lineRef} className= "line hidden-line"></div> My Skills</h1>
   
   </div>

     <div className='skills'>
    <div  ref={logosRef} className='logos'>
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

   
</section>
       )
}
