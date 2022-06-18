import React, {useRef} from 'react';
//components
import Box from '../../UI/Box/'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, FreeMode } from "swiper";
import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/scss/free-mode";


//icons
import { AiFillFire, AiOutlineClockCircle } from "react-icons/ai";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import {IoChatbubblesSharp} from 'react-icons/io5'

//styles
import "./mostviewed.scss"

const MostViewed = () => {
	const navigationPrevRef = useRef(null);
  	const navigationNextRef = useRef(null);
	return (
		<Box>
			<div className="mostviewved__container">
				<div className="mostviewed__title">
			        <div className="title">Most Viewed</div>
			        <div className="actions">
			        	<button className="actions__btn-left" ref={navigationPrevRef}><FiChevronLeft /></button>
			        	<button className="actions__btn-right" ref={navigationNextRef}><FiChevronRight /></button>
			        </div>		
				</div>
				 <Swiper
		        	slidesPerView={3}
       				spaceBetween={15}
			        freeMode={true}
		         	 navigation={{
		          	  prevEl: navigationPrevRef.current,
		         	   nextEl: navigationNextRef.current,
		          	}}
		          	pagination={{
						clickable: true,
						el: ".pagination-el",
						clickable: true,
						bulletClass: "swiper-pagination-bullet",
					}}

		         	onSwiper={(swiper) => {
		          	  setTimeout(() => {
		           	   	swiper.params.navigation.prevEl = navigationPrevRef.current;
		            	swiper.params.navigation.nextEl = navigationNextRef.current;
		              	swiper.navigation.destroy();
		              	swiper.navigation.init();
		              	swiper.navigation.update();
		               });
		          	}}
		          modules={[Navigation, Pagination, FreeMode]}
		            breakpoints={{
    					// when window width is >= 640px
    					520: {
					      width: 520,
					      slidesPerView: 2,
       					  spaceBetween: 10
					    },
					    // when window width is >= 768px
					    768: {
					      width: 768,
					      slidesPerView: 2,
					      spaceBetween: 10

					    },
					}}
		          className="mySwiper"
		        >
          		<SwiperSlide>
          			<div className="slide__item">
          				<div className="banner">
          				   <img src="https://jannah.tielabs.com/tech/wp-content/uploads/sites/10/2016/12/gallery-5-390x220.jpg" alt="" />
          				</div>
          				<div className="content">
          				   <div className="info">
          						<span className="date"><AiOutlineClockCircle />Dec 12,2017</span>
          				   		<div className="right__section">
          				   			<div className="comments"><IoChatbubblesSharp />1</div>
          				   			<div className="popularity"><AiFillFire />23,841</div>
          				   		</div>
          				   </div>
          				   <div className="title">Of course Uber is working on a flying car project</div>
          				</div>
          			</div>
          		</SwiperSlide>
          		<SwiperSlide>
          			<div className="slide__item">
          				<div className="banner">
          				   <img src="https://jannah.tielabs.com/tech/wp-content/uploads/sites/10/2016/12/pexels-photo-390x220.jpg" alt="" />
          				</div>
          				<div className="content">
          				   <div className="info">
          						<span className="date"><AiOutlineClockCircle />Dec 12,2017</span>
          				   		<div className="right__section">
          				   			<div className="comments"><IoChatbubblesSharp />1</div>
          				   			<div className="popularity"><AiFillFire />23,841</div>
          				   		</div>
          				   </div>
          				   <div className="title">Of course Uber is working on a flying car project</div>
          				</div>
          			</div>
          		</SwiperSlide>
          		<SwiperSlide>
          			<div className="slide__item">
          				<div className="banner">
          				   <img src="https://jannah.tielabs.com/tech/wp-content/uploads/sites/10/2016/12/photo-1473520844623-167ad716dcae-390x220.jpeg" alt="" />
          				</div>
          				<div className="content">
          				   <div className="info">
          						<span className="date"><AiOutlineClockCircle />Dec 12,2017</span>
          				   		<div className="right__section">
          				   			<div className="comments"><IoChatbubblesSharp />1</div>
          				   			<div className="popularity"><AiFillFire />23,841</div>
          				   		</div>
          				   </div>
          				   <div className="title">Of course Uber is working on a flying car project</div>
          				</div>
          			</div>
          		</SwiperSlide>
          		<SwiperSlide>
          			<div className="slide__item">
          				<div className="banner">
          				   <img src="https://jannah.tielabs.com/tech/wp-content/uploads/sites/10/2016/12/photo-1480365501497-199581be0e66-390x220.jpeg" alt="" />
          				</div>
          				<div className="content">
          				   <div className="info">
          						<span className="date"><AiOutlineClockCircle />Dec 12,2017</span>
          				   		<div className="right__section">
          				   			<div className="comments"><IoChatbubblesSharp />1</div>
          				   			<div className="popularity"><AiFillFire />23,841</div>
          				   		</div>
          				   </div>
          				   <div className="title">Of course Uber is working on a flying car project</div>
          				</div>
          			</div>
          		</SwiperSlide>
          		<SwiperSlide>
          			<div className="slide__item">
          				<div className="banner">
          				   <img src="https://jannah.tielabs.com/tech/wp-content/uploads/sites/10/2016/12/YAR_MY15_0009_V003-390x220.jpg" alt="" />
          				</div>
          				<div className="content">
          				   <div className="info">
          						<span className="date"><AiOutlineClockCircle />Dec 12,2017</span>
          				   		<div className="right__section">
          				   			<div className="comments"><IoChatbubblesSharp />1</div>
          				   			<div className="popularity"><AiFillFire />23,841</div>
          				   		</div>
          				   </div>
          				   <div className="title">Of course Uber is working on a flying car project</div>
          				</div>
          			</div>
          		</SwiperSlide>          		          		          		
          		<div className="pagination-el"></div>
         	 </Swiper>
			</div>
		</Box>
	)
}

export default MostViewed