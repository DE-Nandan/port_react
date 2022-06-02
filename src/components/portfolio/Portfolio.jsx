import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./portfolio.css"

import IMG1 from '../../assets/em.jpeg'
import IMG2 from '../../assets/dt.png'
import IMG3 from '../../assets/me5.jpg'

const data = [
{
  id : 1,
  image : IMG2,
  title : 'Diagnosis Tracker (05/2020)',
  github : 'https://github.com/DE-Nandan/Devjam-DayNightCoders-',
  demo : 'demo.com'
},
{
  id : 2,
  image : IMG1,
  title : 'Education Mania (04/2020)',
  github : 'https://github.com/DE-Nandan/Education-Project',
  demo : 'demo.com'
},
{
  id : 3,
  image : IMG3,
  title : 'Portfolio Website (Under Development)',
  github : 'https://github.com/DE-Nandan/port_react',
  demo : 'demo.com'
},
// {
//   id : 4,
//   image : IMG1,
//   title : 'Title',
//   github : 'github.com',
//   demo : 'demo.com'
// },
// {
//   id : 5,
//   image : IMG1,
//   title : 'Title',
//   github : 'github.com',
//   demo : 'demo.com'
// },
// {
//   id : 6,
//   image : IMG1,
//   title : 'Title',
//   github : 'github.com',
//   demo : 'demo.com'
// }

]


const Portfolio = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  
  return (
    <section id = 'portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id,image,title,github,demo}) =>{
            return(
              <article key={id} className='portfolio__item'>
           
           <div className="portfolio__item-image">
           <img src={image} alt={title} />

           </div>
             <h3>{title}</h3>
             <div className="portfolio__item-cta">
             <a href={github} className = 'btn' target='_blank'>Github</a>
             {/* <a href={demo} className = 'btn btn-primary' target='_blank'>Live Demo</a>    */}
             </div>
        </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio