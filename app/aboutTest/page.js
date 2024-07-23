"use client";

import styles from "../pokedex1/pokedex1.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import Pokemons from "../components/Pokemons";
import SearchPokemons from "../components/SearchForm";

// const AboutPage = () => {
//   return (
//     <>
//       <p className={styles.slug}>About Page</p>
//     </>
//   );
// };

// export default AboutPage;

// const res = await fetch("https://api.github.com/repos/vercel/next.js");
// const res = await fetch(
//   "http://worldtimeapi.org/api/timezone/America/Chicago"
// );
// const res = await fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur");
// const data = await res.json();
// const data = await res.json();
// const data = await res.json();

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

      {/* <h3 className={styles.slug}>Home</h3>
      <h5>Pokemon Name: {data.name}</h5>
      <h6>ID: {data.id}</h6>
      <Image
        className={styles.img}
        src={data.sprites.other.home.front_shiny}
        alt="pokmeon image"
        height={250}
        width={250}
        //   layout="responsive"
      />
      <h6>Type: {data.types[0].type.name}</h6> */}
    </>
  );
}

{
  /* <h1 className={styles.slug}>{data.full_name}</h1> */
}
{
  /* <h1 className={styles.slug}>Date & Time: {data.datetime}</h1>
      <h1>Day of the week: {data.day_of_week}</h1>
      <h1>Time zone: {data.timezone}</h1>
      <h2>Day of the year: {data.day_of_year}</h2>
      <br></br> */
}
{
  /* <h3 className={styles.slug}>Home</h3>
      <h5>Pokemon Name: {data.name}</h5>
      <h6>ID: {data.id}</h6> */
}
{
  /* <Image
        className={styles.img}
        src={data.sprites.other.home.front_shiny}
        alt="pokmeon image"
        height={250}
        width={250}
        //   layout="responsive"
      /> */
}

{
  /* <h6>Type: {data.types[0].type.name}</h6> */
}
{
  /* <h2>Day of the year: {data.day_of_year}</h2> */
}
