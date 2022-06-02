import React, { useEffect } from "react";
import CTA from './CTA'
import ME from '../../assets/me.png'
import "./header.css"
import HeaderSocials from './HeaderSocials'
import Typewriter from "typewriter-effect";
import AOS from "aos";
import "aos/dist/aos.css";
const Header = () => {
  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      
    
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1500, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    
    }

    );
    AOS.refresh();
  }, []);
  return (
   <header>
     <div className="container header__container" data-aos="fade-up">
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