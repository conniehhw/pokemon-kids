import { getPokemon } from "../utils/PokemonHomeAPI";

import { PokemonImage } from "../components/PokemonImage";
// import styles from "../page.module.css";
import styles from "./pokemonName.module.css";
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

  return (
    <>
      <main className={styles.main}>
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

        {/* <div className={styles.pokeCardContainer}> */}

        <div className={styles.PokemonBg}>
          <div>
            <h1 className="text-4xl">
              {pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}&nbsp;
              #{pokemonObject.id}
            </h1>
            <div
              style={{ position: "relative", width: "300px", height: "300px" }}
            >
              <PokemonImage
                // image={pokemonObject.sprites.other["official-artwork"].front_default}
                // image={pokemonObject.sprites.other.dream_world.front_default}
                image={pokemonObject.sprites.other.home.front_default}
                name={pokemonName}
              />
              {/* <Image
        src={pokemonObject.sprites.other["official-artwork"].front_default}
        width="200"
        height="200"
        alt={"Picture of" + pokemonName}
      /> */}
            </div>
            {/* <h3>Id: {pokemonObject.id}</h3> */}

            <div>
              {/* <div className="flex-col"> */}
              <h5>Types:</h5>
              {pokemonObject.types.map((typeObject) => {
                const typeName = typeObject.type.name;
                // const statValue = statObject.base_stat;
                return (
                  <div
                    // className="flex items-stretch"
                    // style={{ width: "500px", display: "inline" }}
                    key={typeName}
                    className="flex items p-3 w-2/4"
                  >
                    {typeName}
                  </div>
                );
              })}
            </div>

            {/* <div className={styles.stats}>
              <div className={styles.card}>Weight</div>
              <div className={styles.card}>{pokemonObject.weight}</div>
              <div className={styles.card}>Height</div>
              <div className={styles.card}>{pokemonObject.weight}</div>
            </div> */}

            <h3>Weight:{pokemonObject.weight}</h3>
            <p></p>
            <h3>Height: {pokemonObject.height}</h3>

            <div className="flex-col">
              <p>Abilities: </p>
              {pokemonObject.abilities.map((abilityObject) => {
                const abilityName = abilityObject.ability.name;
                // const statValue = statObject.base_stat;
                return (
                  <div
                    className="flex items-stretch"
                    style={{ width: "500px" }}
                  >
                    <p key={abilityName}>{abilityName} </p>
                  </div>
                );
              })}
            </div>

            <div className="flex-col">
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
                    </h3>
                    {/* <Progress className="w-2/4 m-auto" value={statValue} />
              // npx shadn-uiplatest add progress */}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div></div>
      </main>
    </>
  );
}
