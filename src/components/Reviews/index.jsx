import React, { useRef } from "react";
import { news } from "../../data";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/effect-fade";
import "swiper/scss/navigation";

//icons
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import {
  AiFillFire,
  AiOutlineClockCircle,
  AiOutlineDoubleRight,
} from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { GoZap } from "react-icons/go";
import { IoChatbubblesSharp } from "react-icons/io5";

//styles
import "./reviews.scss";

const Reviews = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <div className="reviews__container">
      <div className="reviews__title">
        <div className="title">Reviews</div>
        <div className="actions">
          <ul className="filters">
            <li className="filters-item active">All</li>
            <li className="filters-item">Cameras</li>
            <li className="filters-item">Headphones</li>
            <li className="filters-item">Laptops</li>
            <li className="filters-item">Phones</li>
            <li className="filters-item">Reviews</li>
          </ul>
          <div className="actions-btns">
            <button className="actions-btns__item" ref={navigationPrevRef}>
              <FiChevronLeft />
            </button>
            <button className="actions-btns__item" ref={navigationNextRef}>
              <FiChevronRight />
            </button>
          </div>
        </div>
      </div>
      <Swiper
        effect={"fade"}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        fadeEffect={{ crossFade: true }}
        onSwiper={(swiper) => {
          setTimeout(() => {
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;
            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
        modules={[EffectFade, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="news__container">
            <div className="main__new">
              <div className="banner">
                <img
                  src="https://jannah.tielabs.com/tech/wp-content/uploads/sites/10/2016/12/gallery-5-390x220.jpg"
                  alt=""
                />
                <div className="zap">
                  <GoZap />
                </div>
                <div className="category">Cars</div>
              </div>
              <div className="content">
                <div className="info">
                  <div className="user__info">
                    <p className="user">
                      <FaUserCircle />
                      Tony Stark
                    </p>
                    <div className="date">
                      <AiOutlineClockCircle />
                      Dec 12, 2016
                    </div>
                  </div>
                  <div className="right__section">
                    <div className="comments">
                      <IoChatbubblesSharp />1
                    </div>
                    <div className="popularity">
                      <AiFillFire />
                      23, 841
                    </div>
                  </div>
                </div>
                <p className="title">
                  Of course Uber is working on a flying car project
                </p>
                <p className="desc">
                  Apple Watch review: Design For a slightly more opinionated
                  version of the video review above, here’s the male half of the
                  Macworld team arguing (after four months with this device)
                  about whether the Apple Watch is a great or a…
                </p>
                <button className="readmore">
                  Read More <AiOutlineDoubleRight />
                </button>
              </div>
            </div>
            <div className="other__news">
              {news.slice(1, 5).map((el) => (
                <div className="other__news__item">
                  <div className="banner">
                    <img src={el.img} alt="" />
                  </div>
                  <div className="content">
                    <p className="date">
                      <AiOutlineClockCircle />
                      {el.date}
                    </p>
                    <p className="title">{el.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="news__container">
            <div className="main__new">
              <div className="banner">
                <img
                  src="https://jannah.tielabs.com/tech/wp-content/uploads/sites/10/2016/12/YAR_MY15_0009_V003-780x470.jpg"
                  alt=""
                />
                <div className="zap">
                  <GoZap />
                </div>
                <div className="category">Cars</div>
              </div>
              <div className="content">
                <div className="info">
                  <div className="user__info">
                    <p className="user">
                      <FaUserCircle />
                      Tony Stark
                    </p>
                    <div className="date">
                      <AiOutlineClockCircle />
                      Dec 12, 2016
                    </div>
                  </div>
                  <div className="right__section">
                    <div className="comments">
                      <IoChatbubblesSharp />1
                    </div>
                    <div className="popularity">
                      <AiFillFire />
                      23, 841
                    </div>
                  </div>
                </div>
                <p className="title">
                  Of course Uber is working on a flying car project
                </p>
                <p className="desc">
                  Apple Watch review: Design For a slightly more opinionated
                  version of the video review above, here’s the male half of the
                  Macworld team arguing (after four months with this device)
                  about whether the Apple Watch is a great or a…
                </p>
                <button className="readmore">
                  Read More <AiOutlineDoubleRight />
                </button>
              </div>
            </div>
            <div className="other__news">
              {news.slice(1, 5).map((el) => (
                <div className="other__news__item">
                  <div className="banner">
                    <img src={el.img} alt="" />
                  </div>
                  <div className="content">
                    <p className="date">
                      <AiOutlineClockCircle />
                      {el.date}
                    </p>
                    <p className="title">{el.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Reviews;
