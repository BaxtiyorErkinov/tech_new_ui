import React from "react";
import {
  companies,
  socialmedia,
  mustRead,
  importantLinks,
  trendingTopics,
} from "../../data";

//components
import { Grid } from "@mui/material";

//icons
import { FiChevronRight } from "react-icons/fi";

//styles
import "./footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="top__section">
          <Grid container spacing={3}>
            <Grid item md={3} sm={12} xs={12}>
              <div className="logo">
                <img
                  src="https://jannah.tielabs.com/tech/wp-content/uploads/sites/10/2019/10/logo-amp.png"
                  alt=""
                />
              </div>
            </Grid>
            <Grid item md={5} sm={12} xs={12}>
              <div className="title">
                <p>
                  Jannah is a Clean Responsive WordPress Newspaper, Magazine,
                  News and Blog theme. Packed with options that allow you to
                  completely customize your website to your needs.
                </p>
              </div>
            </Grid>
            <Grid item md={4} sm={12} xs={12}>
              <div className="social__media">
                <ul className="social__media__items">
                  {socialmedia.map((el) => (
                    <li
                      className="apps"
                      style={{ backgroundColor: `${el.color}` }}
                    >
                      <el.icon />
                    </li>
                  ))}
                </ul>
              </div>
            </Grid>
          </Grid>
        </div>
        <div className="main__section">
          <Grid container justifyContent="center">
            <Grid item md={3} sm={6} xs={12}>
              <div className="title">
                <span>POPULAR COMPANIES</span>
                <div className="line"></div>
              </div>
              <ul className="companies__list">
                {companies.map((el) => (
                  <li className="companies__list__item" key={el.id}>
                    {el.name}
                  </li>
                ))}
              </ul>
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
              <div className="title">
                <span>MUST READ</span>
                <div className="line"></div>
              </div>
              <ul className="mustread__list">
                {mustRead.map((el) => (
                  <li className="companies__list__item" key={el.id}>
                    {el.name}
                  </li>
                ))}
              </ul>
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
              <div className="title important">
                <span>IMPORTANT LINKS</span>
                <div className="line"></div>
              </div>
              <ul className="mustread__list">
                {importantLinks.map((el) => (
                  <li className="companies__list__item" key={el.id}>
                    {el.name}
                  </li>
                ))}
              </ul>
            </Grid>
            <Grid item md={3} sm={6} xs={12}>
              <div className="title categories">
                <span>TRENDING TOPICS</span>
                <div className="line"></div>
              </div>
              <ul className="categories__list">
                {trendingTopics.map((el) => (
                  <li className="categories__list__item">
                    <span className="title">
                      <FiChevronRight /> {el.title}
                    </span>
                    <span
                      className="count"
                      style={{ backgroundColor: `${el.color}` }}
                    >
                      {el.count}
                    </span>
                  </li>
                ))}
              </ul>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className="last__section">
        <div className="copyright">© Copyright 2022, All Rights Reserved</div>
        <ul className="links">
          <li className="links-item">Home</li>
          <li className="links-item">About</li>
          <li className="links-item">Team</li>
          <li className="links-item">Contribute</li>
          <li className="links-item">Advertise</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
