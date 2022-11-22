import React, { useState } from "react";
import { useEffect } from "react";
import Card from "../components/Card/Card";
import { Characters } from "../models/Characters";

const MenScreen = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    const charactersList = Characters.filter(
      (character) => character.type === "h"
    );
    setCharacters(charactersList);
  }, []);

  return (
    <div className="container">
      <h1>MenScreen</h1>
      <div className="row">
        {characters.map((man) => (
          <Card key={man.id} character={man} />
        ))}
      </div>
    </div>
  );
};

export default MenScreen;
