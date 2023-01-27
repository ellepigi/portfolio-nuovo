import {React, useRef, useState, useEffect} from 'react'
import './Contact.css'


export default function Contact  () {
   const [inView, setInView] = useState(false);

   const lineRef = useRef();
 
   useEffect(() => {
     const observer = new IntersectionObserver(
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
       observer.observe(lineRef.current);
     }
    
   }, []);


  return (<div className='contact'>
    <div className='title'>
   <h1 ><div ref={lineRef} className='line hidden-line'></div> Contact me</h1>
   
   </div>
<section id='contact'>

   <div className='form'>
   <form name="contact" method="POST" data-netlify="true">
      <label form='name'>
      <input type="text" placeholder='Your Name' name="name"></input></label>
      <label form='email'>
      <input type="text" placeholder='Your email' name="email"></input></label>
      <label form="message"> 
      <textarea placeholder='Your Message' name="message"></textarea></label> 
      <div className="button-div">    
      <button type='submit' className='button1'>Submit</button>
      </div> 
   </form>
  </div>
</section>
<footer>
   <div className='email'><h2>Or send me an email at <a href= "mailto:ellepgi@gmail.com">ellepgi@gmail.com</a>!</h2></div>
   <div className='copyright'><span>Made by Ludovico Pio Gnerre ©</span></div>
</footer>
</div>
       )
}
