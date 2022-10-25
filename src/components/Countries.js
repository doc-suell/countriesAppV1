import axios from "axios";
import React, { useEffect, useState } from "react";

const Countries = () => {
  // le useEffect se joue lorsque le composant est monté
  const [data, setData] = useState([]);
  useEffect(() => {
    // .get("link") aller chercher then. apres tu me donne un resultat "res" et tu l'affiche dans le console.log

    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setData(res.data));
  }, []);
  return (
    <div className="countries">
      <h1>COUNTRIES</h1>
    </div>
  );
};

export default Countries;
