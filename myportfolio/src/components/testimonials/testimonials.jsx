import React from 'react'
import "./testimonials.css"
import AVTR1 from "../../assets/avatar1.jpg"
import AVTR2 from "../../assets/avatar2.jpg"
import AVTR3 from "../../assets/avatar3.jpg"
import AVTR4 from "../../assets/avatar4.jpg"


// Import Swiper React components
import {Pagination,Navigation} from "swiper";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';

const data=[
  {
    avatar:AVTR1,
    name:"Name",
    review:"Excellent  service with modern solutions and techniques.Excellent  service with modern solutions and techniques.Excellent  service with modern solutions and techniques.ExcellentExcellent  service with modern solutions and techniques.  service with modern solutions and techniques.Excellent  service with modern solutions and techniques."
  },
  {
    avatar:AVTR2,
    name:"Name",
    review:"Excellent  service with modern solutions and techniques.Excellent  service with modern solutions and techniques.Excellent  service with modern solutions and techniques.ExcellentExcellent  service with modern solutions and techniques.  service with modern solutions and techniques.Excellent  service with modern solutions and techniques."
  },
  {
    avatar:AVTR3,
    name:"Name",
    review:"Excellent  service with modern solutions and techniques.Excellent  service with modern solutions and techniques.Excellent  service with modern solutions and techniques.ExcellentExcellent  service with modern solutions and techniques.  service with modern solutions and techniques.Excellent  service with modern solutions and techniques."
  },
  {
    avatar:AVTR4,
    name:"Name",
    review:"Excellent  service with modern solutions and techniques.Excellent  service with modern solutions and techniques.Excellent  service with modern solutions and techniques.ExcellentExcellent  service with modern solutions and techniques.  service with modern solutions and techniques.Excellent  service with modern solutions and techniques."
  }
]

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h1>Testimonials</h1>

      <Swiper className="container testimonial_container"
      modules={[Navigation,Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{clickable:true}}>
        {
          data.map(({avatar,name,review},index)=>{
            return(
              <SwiperSlide key={index} className="testimonial">
                <div className="client_avatar">
                  <img src={avatar}/>
                  
                </div>
                <h5 className="client_name">{name}</h5>
                <small className="client_review">{review}</small>
              </SwiperSlide>
            )
          })
        }
        
      </Swiper>
    </section>
  )
}

export default Testimonials