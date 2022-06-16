//packages
import React, { useState } from "react";

//components
import LinkItems from "./LinkItems";

// Icons
import { GoPlus } from "react-icons/go";
import { IoMdArrowDropdown } from "react-icons/io";
import { BiMenu } from "react-icons/bi";
import { HiOutlineSearch } from "react-icons/hi";
import {
  FaUserCircle,
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaGooglePlay,
} from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

//styles
import "./header.scss";

const Header = ({ setActiveModalSearch, setActiveModalLogin }) => {
  const [isActiveMenu, setIsActiveMenu] = useState(false);
  return (
    <header>
      <div className="header__container">
        <span className="toggle-btn" onClick={() => setIsActiveMenu(true)}>
          <BiMenu />
        </span>
        <div className="logo">
          <img
            src="https://jannah.tielabs.com/tech/wp-content/uploads/sites/10/2019/10/tech-logo@2x.png"
            alt=""
          />
        </div>
        <nav className={`navigation ${isActiveMenu ? "activemenu" : ""}`}>
          <ul className="navigation__items">
            <span className="clode-btn" onClick={() => setIsActiveMenu(false)}>
              <AiOutlineClose />
            </span>
            <li className="navigation__items-link active">
              <a href="#">Home</a>
            </li>
            <li className="navigation__items-link">
              <a href="#">
                Tech
                <IoMdArrowDropdown />
              </a>
              <LinkItems />
            </li>
            <li className="navigation__items-link">
              <a href="#">
                Science
                <IoMdArrowDropdown />
              </a>
              <LinkItems />
            </li>
            <li className="navigation__items-link">
              <a href="#">
                Apps
                <IoMdArrowDropdown />
              </a>
              <LinkItems />
            </li>
            <li className="navigation__items-link">
              <a href="#">
                Cars
                <IoMdArrowDropdown />
              </a>
              <LinkItems />
            </li>
            <li className="navigation__items-link">
              <a href="#">
                Reviews
                <IoMdArrowDropdown />
              </a>
              <div className="navigation__item-link__item">
                <ul>
                  <li>Tablets</li>
                  <li>Laptops</li>
                  <li>Phones</li>
                  <li>Cameras</li>
                  <li>Headpehones</li>
                </ul>
              </div>
            </li>
          </ul>
          <div className="components">
            <span className="components-follow">
              <GoPlus />
              <span className="text">Follow</span>
              <div className="components-follow__item">
                <ul>
                  <li className="facebook">
                    <FaFacebook />
                    Facebook
                  </li>
                  <li className="twitter">
                    <FaTwitter />
                    Twitter
                  </li>
                  <li className="linkedin">
                    <FaLinkedinIn />
                    LinkedIn
                  </li>
                  <li className="youtube">
                    <FaYoutube />
                    Youtube
                  </li>
                  <li className="google">
                    <FaGooglePlay />
                    Google Play
                  </li>
                </ul>
              </div>
            </span>
            <span
              className="components-user"
              onClick={() => setActiveModalLogin(true)}
            >
              <FaUserCircle />
            </span>
            <span className="components-menu">
              <BiMenu />
            </span>
            <span
              className="components-search"
              onClick={() => setActiveModalSearch(true)}
            >
              <HiOutlineSearch />
            </span>
          </div>
          <div className="social__networks">
            <span>
              <FaFacebook />
            </span>
            <span>
              <FaTwitter />
            </span>
            <span>
              <FaLinkedinIn />
            </span>
            <span>
              <FaYoutube />
            </span>
            <span>
              <FaGooglePlay />
            </span>
          </div>
          <div className="text-field">
            <input type="text" placeholder="Search..." />
            <HiOutlineSearch />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
