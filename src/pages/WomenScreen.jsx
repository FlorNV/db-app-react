import React, { useEffect, useState } from "react";
import Card from "../components/Card/Card";
import { Characters } from "../models/Characters";

const WomenScreen = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    const charactersList = Characters.filter(
      (character) => character.type === "m"
    );
    setCharacters(charactersList);
  }, []);

  return (
    <div className="container">
      <h1>WomenScreen</h1>
      <div className="row">
        {characters.map((woman) => (
          <Card key={woman.id} character={woman} />
        ))}
      </div>
    </div>
  );
};

export default WomenScreen;
