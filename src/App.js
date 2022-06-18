import React, { useState } from "react";

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
import { Grid } from "@mui/material";
//styles
import "./App.css";

function App() {
  const [activeModalSearch, setActiveModalSearch] = useState(false);
  const [activeModalLogin, setActiveModalLogin] = useState(false);

  return (
    <div className="home__wrapper">
      <Header
        setActiveModalSearch={setActiveModalSearch}
        setActiveModalLogin={setActiveModalLogin}
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
          <Grid item md={8}>
            asda
          </Grid>
          <Grid item md={4}>
            <NewsCategories />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
