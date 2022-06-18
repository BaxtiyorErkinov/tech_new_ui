import React from "react";
import { news } from "../../data";

//components
import Box from "../../UI/Box";

//icons
import { IoDocumentTextOutline } from "react-icons/io5";
import { AiOutlineClockCircle } from "react-icons/ai";

//styles
import "./popularnews.scss";

const PopularNews = () => {
  return (
    <Box>
      <div className="popularnews__container">
        <div className="popularnews__title">
          <div className="title">Popular</div>
          <div className="icon">
            <IoDocumentTextOutline />
          </div>
        </div>
        <div className="popularnews">
          {news.map((el, index) => (
            <div className="popularnews__item" key={el.id}>
              <div className="banner">
                <img src={el.img} alt="" />
                <div className="index">{index + 1}</div>
              </div>
              <div className="content">
                <p className="title">{el.title}</p>
                <p className="date">
                  <AiOutlineClockCircle /> {el.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Box>
  );
};

export default PopularNews;
