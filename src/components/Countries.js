import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Countries = () => {
  // le useEffect se joue lorsque le composant est monté
  const [data, setData] = useState([]);
  const [RangeValue, setRangeValue] = useState(36);
  const radio = ["Afrique", "America", "Asia", "Europ", "Oceania"];
  // const [hello, setHello] = useState("hello friends");
  useEffect(() => {
    // .get("link") aller chercher then. apres tu me donne un resultat "res" et tu l'affiche dans le console.log

    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data));
  }, []);
  return (
    <div className="countries">
      <ul className="radio-container">
        <input
          type="range"
          min="1"
          max="250"
          defaultValue={RangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />
        {radio.map(continent) => }
        <input type="radio" id="afrique" />
        <label htmlFor="afrique"></label>
      </ul>
      {/* <p>{hello}</p> */}
      <ul>
        {data.slice(0, RangeValue).map((country, index) => (
          <Card key={index} country={country} />
        ))}
      </ul>
    </div>
  );
};

export default Countries;
