"use client";

import { useState, useEffect, useRef } from "react";
import styles from "../about/about.module.css";
import { PokedexGrid } from "../components/PokedexGrid";

function PokedexHome() {
  const [allPokemons, setAllPokemons] = useState([]);
  // const [offset, setOffset] = useState(0);
  // const limit = 20;

  const getAllPokemons = async () => {
    const res = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=20"

      // &offset=0"
      // `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
    );

    const data = await res.json();
    console.log(data);

    function createPokemonObject(results) {
      results.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );

        const data = await res.json();

        setAllPokemons((currentList) => [...currentList, data]);
        allPokemons.sort((a, b) => a.id - b.id);

        console.log(data);
        console.log(data.id);
        console.log(data.name);
      });
    }

    createPokemonObject(data.results);
    console.log(data.results);
  };
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;

      getAllPokemons();
    }
  }, []);
  // }, [offset]);

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
        {/* <button
          className="more"
          onClick={() => {
            setOffset(offset + limit);
          }}
        >
          More
        </button> */}
      </div>
    </>
  );
}

export default PokedexHome;
