import React from "react";
import { Link, useParams } from "react-router-dom";
import { Characters } from "../../models/Characters.js";
import "./CharacterScreen.css";

const CharacterScreen = () => {
  const { id } = useParams();
  const character = Characters.filter((character) => character.id === id)[0];
  const { name, description, type } = character;
  const src = `/assets/${type}-${id}.png`;

  return (
    <div className="container">
      <h1>CharacterScreen</h1>
      <div className="card mx-auto mt-5" style={{ maxWidth: "560px" }}>
        <div className="row g-0">
          <div className="col-4 text-center">
            <img src={src} alt={name} className="img-fluid img-details" />
          </div>
          <div className="col-8">
            <div className="card-body">
              <h2 className="card-title">{name}</h2>
              <p className="card-text">{description}</p>
              <p className="card-text">
                Género: {type === "h" ? "Masculino" : "Femenino"}
              </p>
              <Link to="/men" className="btn btn-outline-success mt-3">
                Volver
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterScreen;
