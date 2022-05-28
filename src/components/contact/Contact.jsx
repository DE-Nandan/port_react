import React from 'react'
import "./contact.css"
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
const contact = () => {
  return (
    <section id = 'contact'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>
    <div className="container contact__container">
      <div className="contact__options">
       <article className="contact__option">
         <MdOutlineEmail/>
         <h4>Email</h4>
         <h5>nandankmrde@gmail.com</h5>
         <a href="mailto : nandankmrde@gmail.com">Send A Message</a>
       </article>
       <article className="contact__option">
         <MdOutlineEmail/>
         <h4>Instagram</h4>
         <h5>de_nandan_</h5>
         <a href="https://">Send A Message</a>
       </article>
       <article className="contact__option">
         <MdOutlineEmail/>
         <h4>Email</h4>
         <h5>nandankmrde@gmail.com</h5>
         <a href="mailto : nandankmrde@gmail.com">Send A Message</a>
       </article>
      </div>
      <form action=""></form>
    </div>
    </section>
  )
}

export default contact