import React from "react";
import FormStyle from "./Form.scss";
import SearchPic from "../assets/Images/search.svg";

const Form = () => {

  return (
    <>
      <div className="container">
        <div className="form__wrapper">
          <form method="post" className="form">
            <label className="form__label">
              <img className="form__pic" src={SearchPic} alt="" />
              <input
                type="text"
                aria-label="searcher"
                placeholder="Search for a country…"
                className="form__input"
             />
            </label>
            <select className="form__select" name="user_select" id="">
              <option value="filter by ragion" disabled selected>
                Filter by Region
              </option>
              <option value="Africa">Africa</option>
              <option value="America">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </form>
        </div>
      </div>
    </>
  );
};

export default Form;
