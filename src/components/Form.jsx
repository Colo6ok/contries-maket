import React from "react";
import "./Form.scss";
import SearchPic from "../assets/Images/search.svg";

const Form = ({ setValue, setSelect }) => {
  return (
    <>
      <div className="container">
        <div className="form__wrapper">
          <div className="box">
            <label className="form__label">
              <img className="form__pic" src={SearchPic} alt="" />
              <input
                type="search"
                aria-label="searcher"
                placeholder="Search for a country…"
                className="form__input"
                onKeyUp={(evt) => {
                  if (evt.code === "Enter") {
                    setValue(evt.target.value);
                    evt.target.value = "";
                  }
                }}
              />
            </label>
            <select className="form__select" name="user_select" onChange={(evt) => {
              setSelect(evt.target.value);
            }}>
              <option value="filter by ragion" disabled selected>
                Filter by Region
              </option>
              <option value="Africa">Africa</option>
              <option value="America">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
