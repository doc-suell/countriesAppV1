import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Countries = () => {
  // le useEffect se joue lorsque le composant est monté
  const [data, setData] = useState([]);
  const [RangeValue, setRangeValue] = useState(36);
  const radio = ["Afrique", "America", "Asia", "Europ", "Oceania"];
  const [selectedRadio, setSelectedRadio] = useState("");
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
        {radio.map((continent) => (
          <li>
            <input
              type="radio"
              id="afrique"
              name="continentRadio"
              onChange={(e) => setSelectedRadio(e.target.id)}
            />
            <label htmlFor="{continent}">{continent}</label>
          </li>
        ))}
      </ul>
      {/* <p>{hello}</p> */}
      <ul>
        {data
          .filter((country) => country.continents[0].includes(selectedRadio))
          .slice(0, RangeValue)
          .map((country, index) => (
            <Card key={index} country={country} />
          ))}
      </ul>
    </div>
  );
};

export default Countries;
