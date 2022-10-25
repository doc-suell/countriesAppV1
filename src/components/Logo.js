import React from "react";

const Logo = () => {
  return (
    <div className="logo">
      {/* les images importées depuis la balis IMG sont accessoble dans "public" dans le public on fait ./le nom de logo */}

      <img src="./logo192.png" alt="logo country app" />
      <h3>React world</h3>
    </div>
  );
};

export default Logo;
