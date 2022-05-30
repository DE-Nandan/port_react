import React from 'react'
import './testimonials.css'

import AVTR1 from '../../assets/quo4.png'
import AVTR2 from '../../assets/me3.jpg'
import AVTR3 from '../../assets/me3.jpg'
import AVTR4 from '../../assets/me3.jpg'

import SwiperCore , { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
SwiperCore.use([Navigation]);



const data = [
  {
    avatar : AVTR1,
    name: "Sir Thomas Buxton",
    review :  "With ordinary talentand extraordinary perseverance, all things are attainable."
  },
  {
    avatar : AVTR1,
    name: "Thomas J. Watson",
    review : "Would you like me to give you a formula for success?  It s quite simple. Double your rate of failure."
  },
  {
    avatar : AVTR1,
    name: "Steve Jobs",
    review : "We’re here to put a dent in the universe.”"
  },
  {
    avatar : AVTR1,
    name: "Elon Musk",
    review : "I think it is possible for ordinary people to choose to be extraordinary"
  },
]


const Testimonials = () => {
  return (
    <section id = 'testimonials'>
    <h5>Have a Look!</h5>
    <h2>Few Words</h2>
     <h5>Sideways Scroll</h5>
    <Swiper className="container testimonial__container">
     {
       data.map(({avatar,name,review},index) =>{
         return(
           <SwiperSlide key = {index} className="testimonial"
          
          modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    
           >
             <div className="client__avatar">
               <img src={avatar}  />
             </div>
             <h4 className='client__review'>{name}</h4>
           <small className='client__review'>
            {review}
           </small>
           </SwiperSlide>
         )
       })
     }
      
    </Swiper>
    </section>
  )
}

export default Testimonials