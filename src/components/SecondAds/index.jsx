import React from "react";

//styles
import "./secondads.scss";

const SecondAds = () => {
  return (
    <div className="secondads__container">
      <img
        src="https://jannah.tielabs.com/tech/wp-content/uploads/sites/10/2016/12/pexels-photo-196655-780x470.jpeg"
        alt=""
      />
      <div className="content">
        <div className="info">
          <h3 className="title">ERKINOV</h3>
          <p className="desc">
            <span>Responsive</span> Newspaper and Magazine React Theme
          </p>
        </div>
        <button>PURCHASE NOW</button>
      </div>
    </div>
  );
};

export default SecondAds;
