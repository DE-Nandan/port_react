import React from 'react'
import './testimonials.css'

import AVTR1 from '../../assets/quo3.png'
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
    name: "Ken Thompson",
    review :  "One of my most productive days was throwing away 1,000 lines of code."
  },
  {
    avatar : AVTR1,
    name: "Bjarne Stroustrup",
    review : "I have always wished for my computer to be as easy to use as my telephone; my wish has come true because I can no longer figure out how to use my telephone."
  },
  {
    avatar : AVTR1,
    name: "Ken Thompson",
    review : "When in doubt, use brute force."
  },
  {
    avatar : AVTR1,
    name: "Martin Golding",
    review : "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live."
  },
]


const Testimonials = () => {
  return (
    <section id = 'testimonials'>
    <h5>Adieu!</h5>
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