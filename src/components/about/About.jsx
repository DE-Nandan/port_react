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

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur deleniti nobis qui corporis impedit eaque molestias dignissimos illo ea eius laudantium esse blanditiis cupiditate facilis, enim nam explicabo laborum deserunt quos alias ex rerum minus neque? Qui delectus iure minus modi. Laboriosam, illo! Error, recusandae nemo illum nostrum quibusdam cumque consequuntur pariatur dolorum laborum explicabo expedita nam, eveniet consectetur nesciunt distinctio iure itaque deleniti tempore maxime velit quasi cum corrupti. Inventore quos nam maxime rem modi maiores totam voluptatem quod dolor accusantium sapiente nostrum hic quas beatae, nobis asperiores aperiam, possimus dicta eaque? Atque, asperiores nulla? Libero pariatur harum modi. Et ex voluptates nesciunt sequi unde accusamus. Eveniet dolorem minus asperiores nemo qui alias aut cupiditate. Cumque aliquam quod autem obcaecati, vel veritatis suscipit porro in ea accusamus tenetur quia fuga sint sapiente praesentium at odio, placeat iure neque soluta itaque pariatur quis nihil veniam! Voluptates corrupti deleniti dolor quibusdam?</p>
         <a href="#contact" className='btn btn-primary'>Let's Talk</a>
       </div>
     </div>
    </section>
  )
}

export default About