import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../pokedex1/pokedex1.module.css";

export function PokemonCard({ name, id, sprites }) {
  // const [allPokemons, setAllPokemons] = useState([]);
  // async function Test() {

  return (
    <div
      // style={{
      //   color: "blue",
      //   border: "1px solid #ccc",
      //   width: "200px",
      //   margin: "20px",
      // }}
      className={styles.card}
    >
      <Link href={name} key={name + "Card"}>
        {/* <Link
          href={{
            pathname: "/pokemonName",
            // query: { name: "test" },
            key: { name: "Card" },
          }}
        > */}

        <h2>Id: {id}</h2>

        <h4>{name.charAt(0).toUpperCase() + name.slice(1)}</h4>
        {/* <h4>Height: {height}</h4>
        <h4>Weight: {weight}</h4> */}

        <Image src={sprites} height={200} width={200} alt="image" />

        {/* {pokemonStats.name.charAt(0).toUpperCase() +
              pokemonStats.name.slice(1)} */}

        {/* <h4>{pokemonStats.sprites.other.home.front_default}</h4> */}
      </Link>
    </div>
  );
}
