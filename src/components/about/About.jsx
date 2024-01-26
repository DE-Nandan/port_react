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
              <small> <span style={{fontWeight: 'bold'}}>Former SDE Intern at Oracle</span> , Web and App Developer</small>
            </article>
            
            <article className='about__card'>
              <GiGraduateCap className='about__icon'/>
              <h5>Education</h5>
              <small>B.Tech from <span style={{fontWeight: 'bold'}}>National Institute of Technology Allahabad</span> <br />Current CPI : 8.07
              
              </small>
            </article>
            
            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Project</h5>
              <small>Developed and Upgraded Opeartional tools at <span style={{fontWeight: 'bold'}}>Oracle (OCI VCN)</span> and developed various projects in  <span style={{fontWeight: 'bold'}}>hackathons</span></small>
            </article>
          </div>
          
          <p>
          In summer of 2023 I have
worked as a <span style={{fontWeight: 'bold'}}>Project intern in Oracle</span> where I have worked on 3 projects <br/> 
<span style={{fontWeight: 'bold'}}>
I mainly dealt with with :
REST APIs · Java · Python · OCI · Shell Scripting · Docker · Curl · Maven · Computer Networking<br/>
</span>
I have a good experience in developing <span style={{fontWeight: 'bold'}}> full stack applications with major interest in Back-end Development and Cloud Technologies
like AWS and OCI </span> which i think would help your company and also provide me with the professional working experience.
Please do refer my resume for knowing about my work and skills.
          </p>
         <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          
         
       </div>
     </div>
    </section>
  )
}

export default About