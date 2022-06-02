import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import './services.css'
import {BiCheck} from 'react-icons/bi';
const Services = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  
  return (
    <section id = 'services'>
    <h5>What I Offer</h5>
    <h2>Services</h2>

    <div className="container services__container" data-aos = "fade-right">
      <article className='service'>
        <div className="service__head">
          <h3>
            UI/UX Design
          </h3>
        </div>
        <ul className='service__list'>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Works on projects related to Front End Development made on React</p>
          </li>
        </ul>
      </article>
      <article className='service'>
        <div className="service__head">
          <h3>
            Web Dev
          </h3>
        </div>
        <ul className='service__list'>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Full Stack Web Development</p>
          </li>
        </ul>
      </article>
      <article className='service'>
        <div className="service__head">
          <h3>
            Programming
          </h3>
        </div>
        <ul className='service__list'>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Can work on various algorithmic problems in various projects</p>
          </li>
        </ul>
      </article>
    </div>
    </section>
  )
}

export default Services