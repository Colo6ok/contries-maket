import React from "react";
import { ReactDOM } from "react";
import CardsStyle from "./Cards.scss";

const Cards = (props) => {
  return (
    <>
      <section className="cards">
        <div className="container">
          <div className="cards__inner">
              <img src={props.pic} alt="this is a difference counties flag" />
            <li className="cards__item">
              <h3 className="cards__title">{props.country}</h3>
              <p className="cards__desc">
                Population:
                <span className="cards__controller">{props.number}</span>
              </p>
              <p className="cards__desc">
                Region:
                <span className="cards__controller">{props.location}</span>
              </p>
              <p className="cards__desc">
                Capital: 
                <span className="cards__controller">{props.cap}</span>
              </p>
            </li>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cards;
