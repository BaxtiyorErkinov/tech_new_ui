import React, { useRef } from "react";
import Box from "../../UI/Box";
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
import "./appsnews.scss";

const AppsNews = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <Box>
      <div className="appsnews__container">
        <div className="appsnews__title">
          <div className="title">Apps</div>
          <div className="actions">
            <button className="actions__btn-left" ref={navigationPrevRef}>
              <FiChevronLeft />
            </button>
            <button className="actions__btn-right" ref={navigationNextRef}>
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
            <div className="appnews__wrapper">
              <div className="main__new">
                <div className="banner">
                  <img
                    src="https://jannah.tielabs.com/tech/wp-content/uploads/sites/10/2016/12/ipad-605439_1280-390x220.jpg"
                    alt=""
                  />
                  <div className="zap">
                    <GoZap />
                  </div>
                  <div className="category">Apps</div>
                </div>
                <div className="content">
                  <div className="info">
                    <div className="left__section">
                      <p className="user">
                        <FaUserCircle />
                        Tony Stark
                      </p>
                      <p className="date">
                        <AiOutlineClockCircle />
                        Dec 11, 2016
                      </p>
                    </div>
                    <div className="right__section">
                      <p className="comments">
                        <IoChatbubblesSharp />0
                      </p>
                      <div className="popularity">
                        <AiFillFire />
                        3,691
                      </div>
                    </div>
                  </div>
                  <div className="title">
                    John Baldessari on designing the newest BMW art car
                  </div>
                  <p className="desc">
                    Apple Watch review: Design For a slightly more opinionated
                    version of the video review above, here’s the male half of…
                  </p>
                  <button className="readmore">
                    Read More <AiOutlineDoubleRight />
                  </button>
                </div>
              </div>
              <div className="other__news">
                {news.slice(0, 3).map((el) => (
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
            <div className="appnews__wrapper">
              <div className="main__new">
                <div className="banner">
                  <img
                    src="https://jannah.tielabs.com/tech/wp-content/uploads/sites/10/2016/12/photo-1473520844623-167ad716dcae-390x220.jpeg"
                    alt=""
                  />
                  <div className="zap">
                    <GoZap />
                  </div>
                  <div className="category">Apps</div>
                </div>
                <div className="content">
                  <div className="info">
                    <div className="left__section">
                      <p className="user">
                        <FaUserCircle />
                        Tony Stark
                      </p>
                      <p className="date">
                        <AiOutlineClockCircle />
                        Dec 11, 2016
                      </p>
                    </div>
                    <div className="right__section">
                      <p className="comments">
                        <IoChatbubblesSharp />0
                      </p>
                      <div className="popularity">
                        <AiFillFire />
                        3,691
                      </div>
                    </div>
                  </div>
                  <div className="title">
                    John Baldessari on designing the newest BMW art car
                  </div>
                  <p className="desc">
                    Apple Watch review: Design For a slightly more opinionated
                    version of the video review above, here’s the male half of…
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
    </Box>
  );
};

export default AppsNews;
