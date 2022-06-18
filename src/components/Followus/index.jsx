import React from "react";
import Box from "../../UI/Box/";

//icons
import { BsFacebook, BsTwitter, BsYoutube } from "react-icons/bs";
import { AiTwotoneLike } from "react-icons/ai";

//styles
import "./followus.scss";

const Followus = () => {
  return (
    <Box>
      <div className="followus__container">
        <div className="followus__title">
          <span className="title">Follow Us</span>
          <span className="icon">
            <AiTwotoneLike />
          </span>
        </div>
        <div className="social__network-facebook">
          <span className="icon">
            <BsFacebook />
          </span>
          <p className="count">
            1.3M <span>Fans</span>
          </p>
        </div>
        <div className="social__network-twitter">
          <span className="icon">
            <BsTwitter />
          </span>
          <p className="count">
            1,221 <span>Followers</span>
          </p>
        </div>
        <div className="social__network-youtube">
          <span className="icon">
            <BsYoutube />
          </span>
          <p className="count">
            3.3M <span>Subscribers</span>
          </p>
        </div>
      </div>
    </Box>
  );
};

export default Followus;
