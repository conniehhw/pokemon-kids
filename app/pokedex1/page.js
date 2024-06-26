"use client";

// Home page for Pokedex - renders api response results for all Pokemon data limit 20

import { useGlobalContext } from "../api/global";

import Router from "next/router";
import { useRouter } from "next/navigation";
import styles from "./pokedex1.module.css";
import Image from "next/image";

export default function PokedexHome() {
  const { allPokemonData } = useGlobalContext();
  const router = useRouter();
  //   const g = useGlobalContext();
  //   console.log(g);
  // console.log(allPokemonData);

  return (
    <>
      <main className={styles.body}>
        <div className={styles.all_pokemon}>
          {allPokemonData ? (
            allPokemonData.map((pokemon) => {
              return (
                <div
                  key={pokemon.id}
                  className={styles.card}
                  onClick={() => {
                    // router.push(`/pokedex1/slug/${pokemon.name}`);
                    router.push(`/pokeName/${pokemon.name}`);
                  }}
                >
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
