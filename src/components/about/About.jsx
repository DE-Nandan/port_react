import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import './about.css'
import ME from '../../assets/me4.jpg'
import {FaAward} from 'react-icons/fa'
import {GiGraduateCap} from 'react-icons/gi'
// import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
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
              <small>Intermediate at Programming And Web Development</small>
            </article>
            
            <article className='about__card'>
              <GiGraduateCap className='about__icon'/>
              <h5>Education</h5>
              <small>B.Tech from <span style={{fontWeight: 'bold'}}>National Institute of Technology Allahabad</span> <br />Current CPI : 9.18
              
              </small>
            </article>
            
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Project</h5>
              <small>Participated in several <span style={{fontWeight: 'bold'}}>hackathons</span> and made some personel projects as well</small>
            </article>
          </div>
          <div data-aos = "fade-up">
          <p>Programming Enthusiast with keen interst for development . Currently looking forward to work on several <span style={{fontWeight: 'bold'}}>web based and game development</span> projects . Working on a few as a personal project and ready to work on it for a client <br/>
          <br/> Enjoys Solving various <span style={{fontWeight: 'bold'}}>Data Structures and Algorithms</span> problems
          </p>
         <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
         
       </div>
     </div>
    </section>
  )
}

export default About