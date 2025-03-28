"use client";

import { useState, useEffect, useRef } from "react";
import styles from "../about/about.module.css";
import { PokedexGrid } from "../components/PokedexGrid";

function PokedexHome() {
  const [allPokemons, setAllPokemons] = useState([]);
  // const [offset, setOffset] = useState(0);
  // const limit = 10;

  const getAllPokemons = async () => {
    const res = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
    );

    const data = await res.json();
    console.log(data); // log results - first 20 pokemons (shows count 1302)
    console.log(data.results); // log array - first 20 pokemons
    console.log(data.next); // get next 20 pokemons

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

        console.log(data); // same as ln 34
        console.log(data.id);
        console.log(data.name);
        // console.log(allPokemons);
        // console.log(setAllPokemons);
      });
    }

    createPokemonObject(data.results);
    console.log(data.results); // same as ln 22
    console.log(allPokemons);
    console.log(setAllPokemons);
  };

  // const getNextPokemons = async () => {
  //   const res = await fetch(
  //     `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  //   );
  //   const data = await res.json();
  //   console.log(data); // log results - first 20 pokemons (shows count 1302)
  //   console.log(data.results); // log array - first 20 pokemons
  // };

  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;

      getAllPokemons();
      // getNextPokemons();
    }
  }, []);

  // useEffect(() => {
  //   getAllPokemons();
  // }, []);

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
        {/* <div>Fetch Test</div> */}

        <PokedexGrid allPokemons={allPokemons} />
        {/* <button>LoadMore</button>  */}
      </div>
    </>
  );
}

export default PokedexHome;
