"use client";

import { useGlobalContext } from "../../api/global";
import styles from "./pokedex1.module.css";
import Image from "next/image";

export default function PokedexHome() {
  const { allPokemonData } = useGlobalContext();
  //   const g = useGlobalContext();
  //   console.log(g);
  //   console.log(allPokemonData);

  return (
    <>
      <main className={styles.body}>
        <div className={styles.all_pokemon}>
          {allPokemonData ? (
            allPokemonData.map((pokemon) => {
              return (
                <div key={pokemon.id} className={styles.card}>
                  <div className={styles.card_image}>
                    {/* <img
                      className={styles.img}
                      src={pokemon.sprites.other.home.front_shiny}
                      alt={pokemon.name}
                    /> */}
                    <Image
                      className={styles.img}
                      src={pokemon.sprites.other.home.front_shiny}
                      alt={pokemon.name}
                      height={250}
                      width={250}
                      //   layout="responsive"
                    />
                  </div>
                  <div className={styles.card_body}>
                    <h3>{pokemon.name}</h3>
                    <p>More Details &nbsp; &rarr;</p>
                  </div>
                </div>
              );
            })
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
      </main>
    </>
  );
}
