import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../PokedexHome/pokedex.module.css";

export function PokemonCard({ name, id, sprites, types }) {
  // const [allPokemons, setAllPokemons] = useState([]);
  // async function Test() {

  return (
    <div className={styles.card}>
      <Link href={name} key={name + "Card"}>
        {/* <Link
          href={{
            pathname: "/pokemonName",
            // query: { name: "test" },
            key: { name: "Card" },
          }}
        > */}
        <div className={styles.card_image}>
          {/* <h4>Height: {height}</h4>
        <h4>Weight: {weight}</h4> */}

          <Image
            className={styles.img}
            src={sprites}
            height={250}
            width={250}
            alt="image"
          />
        </div>

        <div className={styles.card_text}>
          <h6># {id}</h6>
          <h3>{name.charAt(0).toUpperCase() + name.slice(1)}</h3>
          <div>
            <button className={styles.pill}>Type{types}</button>
          </div>

          {/* {pokemonStats.name.charAt(0).toUpperCase() +
              pokemonStats.name.slice(1)} */}

          {/* <h4>{pokemonStats.sprites.other.home.front_default}</h4> */}
        </div>
      </Link>
    </div>
  );
}
