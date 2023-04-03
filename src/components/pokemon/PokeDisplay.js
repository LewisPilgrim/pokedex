import React from "react";
import "./PokeDisplay.css";
import { useSelector } from "react-redux";
import { selectPokemon } from "./PokeSlice";

const PokeDisplay = () => {
  const pokes = useSelector(selectPokemon);

  return (
    <div className="displayWindow">
      {pokes ? (
        <div className="portal">
          <article className="displayPort">
            <div className="nameIdBlock">
              <h2 className="pokeName" title="Name">
                Name: {pokes.name.toUpperCase()}
              </h2>
              <p className="pokeId" title="Id">
                Id: {pokes.id}
              </p>
            </div>
            <br />

            <div className="pokeTypes" title="Types">
              TYPES:{" "}
              {pokes.types
                ? pokes.types.map((type) => (
                    <div
                      className="pokeType"
                      key={type.type.name}
                      id={type.type.name}
                      title={type.type.name}
                    >
                      {type.type.name.toUpperCase()}{" "}
                    </div>
                  ))
                : ""}
            </div>
            <div className="pokeAbilities" title="Abilities">
              <strong>ABILITIES : </strong>
              <div>
                <ul>
                  {pokes.abilities
                    ? pokes.abilities.map((ability) => (
                        <li
                          title={ability.ability.name}
                          key={ability.ability.name}
                        >
                          {ability.ability.name.toUpperCase()}
                        </li>
                      ))
                    : ""}
                </ul>
              </div>{" "}
            </div>
          </article>
          <img
            src={pokes.sprites.other["official-artwork"].front_default}
            alt={pokes.name}
            title={pokes.name}
          />
          
        </div>
      ) : (
        <h1>Search for a Pokemon</h1>
      )}
    </div>
  );
};

export default PokeDisplay;
