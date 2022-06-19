import React from "react";

//components
import Box from "../../UI/Box";
import CircularProgressBar from "../CircularProgressBar/";

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
import "./latestnews.scss";

const latestnews = [
  {
    id: 1,
    title: "Of course Uber is working on a flying car project",
    desc: "Apple Watch review: Design For a slightly more opinionated version of the video review above, here’s the male half of…",
    category: "Cars",
    zap: true,
    progressbar: false,
    img: "https://jannah.tielabs.com/tech/wp-content/uploads/sites/10/2016/12/gallery-5-390x220.jpg",
  },
  {
    id: 2,
    title: "Pay for the power, not for the design",
    desc: "Apple Watch review: Design For a slightly more opinionated version of the video review above, here’s the male half of…",
    category: "Laptops",
    zap: false,
    progressbar: true,
    img: "https://jannah.tielabs.com/tech/wp-content/uploads/sites/10/2016/12/photo-1473520844623-167ad716dcae-390x220.jpeg",
  },
  {
    id: 3,
    title: "Sync by 50 wireless headphones review",
    desc: "Apple Watch review: Design For a slightly more opinionated version of the video review above, here’s the male half of…",
    category: "Headphones",
    zap: true,
    progressbar: true,
    img: "https://jannah.tielabs.com/tech/wp-content/uploads/sites/10/2016/12/pexels-photo-390x220.jpg",
  },
];

const LatestNews = () => {
  return (
    <Box>
      <div className="latestnews__container">
        <div className="latestnews__title">
          <div className="title">Latest News</div>
        </div>
        <div className="lastest__news">
          {latestnews.map((el) => (
            <div className="lastest__news__item" key={el.id}>
              <div className="banner">
                <img src={el.img} alt="" />
                {el.zap && (
                  <div className="zap">
                    <GoZap />
                  </div>
                )}
                {el.progressbar && (
                  <div className="progressbar">
                    <CircularProgressBar percentage={50} />
                  </div>
                )}
                <div className="category">{el.category}</div>
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
                <p className="title">{el.title}</p>
                <p className="desc">{el.desc}</p>
                <button className="readmore">
                  Read More <AiOutlineDoubleRight />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="showmore">
          <span>Show More</span>
        </div>
      </div>
    </Box>
  );
};

export default LatestNews;
