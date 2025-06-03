import { getPokemon } from "../utils/PokemonHomeAPI";
// import Image from "next/image";
// import PokemonCard from "../components/PokemonCard";
import { PokemonImage } from "../components/PokemonImage";
import styles from "./pokemonName.module.css";
import Link from "next/link";

// Page Function: pokemon card (slug details) when clicked from Pokedex Home Page

export default async function PokemonPage({ params }) {
  // pokemonName = "pikachu" -> show the Pikachu page, object destructuring, get the API data for pikachu
  const { pokemonName } = params;
  const pokemonObject = await getPokemon(pokemonName); //API call
  console.log(pokemonObject);

  const numericId = ("00" + pokemonObject.id).slice(-3);

  return (
    <>
      <main className={styles.main}>
        <div className={styles.body}>
          <div>
            <ul className={styles.breadcrumb}>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/PokedexHome">Pokedex</a>
              </li>
              <li>{pokemonName}</li>
            </ul>
          </div>

          <div className={styles.card_container}>
            <div className={styles.card}>
              <div
                className={styles.img}
                style={{
                  position: "relative",
                  width: "300px",
                  height: "300px",
                }}
              >
                <PokemonImage
                  image={
                    pokemonObject.sprites.other["official-artwork"]
                      .front_default
                  }
                  name={pokemonName}
                />
              </div>

              <div className={styles.card_text}>
                <h6># {numericId}</h6>
                <h3 className="text-4xl">
                  {pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}
                </h3>

                {/* map types switch colour of 'Type'button/pill*/}
                <div className={styles.card_stats}>
                  <ul className={styles.alignMe}>
                    <li>
                      <b>Type</b>
                      {pokemonObject.types.map((typeObject) => {
                        const typeName = typeObject.type.name;

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
                                backgroundColor: colour,
                                color: "white",
                              }}
                              className={styles.pill}
                            >
                              {typeName}
                            </button>
                          </>
                        );
                      })}
                    </li>
                    <li>
                      <b>Weight</b>
                      {pokemonObject.weight}
                    </li>
                    <li>
                      <b>Height</b>
                      {pokemonObject.height}
                    </li>

                    <li>
                      <b>Abilities</b>

                      {pokemonObject.abilities.map((abilityObject) => {
                        const abilityName = abilityObject.ability.name;

                        return (
                          <>
                            <button
                              style={
                                {
                                  // backgroundColor: "white",
                                  // border: "none",
                                  // color: "white",
                                }
                              }
                              className={styles.invPill}
                            >
                              {abilityName}
                            </button>
                          </>
                        );
                      })}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <button className={styles.submitBtn} type="submit">
            <Link
              href="/PokedexHome"
              style={{
                color: "white",
              }}
            >
              Explore More Pokemon
            </Link>
          </button>
        </div>
      </main>
    </>
  );
}
