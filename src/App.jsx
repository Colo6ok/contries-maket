import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Form from "./components/Form";

function App() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  const HendleFunc = (evt) => {
    if (evt.code === "Enter") {
      setValue(evt.target.value);
      evt.target.value = null;
    }
  };

  return (
    <>
      <Header />
      <Form />
      <ul>
        {data.length
          ? data.map((e) => <Cards key={e.name.official} item={e} />)
          : "Loading.."}
      </ul>
    </>
  );
}

export default App;
