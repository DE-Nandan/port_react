import React from 'react'
import './testimonials.css'

import AVTR1 from '../../assets/me3.jpg'
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
    name: 'Tina Snow',
    review : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident amet ratione ea dolorum assumenda, magni veniam tempore delectus consectetur quaerat.'
  },
  {
    avatar : AVTR2,
    name: 'Tina Snow',
    review : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident amet ratione ea dolorum assumenda, magni veniam tempore delectus consectetur quaerat.'
  },
  {
    avatar : AVTR3,
    name: 'Tina Snow',
    review : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident amet ratione ea dolorum assumenda, magni veniam tempore delectus consectetur quaerat.'
  },
  {
    avatar : AVTR4,
    name: 'Tina Snow',
    review : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident amet ratione ea dolorum assumenda, magni veniam tempore delectus consectetur quaerat.'
  },
]


const Testimonials = () => {
  return (
    <section id = 'testimonials'>
    <h5>Review from Client</h5>
    <h2>Testimonials</h2>

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
             <h5 className='client__review'>{name}</h5>
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