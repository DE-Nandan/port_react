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

    <div className="container services__container">
      <article className='service'>
        <div className="service__head">
          <h3>
            Andriod Development
          </h3>
        </div>
        <ul className='service__list'>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Works on development of Android Apps</p>
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
            DevOps and Cloud
          </h3>
        </div>
        <ul className='service__list'>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Well versed with DevOps and Cloud Technologies</p>
          </li>
        </ul>

        
      </article>
    </div>
    </section>
  )
}

export default Services