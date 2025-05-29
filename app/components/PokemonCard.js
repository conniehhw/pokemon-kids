import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../PokedexHome/pokedex.module.css";
import { propTypes } from "react-bootstrap/esm/Image";

export function PokemonCard({ pokemon, name, id, sprites, type }) {
  // const [allPokemons, setAllPokemons] = useState([]);
  // async function Test() {

  console.log(pokemon);

  const numericId = ("00" + id).slice(-3);

  // const test = `${typeName}`;
  // let pokeColor = "";

  // switch (test) {
  //   case "grass":
  //     pokeColor = "#7AC74C";
  //     break;

  //   case "poison":
  //     pokeColor = "#A33EA1";
  //     break;

  //   case "fire":
  //     pokeColor = "#EE8130";
  //     break;

  //   case "water":
  //     pokeColor = "#6390F0";
  //     break;

  //   default:
  //     pokeColor = "gray";
  // }

  // const pokeType = {type.type.name };
  // const type1 = `${type}`;

  // const pokeType = `${type}`;

  // let pokeType = { pokemonObject };
  // let pokeColor = "";

  // let pokeColor = "";

  // switch (type1) {
  //   case "grass":
  //     pokeColor = "#7AC74C";
  //     break;

  //   case "fire":
  //     pokeColor = "#EE8130";
  //     break;

  //   case "water":
  //     pokeColor = "#6390F0";
  //     break;

  //   case "bug":
  //     pokeColor = "#A6B91A";
  //     break;

  //   default:
  //     pokeColor = "gray";
  // }

  // console.log(pokeColor); // log color associated with pokemon type

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
      </Link>

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
      </div>

      <div className={styles.type}>
        {pokemon.types.map((type) => {
          const typeName = type.type.name;
          console.log(typeName);
          // console.log(`${type}`);

          const test = typeName;
          let colour;
          if (test === "grass") {
            colour = "#7AC74C";
          } else if (test === "fire") {
            colour = "#EE8130";
          } else if (test === "poison") {
            colour = "#A33EA1";
          } else if (test === "normal") {
            colour = "#A8A77A";
          } else if (test === "electric") {
            colour = "#F7D02C";
          } else if (test === "dragon") {
            colour = "#6F35FC";
          } else if (test === "ice") {
            colour = "#96D9D6";
          } else if (test === "fighting") {
            colour = "C22E28";
          } else if (test === "ground") {
            colour = "#E2BF65";
          } else if (test === "psychic") {
            colour = "#F95587";
          } else if (test === "bug") {
            colour = "#A6B91A";
          } else if (test === "flying") {
            colour = "#A98FF3";
          } else if (test === "rock") {
            colour = "#B6A136";
          } else if (test === "water") {
            colour = "#6390F0";
          } else if (test === "ghost") {
            colour = "#735797";
          } else if (test === "dark") {
            colour = "#705746";
          } else if (test === "steel") {
            colour = "#B7B7CE";
          } else if (test === "fairy") {
            colour = "#D685AD";
          } else {
            colour = "black";
          }

          return (
            <>
              <button
                style={{
                  // background: pokeColor,
                  backgroundColor: colour,
                  color: "white",
                  height: "30px",
                }}
                className={styles.pill}
              >
                {/* {type.type.name} */}
                {typeName}
              </button>
            </>
          );
        })}
      </div>

      {/* {pokemonStats.name.charAt(0).toUpperCase() +
              pokemonStats.name.slice(1)} */}

      {/* <h4>{pokemonStats.sprites.other.home.front_default}</h4> */}
      {/* </Link> */}
    </div>
  );
}
