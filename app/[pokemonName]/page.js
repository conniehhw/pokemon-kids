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

  // pokemon card bg colors
  // const pkColors = ["#f8d5a3", "#f5b7b1", "#c39bd3", "aed6f1", "a3e4d7"];
  // const randomColor = pkColors[Math.floor(Math.random() * pkColors.length)];

  // console.log(randomColor);

  //if .. .else test
  const time = new Date().getHours();
  let greeting;
  if (time < 10) {
    greeting = "good morning";
  } else if (time < 20) {
    greeting = "good day";
  } else {
    greeting = "Good evening";
  }

  const height = `${pokemonObject.height}`;
  let color;
  if (height < 10) {
    color = "short";
  } else if (height > 10) {
    color = "tall";
  } else {
    color = "medium";
  }

  // const type = `${pokemonName}`;
  // let colour;
  // if (type === "charmander") {
  //   colour = "red";
  // } else if (type === "bulbasaur") {
  //   colour = "green";
  // } else {
  //   colour = "black";
  // }

  const type = `${pokemonObject.types[0].type.name}`;
  let colour;
  if (type === "grass") {
    colour = "#00FF00";
  } else if (type === "fire") {
    colour = "#FF0000";
  } else if (type === "poison") {
    colour = "#A020F0";
  } else {
    colour = "black";
  }

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
                <h6># {pokemonObject.id}</h6>
                <h3 className="text-4xl">
                  {pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}
                </h3>

                <div className={styles.card_stats}>
                  <ul className={styles.alignMe}>
                    <li>
                      <b>Types</b>
                      {pokemonObject.types.map((typeObject) => {
                        const typeName = typeObject.type.name;

                        return <>{typeName}-&nbsp;</>;
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
                            {abilityName}-&nbsp;
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
                  <button
                    style={{
                      background: colour,
                      color: "white",
                    }}
                    className={styles.pill}
                  >
                    {pokemonObject.types[0].type.name}
                  </button>

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
            <Link href="/PokedexHome">Explore More Pokemon</Link>
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
