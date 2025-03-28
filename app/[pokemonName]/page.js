import { getPokemon } from "../utils/PokemonHomeAPI";
import { PokemonImage } from "../components/PokemonImage";
// import { PokemonCard } from "../components/PokemonCard";
import Image from "next/image";
// import styles from "../page.module.css";
import styles from "./pokemonName.module.css";
import Link from "next/link";
// import { Progress } from "@/components/ui/progress";

// localhost:3000/pikachu

// pokemonName

// pokemonName = "pikachu" -> show the Pikachu page

export default async function PokemonPage({ params }) {
  // object destructuring
  const { pokemonName } = params;
  // pikachu
  // get the API data for pikachu

  const pokemonObject = await getPokemon(pokemonName);

  console.log(pokemonObject);

  const numericId = ("00" + pokemonObject.id).slice(-3);
  // const pokeObj = [pokemonObject.types];

  // pokemon card bg colors
  // const pkColors = ["#f8d5a3", "#f5b7b1", "#c39bd3", "aed6f1", "a3e4d7"];
  // const randomColor = pkColors[Math.floor(Math.random() * pkColors.length)];

  // console.log(randomColor);

  //if .. .else test
  // const time = new Date().getHours();
  // let greeting;
  // if (time < 10) {
  //   greeting = "good morning";
  // } else if (time < 20) {
  //   greeting = "good day";
  // } else {
  //   greeting = "Good evening";
  // }

  // const height = `${pokemonObject.height}`;
  // let color;
  // if (height < 10) {
  //   color = "short";
  // } else if (height > 10) {
  //   color = "tall";
  // } else {
  //   color = "medium";
  // }

  // const type = `${pokemonName}`;
  // let colour;
  // if (type === "charmander") {
  //   colour = "red";
  // } else if (type === "bulbasaur") {
  //   colour = "green";
  // } else {
  //   colour = "black";
  // }

  // const type = `${pokemonObject.types[0].type.name}`;
  // const type = `${typeObject.type.name}`;

  // let colour;
  // if (type === "grass") {
  //   colour = "#7AC74C";
  // } else if (type === "fire") {
  //   colour = "#EE8130";
  // } else if (type === "poison") {
  //   colour = "#A33EA1";
  // } else {
  //   colour = "black";
  // }

  // const pokeType = `${pokemonObject.types[0].type.name}`
  const type = `${pokemonObject.types[0].type.name}`;

  // const type = `${pokemonObject.types}`;
  // let pokeType = { pokemonObject };
  let pokeColor = "";

  switch (type) {
    case "grass":
      pokeColor = "#7AC74C";
      break;

    case "poison":
      pokeColor = "#A33EA1";
      break;

    case "fire":
      pokeColor = "#EE8130";
      break;

    case "water":
      pokeColor = "#6390F0";
      break;

    default:
      pokeColor = "gray";
  }

  console.log(pokeColor);
  console.log(type);

  // let colours = {
  //   normal: "#A8A77A",
  //   fire: "#EE8130",
  //   water: "#6390F0",
  //   electric: "#F7D02C",
  //   grass: "#7AC74C",
  //   ice: "#96D9D6",
  //   fighting: "#C22E28",
  //   poison: "#A33EA1",
  //   ground: "#E2BF65",
  //   flying: "#A98FF3",
  //   psychic: "#F95587",
  //   bug: "#A6B91A",
  //   rock: "#B6A136",
  //   ghost: "#735797",
  //   dragon: "#6F35FC",
  //   dark: "#705746",
  //   steel: "#B7B7CE",
  //   fairy: "#D685AD",
  // };

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
                  // background: randomColor,
                }}
              >
                <PokemonImage
                  image={
                    pokemonObject.sprites.other["official-artwork"]
                      .front_default
                  }
                  name={pokemonName}
                />
                {/* <Image
                  src={
                    pokemonObject.sprites.other["official-artwork"]
                      .front_default
                  }
                  width="200"
                  height="200"
                  alt={"Picture of" + pokemonName}
                  className={styles.card_image}
                /> */}
              </div>

              <div className={styles.card_text}>
                <h6># {numericId}</h6>
                <h3 className="text-4xl">
                  {pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}
                </h3>

                {/* map types*/}
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
                        // const statValue = statObject.base_stat;
                        return (
                          <>
                            {/* // className="flex items-stretch"
                        // style={{ width: "500px" }}

                        key={abilityName} */}

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

                            {/* {abilityObject.ability.name} */}
                          </>
                        );
                      })}
                    </li>
                  </ul>
                  {/* <p>{greeting}</p>
                  <p>{color}</p> */}
                  {/* <p
                    style={{
                      // position: "relative",
                      width: "300px",
                      height: "300px",
                      background: colour,
                    }}
                  >
                    {pokemonObject.types[0].type.name}
                  </p> */}

                  {/* {pokemonObject.types.map((typeObject) => {
                    const typeName = typeObject.type.name;

                    return (
                      <>
                        <button
                          style={{
                            background: pokeColor,
                            color: "white",
                          }}
                          className={styles.pill}
                        >
                          {typeName}
                          {typeObject.type.name}
                        </button>
                      </>
                    );
                  })} */}
                  {/* <button
                    style={{
                      background: pokeColor,
                      height: "50px",
                    }}
                  ></button> */}

                  {/* <div className={styles.card_stats}>
                 
                    <h5>Types:</h5>
                
                    {pokemonObject.types.map((typeObject) => {
           
                      return <>{typeObject.type.name}</>;
                    })}
                    <h5>Weight:</h5>
                    {pokemonObject.weight}
                    <h5>Height:</h5> {pokemonObject.height}
        
                    <p>Abilities: </p>
                    {pokemonObject.abilities.map((abilityObject) => {
                      const abilityName = abilityObject.ability.name;
          
                      return (
                        <div
                          key={abilityName}
                        >
                          {abilityName}
                        </div>
                      );
                    })}
                  </div> */}
                </div>
              </div>
              {/* <button className={styles.submitBtn} type="submit">
                Explore More Pokemon
              </button> */}
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

{
  /* </div> */
}
{
  /* <div className="flex-col">
              <h3>Stats:</h3>
              {pokemonObject.stats.map((statObject) => {
                const statName = statObject.stat.name;
                const statValue = statObject.base_stat;
                return (
                  <div
                    className="flex items-stretch"
                    style={{ width: "500px" }}
                    key={statName}
                  >
                    <h3 className="p-3 w-2/4">
                      {statName}: {statValue}
                    </h3> */
}
{
  /* <Progress className="w-2/4 m-auto" value={statValue} />
              // npx shadn-uiplatest add progress */
}
{
  /* </div>
                );
              })}
            </div> */
}
