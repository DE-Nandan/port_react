import React from 'react'
import "./contact.css"
import {MdOutlineEmail} from 'react-icons/md'
import {RiInstagramLine} from 'react-icons/ri'
import {RiWhatsappFill} from 'react-icons/ri'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
const Contact = () => {
   
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_0fti6kj', 'template_rphrlpk', form.current, 'JbUXTNigNvOP38zVM')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        e.target.reset();
    };
  

  return (
    <section id = 'contact'>
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>
    <div className="container contact__container">
      <div className="contact__options">
       <article className="contact__option">
         <MdOutlineEmail className='contact__option-icon'/>
         <h4>Email</h4>
         <h5>nandankmrde@gmail.com</h5>
         <a href="mailto:nandankmrde@gmail.com" target="_blank">Send A Message</a>
       </article>
       <article className="contact__option">
         <RiInstagramLine className='contact__option-icon'/>
         <h4>Instagram</h4>
         <h5>de_nandan_</h5>
         <a href="https://www.instagram.com/de_nandan_/" target="_blank">Send A Message</a>
       </article>
       <article className="contact__option">
         <RiWhatsappFill className='contact__option-icon'/>
         <h4>WhatsApp</h4>
         <h5>8077746577</h5>
         <a href="https://wa.me/+918077746577" target="_blank">Send A Message</a>
       </article>
      </div>
      <form ref={form} onSubmit = {sendEmail}>
        <input type="text" name='name' placeholder='Your Full Name' required />
        <input type="email" name ='email' placeholder='Your Email' required />
        <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
    </div>
    </section>
  )
}

export default Contact