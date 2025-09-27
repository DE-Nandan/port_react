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
      disable: false,
      startEvent: 'DOMContentLoaded',
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate',
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      offset: 120,
      delay: 0,
      duration: 1500,
      easing: 'ease',
      once: false,
      mirror: false,
      anchorPlacement: 'top-bottom',
    });
    AOS.refresh();
  }, []);

  return (
    <header>
      <div className="container header__container">
        {/* Outdated page notification */}
        <div style={{
          backgroundColor: '#ffcc00',
          color: '#333',
          padding: '10px',
          borderRadius: '5px',
          textAlign: 'center',
          marginBottom: '15px',
          fontWeight: 'bold'
        }}>
          ⚠️ This page is outdated. Please check back later for updates.
        </div>

        <h5>Hello I'm</h5>
        <div className="TypeW">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Nandan Kumar")
                .start();
            }}
          />
        </div>
        <div className="TypeW2">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .pauseFor(1000)
                .typeString("Former SDE intern @ Oracle | Web & Android Developer")
                .start();
            }}
          />
        </div>

        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" className='lol' />
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header
