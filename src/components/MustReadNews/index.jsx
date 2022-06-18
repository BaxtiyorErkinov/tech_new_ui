import React, { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/effect-fade";
import "swiper/scss/navigation";
import { Grid } from "@mui/material";
import CircularProgressBar from "../CircularProgressBar/";
import Box from "../../UI/Box/";

//icons
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { AiFillFire, AiOutlineClockCircle } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { GoZap } from "react-icons/go";

//styles
import "./mustreadnews.scss";

const MustReadNews = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <Box>
      <div className="mustreadnews__container">
        <div className="mustreadnews__actions">
          <div className="title">Must Read</div>
          <div className="actions">
            <ul className="filters__list">
              <li className="filters__list-item active">All</li>
              <li className="filters__list-item">Apps</li>
              <li className="filters__list-item">Cameras</li>
              <li className="filters__list-item">Headphones</li>
              <li className="filters__list-item">Phones</li>
            </ul>
            <div className="actions__btns">
              <button className="actions__btns-left" ref={navigationPrevRef}>
                <FiChevronLeft />
              </button>
              <button className="actions__btns-right" ref={navigationNextRef}>
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
              <Grid container spacing={1}>
                <Grid item md={5} xs={12}>
                  <div className="main_new">
                    <img
                      src="https://jannah.tielabs.com/tech/wp-content/uploads/sites/10/2016/12/pexels-photo-780x470.jpg"
                      alt=""
                    />
                    <div className="progressbar">
                      <CircularProgressBar percentage={77} />
                    </div>
                    <div className="zap">
                      <GoZap />
                    </div>
                    <div className="content">
                      <div className="category">
                        <span>Headphones</span>
                      </div>
                      <p className="title">
                        Sync by 50 wireless Headphones review
                      </p>
                      <div className="info">
                        <p>
                          <FaUserCircle />
                          Tony Stark{" "}
                          <span className="date">
                            <AiOutlineClockCircle /> Dec 11, 2016
                          </span>
                        </p>
                        <span className="popularity">
                          <AiFillFire />
                          16,992
                        </span>
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item md={7} xs={12}>
                  <div className="other__news">
                    <div className="other__news__item">
                      <div className="banner">
                        <img
                          src="https://jannah.tielabs.com/tech/wp-content/uploads/sites/10/2016/12/photo-1480365501497-199581be0e66-220x150.jpeg"
                          alt=""
                        />
                      </div>
                      <div className="info">
                        <p className="date">
                          <AiOutlineClockCircle /> Dec 11, 2016
                        </p>
                        <span className="title">
                          The best action camera you can buy
                        </span>
                      </div>
                    </div>
                    <div className="other__news__item">
                      <div className="banner">
                        <img
                          src="https://jannah.tielabs.com/tech/wp-content/uploads/sites/10/2016/12/slide-48-220x150.jpg"
                          alt=""
                        />
                      </div>
                      <div className="info">
                        <p className="date">
                          <AiOutlineClockCircle /> Dec 11, 2016
                        </p>
                        <span className="title">
                          The best action camera you can buy
                        </span>
                      </div>
                    </div>
                    <div className="other__news__item">
                      <div className="banner">
                        <img
                          src="https://jannah.tielabs.com/tech/wp-content/uploads/sites/10/2016/12/photo-1458862768540-8b091824fe2d-220x150.jpeg"
                          alt=""
                        />
                      </div>
                      <div className="info">
                        <p className="date">
                          <AiOutlineClockCircle /> Dec 11, 2016
                        </p>
                        <span className="title">
                          The best action camera you can buy
                        </span>
                      </div>
                    </div>
                    <div className="other__news__item">
                      <div className="banner">
                        <img
                          src="https://jannah.tielabs.com/tech/wp-content/uploads/sites/10/2016/12/photo-1476966162421-d6f1dde41279-220x150.jpeg"
                          alt=""
                        />
                      </div>
                      <div className="info">
                        <p className="date">
                          <AiOutlineClockCircle /> Dec 11, 2016
                        </p>
                        <span className="title">
                          The best action camera you can buy
                        </span>
                      </div>
                    </div>
                    <div className="other__news__item">
                      <div className="banner">
                        <img
                          src="https://jannah.tielabs.com/tech/wp-content/uploads/sites/10/2016/12/photo-1476357471311-43c0db9fb2b4-220x150.jpeg"
                          alt=""
                        />
                      </div>
                      <div className="info">
                        <p className="date">
                          <AiOutlineClockCircle /> Dec 11, 2016
                        </p>
                        <span className="title">
                          The best action camera you can buy
                        </span>
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="news__container">
              <Grid container spacing={1}>
                <Grid item md={5} xs={12}>
                  <div className="main_new">
                    <img
                      src="https://jannah.tielabs.com/tech/wp-content/uploads/sites/10/2016/12/photo-1473520844623-167ad716dcae-780x470.jpeg"
                      alt=""
                    />
                    <div className="progressbar">
                      <CircularProgressBar percentage={77} />
                    </div>
                    <div className="zap">
                      <GoZap />
                    </div>
                    <div className="content">
                      <div className="category">
                        <span>Headphones</span>
                      </div>
                      <p className="title">
                        Sync by 50 wireless Headphones review
                      </p>
                      <div className="info">
                        <p>
                          <FaUserCircle />
                          Tony Stark{" "}
                          <span className="date">
                            <AiOutlineClockCircle /> Dec 11, 2016
                          </span>
                        </p>
                        <span className="popularity">
                          <AiFillFire />
                          16,992
                        </span>
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item md={7} xs={12}>
                  <div className="other__news">
                    <div className="other__news__item">
                      <div className="banner">
                        <img
                          src="https://jannah.tielabs.com/tech/wp-content/uploads/sites/10/2016/12/ipad-605439_1280-220x150.jpg"
                          alt=""
                        />
                      </div>
                      <div className="info">
                        <p className="date">
                          <AiOutlineClockCircle /> Dec 11, 2016
                        </p>
                        <span className="title">
                          The best action camera you can buy
                        </span>
                      </div>
                    </div>
                    <div className="other__news__item">
                      <div className="banner">
                        <img
                          src="https://jannah.tielabs.com/tech/wp-content/uploads/sites/10/2016/12/headphones-instagram-video-games-razer-159463-220x150.jpeg"
                          alt=""
                        />
                      </div>
                      <div className="info">
                        <p className="date">
                          <AiOutlineClockCircle /> Dec 11, 2016
                        </p>
                        <span className="title">
                          The best action camera you can buy
                        </span>
                      </div>
                    </div>
                    <div className="other__news__item">
                      <div className="banner">
                        <img
                          src="https://jannah.tielabs.com/tech/wp-content/uploads/sites/10/2016/12/slide-41-220x150.jpg"
                          alt=""
                        />
                      </div>
                      <div className="info">
                        <p className="date">
                          <AiOutlineClockCircle /> Dec 11, 2016
                        </p>
                        <span className="title">
                          The best action camera you can buy
                        </span>
                      </div>
                    </div>
                    <div className="other__news__item">
                      <div className="banner">
                        <img
                          src="https://jannah.tielabs.com/tech/wp-content/uploads/sites/10/2016/12/photo-1476966162421-d6f1dde41279-220x150.jpeg"
                          alt=""
                        />
                      </div>
                      <div className="info">
                        <p className="date">
                          <AiOutlineClockCircle /> Dec 11, 2016
                        </p>
                        <span className="title">
                          The best action camera you can buy
                        </span>
                      </div>
                    </div>
                    <div className="other__news__item">
                      <div className="banner">
                        <img
                          src="https://jannah.tielabs.com/tech/wp-content/uploads/sites/10/2016/12/photo-1476357471311-43c0db9fb2b4-220x150.jpeg"
                          alt=""
                        />
                      </div>
                      <div className="info">
                        <p className="date">
                          <AiOutlineClockCircle /> Dec 11, 2016
                        </p>
                        <span className="title">
                          The best action camera you can buy
                        </span>
                      </div>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </Box>
  );
};

export default MustReadNews;
