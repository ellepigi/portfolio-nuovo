import React from 'react'
import './Contact.css'


export default function Contact  () {
  return (<div className='contact'>
<section id='contact'>

   <h1 id='title'> Contact me</h1>
   <div className='form'>
   <form>
      <label form='name'>Name</label>
      <input type="text"></input>
      <label form='email'>Email</label>
      <input type="text"></input>
      <label form="message">Your Message</label>
      <textarea></textarea>      
      <button type='submit'>Submit</button>

   </form>
  </div>
</section>
<footer>
   
</footer>
</div>
       )
}
