import React from 'react'
import './about.css'
import ME from '../../assets/me4.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id = 'about'>
     <h5>Get to know</h5>
     <h2>About Me</h2>

     <div className='container about__container'>
       <div className="about__me">
       <div className="about__me_img">
           <img src={ME} alt="About Image" />
        </div>
       </div>


       <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>Fresher</small>
            </article>
            
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>0 Now</small>
            </article>
            
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Project</h5>
              <small>2-3</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptate iure eaque architecto quae. Itaque ea, ipsa maxime inventore nam quos nesciunt omnis totam dignissimos! Dignissimos amet beatae eligendi doloribus doloremque dolorum nulla ratione, praesentium dolorem, minus illum. Nam commodi sed voluptates magni soluta enim odio deserunt incidunt, eos totam?</p>
         <a href="#contact" className='btn btn-primary'>Let's Talk</a>
       </div>
     </div>
    </section>
  )
}

export default About