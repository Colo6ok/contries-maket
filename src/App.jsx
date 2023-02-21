import React, { useEffect, useState } from "react";
import { ReactDOM } from "react";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Form from "./components/Form";

function App() {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("");
  const [select, setSelect] = useState("");

  useEffect(() => {
    if (value.length) {
      fetch("https://restcountries.com/v3.1/name/" + value)
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => console.log(err));
    } else if (select.length) {
      fetch("https://restcountries.com/v3.1/region/" + select)
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => console.log(err));
    } else {
      fetch("https://restcountries.com/v3.1/all")
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => console.log(err));
    }
  }, [value, select]);

  return (
    <>
      <Header />
      <Form setValue={setValue} setSelect={setSelect} />
      <div className="container">
        <ul>
          {data.length
            ? data.map((e) => <Cards key={e.name.official} item={e} />)
            : "Loading.."}
        </ul>
      </div>
    </>
  );
}

export default App;
