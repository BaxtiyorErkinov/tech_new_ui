import React, { useState } from "react";

//components
import Header from "./components/Header/";
import SearchModal from "./components/SearchModal/SearchModal";
import LoginForm from "./components/LoginForm/";

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
    </div>
  );
}

export default App;
