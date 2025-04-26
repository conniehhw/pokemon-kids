"use client";
import { useState, useEffect, useRef } from "react";

import { PokemonCard } from "../components/PokemonCard";

import styles from "../PokedexHome/pokedex.module.css";

export function PokedexGrid({ allPokemons }) {
  const [searchText, setSearchText] = useState(""); // empty string

  const searchFilter = (allPokemons) => {
    return allPokemons.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchText.toLowerCase())
    );
  };

  // save the filtered array of objects
  const filteredPokemonList = searchFilter(allPokemons);
  console.log(filteredPokemonList); // log filtered/searched pokemon name
  console.log(allPokemons); // logs all fetched 20 pokemons (all info)

  return (
    <>
      <main className={styles.body}>
        {/* <h3>Search for your Pokemon!</h3> */}
        <form action="" className={styles.searchForm}>
          <div className={styles.inputControl}>
            {/* <h4>Pokemon Name</h4> */}

            <input
              type="text"
              value={searchText}
              id="pokemonName"
              //autoComplete= "off"
              placeholder="Search for a Pokemon... "
              onChange={(e) => setSearchText(e.target.value)}
              // className={styles.searchForm}
              // listen for onChange event from client, take the event of that change
              // (the text typed to be saved onto 'e' variable), whenever we type in, it will set Search Text into our actual text
              // we have an array of data we can filter, we can look at every element in the list and filter- if contains "P", keep it and js filter the name
            />
            <button className={styles.submitBtn} type="submit">
              Search
            </button>
          </div>
        </form>

        <div className={styles.all_pokemon}>
          {/* //loop through each item in the api data array and create a unique card with name of each pokemon */}
          {/* {pokemonList.map((pokemon) => { */}
          {filteredPokemonList.map((pokemon) => {
            // return pokemon.types.map((type) => {
            //   console.log(type.type.name); //log pokemon type
            //   })
            // )

            return (
              <PokemonCard
                name={pokemon.name}
                id={pokemon.id}
                sprites={
                  pokemon.sprites.other["official-artwork"].front_default
                }
                // types={type.type.name}
                // types={pokemon.types[0].type.name}
                height={pokemon.height}
                // type={type.type.name}
                // types={types}
                pokemon={pokemon}
                // allPokemons={allPokemons}
                // type={pokemon.type}

                //   pokemonStats={pokemonStats.name}
              />
            );
            // });
          })}
        </div>
      </main>
    </>
  );
}
