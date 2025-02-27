"use client";
import { useState } from "react";
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

        {/* <div>
          <h3>Pokemon Collection</h3>
        </div> */}
        {/* </div> */}
        <div className={styles.all_pokemon}>
          {/* //loop through each item in the api data array and create a unqiue carda with anme of each pokemon */}
          {/* {pokemonList.map((pokemon) => { */}
          {filteredPokemonList.map((pokemon) => {
            return (
              <PokemonCard
                name={pokemon.name}
                id={pokemon.id}
                sprites={pokemon.sprites.other.home.front_default}
                type={pokemon.type}

                //   pokemonStats={pokemonStats.name}
              />
            );
          })}
          {/* <IndPokemonCard name="Pikachu" />
        <IndPokemonCard />
        <IndPokemonCard /> */}
        </div>
      </main>
    </>
  );
}
