import React from 'react'
import CTA from './CTA'
import ME from '../../assets/me.png'
import "./header.css"
import HeaderSocials from './HeaderSocials'
import Typewriter from "typewriter-effect";

const Header = () => {
  return (
   <header>
     <div className="container header__container">
      <h5>Hello I'm</h5>
      {/* <h1>Nandan Kumar</h1> */}
      <div className="TypeW">
      <Typewriter
       
       onInit={(typewriter)=> {
  
       typewriter
        
       .typeString("Nandan Kumar")
         
      //  .pauseFor(1000)
      //  .deleteAll()
      //  .typeString("Welcomes You")
       .start();
       }}
       />
       </div>
      <div className="TypeW2">
      <Typewriter
       
       onInit={(typewriter)=> {
  
       typewriter
       .pauseFor(1000)  

       .typeString("Programmer | Web Developer")
         
      
      //  .deleteAll()
      //  .typeString("Welcomes You")
       .start();
       }}
       />
       </div>
     
       
      {/* <h5 className="text-light">Programmer | Web Developer</h5> */}
      <CTA/>
      <HeaderSocials/>
      <div className="me">
        <img src={ME} alt="me" className='lol' />
      </div>
     <a href='#contact' className='scroll__down'>Scroll Down</a>

     </div>
   </header>
  )
}

export default Header