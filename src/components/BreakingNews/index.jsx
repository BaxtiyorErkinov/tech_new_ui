import React, { useRef } from 'react';

//swiper dependensies
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/effect-fade";
import "swiper/scss/navigation";

//icons
import {FiChevronLeft,FiChevronRight} from 'react-icons/fi'

//for animation
import { motion } from "framer-motion";

//styles
import "./breakingnews.scss"


const letter = {
	hidden: { opacity: 0, y: 50},
	visible: {
		opacity: 1,
		y: 0
	}
}
const sentence = {
	hidden: {opacity: 1},
	visible: {
		opacity: 1,
		transition: {
			delay: 0.5,
			staggerChildren: 0.08
		}
	}

}

const BreakingNews = () => {
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)
  const text = "Helloworld"
  return (
    <div className="breakingnews__container">
      <div className="breakingnews__title">
        <span>Breaking News</span>
      </div>
      <Swiper 
      	effect={ "fade" } 
      	navigation={ { prevEl: navigationPrevRef.current, nextEl: navigationNextRef.current, } } 
	    fadeEffect={{ crossFade: true, }}
		onSwiper={(swiper) => {
       
        setTimeout(() => {
          swiper.params.navigation.prevEl = navigationPrevRef.current
          swiper.params.navigation.nextEl = navigationNextRef.current
          swiper.navigation.destroy()
          swiper.navigation.init()
          swiper.navigation.update()
        })
      }}
      modules={ [EffectFade, Navigation] }
        className="mySwiper">
        <SwiperSlide>
        	<p>The Moto Z Play has the best battery life</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>Bragi Headphone review: finally, wireless earbuds worth buying</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>Honda teases electric concept car with AI-powered emotions</p>
        </SwiperSlide>
        <SwiperSlide>
          <p>The best action camera you can buy</p>
        </SwiperSlide>
      </Swiper>
      <div className="carousel-actions">
        <button ref={ navigationPrevRef } className="carousel__btn-left"><FiChevronLeft /></button>
        <button ref={ navigationNextRef } className="carousel__btn-right"><FiChevronRight /></button>
      </div>
        <ul className="links">
        	<li className="links-item">About</li>
        	<li className="links-item">Team</li>
        	<li className="links-item">Advertise</li>
        	<li className="links-item">Contribute</li>
        </ul>
    </div>
  )
}

export default BreakingNews