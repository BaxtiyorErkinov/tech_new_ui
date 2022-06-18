import React from "react";

//components
import { Grid } from "@mui/material";

//styles
import "./rownews.scss";

const RowNews = () => {
  return (
    <div className="rownews__container">
      <Grid container spacing={1}>
        <Grid item md={4} sm={6} xs={12}>
          <div className="rownews__item">
            <img
              src="https://jannah.tielabs.com/tech/wp-content/uploads/sites/10/2016/12/slide-48-780x470.jpg"
              alt=""
            />
            <div className="content">
              <div className="date">Dec 11, 2016</div>
              <div className="title">
                Battle of the portable planar magnetic headphones
              </div>
              <p className="desc">
                Apple Watch review: Design For a slightly more opinionated
                version of the video review above,…
              </p>
            </div>
          </div>
        </Grid>
        <Grid item md={4} sm={6} xs={12}>
          <div className="rownews__item">
            <img
              src="https://jannah.tielabs.com/tech/wp-content/uploads/sites/10/2016/12/pexels-photo-41227-780x470.jpeg"
              alt=""
            />
            <div className="content">
              <div className="date">Dec 11, 2016</div>
              <div className="title">
                Battle of the portable planar magnetic headphones
              </div>
              <p className="desc">
                Apple Watch review: Design For a slightly more opinionated
                version of the video review above,…
              </p>
            </div>
          </div>
        </Grid>
        <Grid item md={4} sm={12} xs={12}>
          <div className="rownews__item">
            <img
              src="https://jannah.tielabs.com/tech/wp-content/uploads/sites/10/2016/12/pexels-photo-196655-780x470.jpeg"
              alt=""
            />
            <div className="content last">
              <div className="date">Dec 11, 2016</div>
              <div className="title">
                Battle of the portable planar magnetic headphones
              </div>
              <p className="desc">
                Apple Watch review: Design For a slightly more opinionated
                version of the video review above,…
              </p>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default RowNews;
