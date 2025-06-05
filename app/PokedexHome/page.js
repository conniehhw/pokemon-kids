"use client";

import { useState, useEffect, useRef } from "react";
import styles from "../about/about.module.css";
import { PokedexGrid } from "../components/PokedexGrid";

// Page function: Pokdex Home Page; fetch pokemon data from api call, houses the Pokedex Grid (Grid includes search form/bar)

function PokedexHome() {
  const [allPokemons, setAllPokemons] = useState([]);

  const getAllPokemons = async () => {
    const res = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=300&offset=0"
    );

    const data = await res.json();
    console.log(data); // log results - first 300 pokemons
    console.log(data.results); // log array - first 300 pokemons
    // console.log(data.next);
    // get next 300 pokemons

    function createPokemonObject(results) {
      //create an Object
      // fetch each pokemon's info - for each pokemon in list of results, fetch by name (the ind. pokemon data endpoint)
      results.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );

        const data = await res.json();
        console.log(data); //log each pokemon data

        setAllPokemons((currentList) => [...currentList, data]); // sort pokemon info
        allPokemons.sort((a, b) => a.id - b.id);

        console.log(data); // same as ln 31
        console.log(data.id);
        console.log(data.name);
        // console.log(allPokemons);
        // console.log(setAllPokemons);
      });
    }

    createPokemonObject(data.results);
    console.log(data.results); // same as ln 22-recheck
    console.log(allPokemons);
    console.log(setAllPokemons);
  };

  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;

      getAllPokemons();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }
  }, []);

  return (
    <>
      <div className={styles.main}>
        <div>
          <ul className={styles.breadcrumb}>
            <li>
              <a href="/">Home</a>
            </li>
            {/* <li>
            <a href="/resources">Resources</a>
          </li> */}
            <li>Pokedex</li>
          </ul>
        </div>

        <PokedexGrid allPokemons={allPokemons} />
      </div>
    </>
  );
}

export default PokedexHome;
