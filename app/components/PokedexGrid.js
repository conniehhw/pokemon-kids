"use client";

import { useState, useEffect, useRef } from "react";
import { PokemonCard } from "../components/PokemonCard";
import styles from "../PokedexHome/pokedex.module.css";

//Component Function: i) Grid with Search Bar  and ii) Loop through
// each item in the api data array (allPokemons.filter, filteredPokemonList) and creates a unique card with name of each pokemon (PokemonCard component)

export function PokedexGrid({ allPokemons }) {
  const [searchText, setSearchText] = useState(""); // start with empty string

  const searchFilter = (allPokemons) => {
    return allPokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  // save the filtered array of objects from api results
  const filteredPokemonList = searchFilter(allPokemons);
  console.log(filteredPokemonList); // log filtered/searched pokemon name
  console.log(allPokemons); // logs all fetched # of pokemons (all info)

  return (
    <>
      <main className={styles.body}>
        <form action="" className={styles.searchForm}>
          <div className={styles.inputControl}>
            <input
              type="text"
              value={searchText}
              id="pokemonName"
              // autoComplete="off"
              placeholder="Search Pokemon by Name (#001-300)"
              onChange={(e) => setSearchText(e.target.value)}
              // listen for onChange event from client, take the event of that change
              // (the text typed to be saved onto 'e' variable), whenever we type in, it will set Search Text into our actual text
              // we have an array of data we can filter, we can look at every element in the list and filter- if contains "a letter from pokemon name", keep it and js filter the name
            />
            {/* <button className={styles.submitBtn} type="submit">
              Search
            </button> */}
            {/* inputted pokemon is rendered without needing to use "search" button - need to update so does not look like a button to click */}
          </div>
        </form>

        <div className={styles.all_pokemon} key={pokemon.id}>
          {filteredPokemonList.map((pokemon) => {
            return (
              <PokemonCard
                key={pokemon.id}
                name={pokemon.name}
                id={pokemon.id}
                sprites={
                  pokemon.sprites.other["official-artwork"].front_default
                }
                pokemon={pokemon}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}
