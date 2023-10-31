// Can use State hook to setState vs. manual card

import React from "react";
import styles from "../pokedex/pokedex.module.css";

const GetPokedex = ({ data }) => {
  console.log(data);
  return (
    <>
      {!data ? (
        ""
      ) : (
        <>
          <p>{data.name}</p>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
            alt="pokemon card"
          />
          <div className={styles.abilities}>
            {data.abilities.map((poke) => {
              return (
                <>
                  <div className={styles.group}>
                    <p>{poke.ability.name}</p>
                  </div>
                </>
              );
            })}
          </div>
          <div className={styles.basestat}>
            {data.stats.map((poke) => {
              return (
                <>
                  <p>
                    {poke.stat.name}: {poke.base_stat}
                  </p>
                </>
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default GetPokedex;

// async function getData() {
//   const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

// export default async function Page() {
//   const data = await getData();

//   return <main></main>;
// }
