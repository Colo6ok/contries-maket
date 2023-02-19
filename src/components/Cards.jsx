import React from "react";
import { ReactDOM } from "react";
import CardsStyle from "./Cards.scss";

const Cards = ({ item }) => {
  return (
    <>
      <section className="cards">
        <div className="container">
          <div className="cards__inner">
              <img
                src={item.flags.png}
                alt={item.flags.alt}
              />
            <li className="cards__item">
              <h3 className="cards__title">{item.name.common}</h3>
              <p className="cards__desc">
                Population:
                <span className="cards__controller"> {item.population}</span>
              </p>
              <p className="cards__desc">
                Region:
                <span className="cards__controller"> {item.region}</span>
              </p>
              <p className="cards__desc">
                Capital:
                <span className="cards__controller"> {item.capital}</span>
              </p>
            </li>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cards;
