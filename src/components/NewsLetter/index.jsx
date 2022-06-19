import React from "react";

//components
import Box from "../../UI/Box/";

//icons
import { FaRegEnvelope } from "react-icons/fa";

//styles
import "./newsletter.scss";

const NewsLetter = () => {
  return (
    <Box>
      <div className="newsletter__container">
        <div className="newsletter__title">
          <h3 className="title">News Letter</h3>
          <span className="icon">
            <FaRegEnvelope />
          </span>
        </div>
        <div className="content">
          <div className="content__title">
            <span className="evenlope">
              <FaRegEnvelope />
            </span>
            <p className="text">With Product You Purchase</p>
            <div className="line"></div>
          </div>
          <div className="content__desc">
            <span className="title">
              Subscribe to our mailing list to get the new updates!
            </span>
            <span className="subtitle">
              Lorem ipsum dolor sit amet, consectetur.
            </span>
          </div>
          <form className="form">
            <label className="textfield">
              <span>
                <FaRegEnvelope />
              </span>
              <input type="text" placeholder="Enter your Email address" />
            </label>
            <button>Subscribe</button>
          </form>
        </div>
      </div>
    </Box>
  );
};

export default NewsLetter;
