import React from "react";
import { ReactDOM } from "react";
import Header from "./components/Header";
import Cards from "./components/Cards";
import Form from "./components/Form";
import Pic1 from "../src/assets/Images/german.png";
import Pic2 from "../src/assets/Images/usa.png";
import Pic3 from "../src/assets/Images/brazil.png";
import Pic4 from "../src/assets/Images/iceland.png";
import Pic5 from "../src/assets/Images/afganistan.png";
import Pic6 from "../src/assets/Images/aland.png";
import Pic7 from "../src/assets/Images/albania.png";
import Pic8 from "../src/assets/Images/algeriaa.png";

function App() {
  // const [count, setCount] = React.useState(0)
  return (
    <>
      <Header />
      {/* <button onClick={() => setCount(count - 1)}>Prass me {count}</button> */}
      <Form />
      <ul>
        <Cards
          pic={Pic1}
          country="Germany"
          number=" 81,770,900"
          location=" Europe"
          cap=" Berlin"
        />
        <Cards
          pic={Pic2}
          country="United States of America"
          number=" 323,947,000"
          location=" Americas"
          cap=" Washington, D.C."
        />
        <Cards
          pic={Pic3}
          country="Brazil"
          number=" 206,135,893"
          location=" Americas"
          cap=" Brasília"
        />
        <Cards
          pic={Pic4}
          country="Iceland"
          number=" 334,300"
          location=" Europe"
          cap=" Reykjavík"
        />
      </ul>
      <ul>
        <Cards
          pic={Pic5}
          country="Afghanistan"
          number=" 27,657,145"
          location=" Asia"
          cap=" Kabul"
        />
        <Cards
          pic={Pic6}
          country="Åland Islands"
          number=" 28,875"
          location=" Europe"
          cap=" Mariehamn"
        />
        <Cards
          pic={Pic7}
          country="Albania"
          number=" 2,886,026"
          location=" Europe"
          cap=" Tirana"
        />
        <Cards
          pic={Pic8}
          country="Algeria"
          number=" 40,400,000"
          location=" Africa"
          cap=" Algiers"
        />
      </ul>
    </>
  );
}

export default App;
