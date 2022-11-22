import React from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ character }) => {
  const { id, name, description, type } = character;
  const src = `/assets/${type}-${id}.png`;
  return (
    <div className="col-md-6 col-lg-4 g-2 gy-5">
      <div className="card mx-auto" style={{ width: "18rem" }}>
        <img loading="lazy" src={src} alt={name} />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{description}</p>
          <Link className="card-link" to={`/character/${id}`}>
            Ver más
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
