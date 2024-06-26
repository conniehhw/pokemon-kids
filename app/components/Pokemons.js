import React from "react";
import Image from "next/image";
import styles from "../components/components.module.css";

export default function Pokemons({ pokemons }) {
  return (
    <>
      <div>
        <ul>
          {pokemons.results &&
            pokemons.results.map((pokemon) => (
              <li key={pokemon.name}>
                {/* <Image
                  src={pokemon.sprites.other.home.front_shiny}
                  alt={pokemon.name}
                  width={250}
                  height={250}
                /> */}
                <p>{pokemon.name}</p>
                <p>{pokemon.id}</p>
                <p>{pokemon.types}</p>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}
