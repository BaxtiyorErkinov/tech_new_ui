import React, { useRef } from "react";
import { news } from "../../data";

//components
import Box from "../../UI/Box";
import { Grid } from "@mui/material";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Navigation, Pagination } from "swiper";
import "swiper/scss";
import "swiper/scss/effect-fade";
import "swiper/scss/navigation";

//icons
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { AiOutlineClockCircle } from "react-icons/ai";

//styles
import "./recentposts.scss";

const RecentPosts = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <Box>
      <div className="recentposts__container">
        <div className="recentposts__title">
          <div className="title">Recent Posts</div>
          <div className="icon">
            <IoDocumentTextOutline />
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
            <div className="recentposts">
              <Grid container spacing={2}>
                {news.map((el) => (
                  <Grid item md={6} sm={6} xs={12}>
                    <div className="recentposts__item">
                      <div className="banner">
                        <img src={el.img} alt="" />
                      </div>
                      <div className="content">
                        <p className="title">{el.title}</p>
                        <p className="date">
                          <AiOutlineClockCircle />
                          {el.date}
                        </p>
                      </div>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="recentposts">
              <Grid container spacing={2}>
                {news.slice(1, 3).map((el) => (
                  <Grid item md={6} sm={6} xs={12}>
                    <div className="recentposts__item">
                      <div className="banner">
                        <img src={el.img} alt="" />
                      </div>
                      <div className="content">
                        <p className="title">{el.title}</p>
                        <p className="date">
                          <AiOutlineClockCircle />
                          {el.date}
                        </p>
                      </div>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="action">
          <button className="action__btn-left" ref={navigationPrevRef}>
            <FiChevronLeft />
          </button>
          <button className="action__btn-right" ref={navigationNextRef}>
            <FiChevronRight />
          </button>
        </div>
      </div>
    </Box>
  );
};

export default RecentPosts;
