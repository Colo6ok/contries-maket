import React from "react";
import { ReactDOM } from "react";
import HeaderStyle from "./Header.scss";

const Header = () => {
  function toggleDarkMode() {
    let body = document.getElementById("body");
    body.classList.toggle("dark-mode");
  }

  return (
    <>
      <header className="site-header">
        <div className="container">
          <div className="header__inner">
            <div className="header__box">
              <h1 className="header__title">Where in the world?</h1>
            </div>
            <button type="button" onClick={toggleDarkMode} className="header__btn">
              Dark / Light
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
