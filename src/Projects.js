import {React, useRef, useState, useEffect} from 'react'
import './Projects.css'
import './App.css'
import { FaGithub } from 'react-icons/fa'
import { useInView } from 'react-intersection-observer'







export default function Projects  () {

  const [inView, setInView] = useState(false);

  const lineRef = useRef();
  const projectsRef =useRef();

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
          projectsRef.current.classList.add("projects");
        } else {
          projectsRef.current.classList.remove("projects");
        }
      },
      { threshold: [1] }
    );
    if (projectsRef.current) {
      observer2.observe(projectsRef.current);
    }
  }, []);


  return (
<main id='projects'>
  <div className='title'>
   <h1 ><div ref={lineRef} className= "line hidden-line"></div> My projects</h1>
   
   </div>
   <div ref={projectsRef} className='projects-hidden'>
    <div className="cards">
      <div className='card'>
        <a href="https://github.com/ellepigi/esercizi/tree/main/todolist" target="_blank">
        <div className='github-icon'><FaGithub></FaGithub></div></a>
        <a href="https://todolistellepigi.netlify.app" target="_blank">
        <img src="/projects/todo.png" alt="#"/></a>
       
</div>
<div className='description'>
        <p>Just a very simple To do list...
</p>
<div className="buttons">
<button disabled className='html'>Html & CSS</button>
<button disabled className='javascript'>Javascript</button>

</div>
</div>
     

    </div>
    <div className="cards">
      <div className='card'>
        <a href="https://github.com/ellepigi/react-shop-project" target="_blank">
        <div className='github-icon'><FaGithub></FaGithub></div></a>
        <a href="https://reactshop-ellepigi.netlify.app/" target="_blank">
        <img src="/projects/ecommerce.png" alt="#"/></a>
       
</div>
<div className='description'>
        <p>An ecommerce made with React, using "Fake Store" api and the npm use-cart for the cart, 
          still needs some changes though...
</p>
<div className="buttons">
<button disabled className='react'>React</button>

</div>
</div>
     

    </div>
    

   </div>
</main>
       )
}
