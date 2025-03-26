import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../PokedexHome/pokedex.module.css";
import { propTypes } from "react-bootstrap/esm/Image";

export function PokemonCard({ pokemon, name, id, sprites, type }) {
  // const [allPokemons, setAllPokemons] = useState([]);
  // async function Test() {

  const numericId = ("00" + id).slice(-3);
  // const pokeType = { type };

  const pokeType = `${type}`;

  // let pokeType = { pokemonObject };
  let pokeColor = "";

  switch (pokeType) {
    case "grass":
      pokeColor = "#7AC74C";
      break;

    case "fire":
      pokeColor = "#EE8130";
      break;

    case "water":
      pokeColor = "#6390F0";
      break;

    case "bug":
      pokeColor = "#A6B91A";
      break;

    default:
      pokeColor = "gray";
  }

  console.log(pokeColor);

  // const type1 = `${type}`;
  // let colour;
  // if (type1 === "grass") {
  //   colour = "#7AC74C";
  // } else if (type1 === "fire") {
  //   colour = "#EE8130";
  // } else if (type1 === "poison") {
  //   colour = "#A33EA1";
  // } else {
  //   colour = "black";
  // }
  console.log(name);

  console.log(type);
  // console.log(pokeType);
  // console.log({ type });

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
            ß
            width={250}
            alt="image"
          />
        </div>

        <div className={styles.card_text}>
          {/* {allPokemons.map((pokemon) => {
            return <><div>Hello</div></>;
          })} */}

          {/* {allPokemons.map((pokemon) => {
            console.log(pokemon.id);
            console.log(pokemon.name);
            return pokemon.types.map((type) => {
              console.log(type.type.name); */}

          {/* return (
                <>
                  <button
                    style={{
                      background: pokeColor,
                      color: "white",
                      height: "30px",
                    }}
                    className={styles.pill}
                  >
                    {type.type.name}
                  </button>
                </>
              );
            });
          })} */}
          <h6>#{numericId}</h6>
          <h3>{name.charAt(0).toUpperCase() + name.slice(1)}</h3>

          {pokemon.types.map((type) => {
            return (
              <>
                <button
                  style={{
                    background: pokeColor,
                    color: "white",
                    height: "30px",
                  }}
                  className={styles.pill}
                >
                  {type.type.name}
                </button>
              </>
            );
          })}
        </div>

        {/* {pokemonStats.name.charAt(0).toUpperCase() +
              pokemonStats.name.slice(1)} */}

        {/* <h4>{pokemonStats.sprites.other.home.front_default}</h4> */}
      </Link>
    </div>
  );
}
