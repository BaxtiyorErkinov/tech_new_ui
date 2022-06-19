import React, { useState, useEffect } from "react";

//components
import Header from "./components/Header/";
import SearchModal from "./components/SearchModal/SearchModal";
import LoginForm from "./components/LoginForm/";
import BreakingNews from "./components/BreakingNews/";
import FeauteredNews from "./components/FeauteredNews/";
import MustReadNews from "./components/MustReadNews/";
import Followus from "./components/Followus/";
import MostViewed from "./components/MostViewedNews/";
import LastModified from "./components/LastModified/";
import Ads from "./components/Ads/";
import PopularNews from "./components/PopularNews/";
import AppsNews from "./components/AppsNews/";
import HeadphonesNews from "./components/HeadphonesNews/";
import RecentPosts from "./components/RecentPosts/";
import Reviews from "./components/Reviews/";
import RowNews from "./components/RowNews/";
import NewsCategories from "./components/NewsCategories/";
import ScienceNews from "./components/ScienceNews/";
import LatestNews from "./components/LatestNews/";
import SecondAds from "./components/SecondAds/";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer/";
import PurchaseDemos from "./components/PurchaseDemos/";
import { Grid } from "@mui/material";

//icons
import { HiChevronUp } from "react-icons/hi";

//styles
import "./App.css";

function App() {
  const [activeModalSearch, setActiveModalSearch] = useState(false);
  const [activeModalLogin, setActiveModalLogin] = useState(false);
  const [offset, setOffset] = useState(0);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [offset]);
  useEffect(() => {
    if (offset > 400) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  }, [offset]);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="home__wrapper">
      {scrolling && (
        <div
          className={`scrollToTop ${scrolling ? "activeBtn" : ""}`}
          onClick={goToTop}
        >
          <HiChevronUp />
        </div>
      )}
      <PurchaseDemos />
      <Header
        setActiveModalSearch={setActiveModalSearch}
        setActiveModalLogin={setActiveModalLogin}
        scrolling={scrolling}
      />
      {activeModalSearch && (
        <SearchModal setActiveModalSearch={setActiveModalSearch} />
      )}
      {activeModalLogin && (
        <LoginForm setActiveModalLogin={setActiveModalLogin} />
      )}
      <BreakingNews />
      <FeauteredNews />
      <div className="main__section">
        <Grid container spacing={2}>
          <Grid item md={8} xs={12}>
            <MustReadNews />
            <MostViewed />
          </Grid>
          <Grid item md={4} sm={12} xs={12}>
            <Followus />
            <LastModified />
          </Grid>
        </Grid>
        <Ads />
        <Grid container spacing={2}>
          <Grid item md={4} sm={12} xs={12}>
            <PopularNews />
            <RecentPosts />
          </Grid>
          <Grid item md={8} sm={12} xs={12}>
            <Grid container spacing={2}>
              <Grid item md={6} sm={6} xs={12}>
                <HeadphonesNews />
              </Grid>
              <Grid item md={6} sm={6} xs={12}>
                <AppsNews />
              </Grid>
              <Grid item md={12} sm={12} xs={12}>
                <Reviews />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <RowNews />
      <div className="main__section">
        <Grid container spacing={2}>
          <Grid item md={8} sm={12} xs={12}>
            <ScienceNews />
            <LatestNews />
          </Grid>
          <Grid item md={4} sm={12} xs={12}>
            <NewsCategories />
            <SecondAds />
            <NewsLetter />
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}

export default App;
