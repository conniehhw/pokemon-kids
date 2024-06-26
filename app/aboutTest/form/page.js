// import styles from "../../pokedex1/pokedex1.module.css";

// const FormPage = () => {
//   return (
//     <>
//       <p className={styles.slug}>Form Page - nested in About</p>
//     </>
//   );
// };

// export default FormPage;

"use client";

import styles from "../../pokedex1/pokedex1.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import Pokemons from "../../components/Pokemons";
import SearchPokemons from "../../components/SearchPokemons";

export default function PokedexPage() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemons = async () => {
      const response = await fetch("/api/pokemons");
      const pokemons = await response.json();
      setPokemons(pokemons);
    };
    getPokemons(pokemons);
  }, []);

  console.log(pokemons);

  return (
    <>
      <p>Pokedex Page</p>

      <SearchPokemons getSearchResults={(results) => setPokemons(results)} />
      <Pokemons pokemons={pokemons} />
    </>
  );
}
