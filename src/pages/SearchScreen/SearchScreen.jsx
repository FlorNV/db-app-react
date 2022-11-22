import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import Card from "../../components/Card/Card";
import { Characters } from "../../models/Characters";

const SearchScreen = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { q = "" } = queryString.parse(location.search);
  const [characters, setCharacters] = useState([]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`?q=${inputValue}`);
  };

  const getCharacters = () => {
    if (inputValue.trim() !== "") {
      const value = inputValue.toLocaleLowerCase();
      const characterList = Characters.filter((character) =>
        character.name.toLocaleLowerCase().includes(value)
      );
      setCharacters(characterList);
    } else {
      setCharacters([]);
    }
  };

  useEffect(() => {
    getCharacters();
  }, [q]);

  // const [characters, setCharacters] = useState([]);
  // const [query, setQuery] = useState("");

  // useEffect(() => {
  //   const charactersList = Characters;
  //   setCharacters(charactersList);
  // }, []);

  // const handleChange = (e) => {
  //   setQuery(e.target.value);
  // };

  // const charactersList = query
  //   ? characters.filter((character) =>
  //       character.name.toLowerCase().includes(query.toLowerCase())
  //     )
  //   : characters;

  return (
    <div className="container">
      <h1>SearchScreen</h1>
      <form
        className="my-5 row row-cols-auto justify-content-center"
        onSubmit={handleSubmit}
      >
        <div className="col-6">
          <input
            type="text"
            placeholder="Nombre del personaje"
            value={inputValue}
            onChange={handleChange}
            autoComplete="off"
            className="form-control"
          />
        </div>
        <div className="col">
          <button type="submit" className="btn btn-primary">
            Buscar
          </button>
        </div>
      </form>

      {characters && (
        <>
          {characters.length > 0 && <h4>Resultados: {characters.length}</h4>}
          <div className="row">
            {characters.map((character) => (
              <Card key={character.id} character={character} />
            ))}
          </div>
          {characters.length === 0 && q ? (
            <div className="alert alert-danger text-center mx-5" role="alert">
              <h4 className="alert-heading">Sin coincidencias!</h4>
              <p>Prueba buscando con otras palabras.</p>
            </div>
          ) : (
            <div className="alert alert-primary text-center mx-5" role="alert">
              <h4 className="alert-heading">Busca un personaje!</h4>
              <p>Introduce el nombre de un personaje.</p>
            </div>
          )}
        </>
      )}

      {/* <input
        type="text"
        placeholder="Buscar"
        value={query}
        onChange={handleChange}
        className="form-control"
        autoComplete="off"
      />
      {charactersList && (
        <div className="row">
          {charactersList.map((character) => (
            <Card key={character.id} character={character} />
          ))}
        </div>
      )}
      {charactersList.length === 0 && (
        <h2 className="mt-5 text-center">Sin coincidencias</h2>
      )} */}
    </div>
  );
};

export default SearchScreen;
