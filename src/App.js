import React, { useState } from "react";

//components
import Header from "./components/Header/";
import SearchModal from "./components/SearchModal/SearchModal";
import LoginForm from "./components/LoginForm/";
import BreakingNews from "./components/BreakingNews/";
import FeauteredNews from "./components/FeauteredNews/";
import MustReadNews from "./components/MustReadNews/";
import Followus from "./components/Followus/";
import MostViewed from './components/MostViewedNews/'
import LastModified from './components/LastModified/'
import Ads from './components/Ads/'
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
        <Grid container spacing={2} >
          <Grid item md={8} xs={12}>
            <MustReadNews />
            <MostViewed />
          </Grid>
          <Grid item md={4} xs={12}>
            <Followus />
            <LastModified />
          </Grid>
        </Grid>
        <Ads />
      </div>
    </div>
  );
}

export default App;
