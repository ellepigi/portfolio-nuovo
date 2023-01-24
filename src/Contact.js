import React from 'react'
import './Contact.css'


export default function Contact  () {
  return (<div className='contact'>
    <div className='title'>
   <h1 ><div className='line'></div> Contact me</h1>
   
   </div>
<section id='contact'>

   <div className='form'>
   <form>
      <label form='name'></label>
      <input type="text" placeholder='Your Name'></input>
      <label form='email'></label>
      <input type="text" placeholder='Your email'></input>
      <label form="message"> </label>
      <textarea placeholder='Your Message'></textarea>      
      <button type='submit' className='button1'>Submit</button>

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
