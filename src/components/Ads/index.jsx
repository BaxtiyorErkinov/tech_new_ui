import React from "react";

//styles
import "./ads.scss";

const Ads = () => {
  return (
    <div className="ads__container">
      <div className="ads__item">
        <img
          src="https://jannah.tielabs.com/tech/wp-content/uploads/sites/10/2016/12/photo-1473520844623-167ad716dcae-780x470.jpeg"
          alt=""
        />
        <div className="content">
          <div className="text">
            Baxtiyor Responsive Newspaper and Magazine React theme
          </div>
          <button className="action-btn">PURCHASE NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Ads;
