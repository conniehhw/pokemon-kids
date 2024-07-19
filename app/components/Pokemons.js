import React from "react";
import Image from "next/image";
import styles from "../components/components.module.css";

export default function Pokemons({ pokemons }) {
  return (
    <>
      <div>
        {/* <p>{pokemons.name}</p> */}
        {/* <p>{pokemons.order}</p>
        <p>My abilities are: </p>
        {pokemons.abilities &&
          pokemons.abilities.map((value, key) => {
            return <div key={key}>{value.ability.name}</div>;
          })} */}

        {/* <Image
          src={pokemons.sprites.other.home.front_shiny}
          alt={pokemons.name}
          width={250}
          height={250}
        /> */}

        <ul>
          {pokemons.results &&
            pokemons.results.map((pokemon) => (
              <li key={pokemon}>
                <Image
                  src={pokemon.sprites?.other?.home.front_shiny}
                  alt={pokemon.name}
                  width={250}
                  height={250}
                />
                <p>{pokemon.name}</p>
                {/* <p>{pokemon.growth_time}</p>
                <p>{pokemon.types}</p> */}
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
