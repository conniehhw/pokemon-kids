"use client";

// Home page for Pokedex - renders api response results for all Pokemon data limit 20

import { useGlobalContext } from "../api/global";

import { useState } from "react";
import Router from "next/router";
import { useRouter } from "next/navigation";

import styles from "./pokedex1.module.css";
import Image from "next/image";

export default function PokedexHome() {
  const {
    allPokemonData,
    searchResults,
    next,
    getPokemon,
    loading,
    realTimeSearch,
  } = useGlobalContext(); // realTimeSearch

  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
    realTimeSearch(search);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    realTimeSearch(search);
  };

  const displaySearchResults = () => {
    return searchResults.map((pokemon) => {
      return (
        <div
          key={pokemon.id}
          // onClick={() => {
          //   Router.push(`/pokemon?/${pokemon}`); // how to route so we get all pokemon data
          // }}
        >
          {" "}
          <p>{pokemon.url}</p>
          <p>{pokemon.name}</p>
        </div>
      );
    });
  };

  const router = useRouter();
  //   const g = useGlobalContext();
  //   console.log(g);
  // console.log(allPokemonData);

  return (
    <>
      <main className={styles.body}>
        <div className={styles.top}>
          <form action="" className={styles.searchForm} onSubmit={handleSearch}>
            <div className={styles.inputControl}>
              <input
                type="text"
                value={search}
                onChange={handleChange}
                placeholder="Search for a Pokemon... "
              />
              <button className={styles.submitBtn} type="submit">
                Search
              </button>
            </div>
          </form>
        </div>

        {search && searchResults.length > 0 && (
          <div className="searchResults">{displaySearchResults()}</div>
        )}

        <div className={styles.all_pokemon}>
          {allPokemonData ? (
            allPokemonData.map((pokemon) => {
              return (
                <div
                  key={pokemon.id}
                  className={styles.card}
                  onClick={() => {
                    router.push(`/pokedex1/slug/${pokemon.name}`);
                    // router.push(`/pokemon?/${pokemon}`);
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
                      // layout="responsive"
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

        <div className={styles.next}>
          {allPokemonData.length > 0 && (
            <button className="next-btn" onClick={next}>
              Load More &darr;
            </button>
          )}
        </div>
      </main>
    </>
  );
}
