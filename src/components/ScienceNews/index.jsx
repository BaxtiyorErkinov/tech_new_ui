import React, { useRef } from "react";
import { news } from "../../data";
//components
import Box from "../../UI/Box";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/effect-fade";
import "swiper/scss/navigation";

//icons
import {
  AiFillFire,
  AiOutlineClockCircle,
  AiOutlineDoubleRight,
} from "react-icons/ai";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { IoChatbubblesSharp } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { GoZap } from "react-icons/go";

//styles
import "./sciencenews.scss";

const ScienceNews = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <Box>
      <div className="sciencenews__container">
        <div className="sciencenews__title">
          <div className="title">Science</div>
          <div className="actions">
            <button className="actions__btn" ref={navigationPrevRef}>
              <FiChevronLeft />
            </button>
            <button className="actions__btn" ref={navigationNextRef}>
              <FiChevronRight />
            </button>
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
            <div className="sciencenews">
              <div className="main__new">
                <div className="banner">
                  <img
                    src="https://jannah.tielabs.com/tech/wp-content/uploads/sites/10/2016/12/science-world-false-creek-vancouver-british-columbia-63332-390x220.jpeg"
                    alt=""
                  />
                  <div className="zap">
                    <GoZap />
                  </div>
                  <div className="category">Science</div>
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
                  <h3 className="title">
                    Feces could be the fuel of the future, scientists say
                  </h3>
                  <p className="desc">
                    Apple Watch review: Design For a slightly more opinionated
                    version of the video review above,…
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
                        <AiOutlineClockCircle /> {el.date}
                      </p>
                      <p className="title">{el.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="sciencenews">
              <div className="main__new">
                <div className="banner">
                  <img
                    src="https://jannah.tielabs.com/tech/wp-content/uploads/sites/10/2016/12/photo-1473520844623-167ad716dcae-220x150.jpeg"
                    alt=""
                  />
                  <div className="zap">
                    <GoZap />
                  </div>
                  <div className="category">Science</div>
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
                  <h3 className="title">
                    Feces could be the fuel of the future, scientists say
                  </h3>
                  <p className="desc">
                    Apple Watch review: Design For a slightly more opinionated
                    version of the video review above,…
                  </p>
                  <button className="readmore">
                    Read More <AiOutlineDoubleRight />
                  </button>
                </div>
              </div>
              <div className="other__news">
                {news.slice(1, 3).map((el) => (
                  <div className="other__news__item">
                    <div className="banner">
                      <img src={el.img} alt="" />
                    </div>
                    <div className="content">
                      <p className="date">
                        <AiOutlineClockCircle /> {el.date}
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
    </Box>
  );
};

export default ScienceNews;
