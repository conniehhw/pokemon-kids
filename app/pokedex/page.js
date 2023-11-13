"use client";

import React from "react";
import axios from "axios";
import styles from "./pokedex.module.css";
import Card from "../components/Card";
import GetPokedex from "./GetPokedex";

import { useState, useEffect } from "react";

const Pokedex = () => {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon/?offset=18&limit=18"
  );
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [pokeDex, setPokeDex] = useState();

  const pokeFun = async () => {
    setLoading(true);
    const res = await axios.get(url);
    console.log(res.data);
    // console.log(res.data.results);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getPokemon(res.data.results);
    setLoading(false);
    console.log(pokeData); // check the content of pokeData in console
  };

  const getPokemon = async (res) => {
    res.map(async (item) => {
      // console.log(item.url);
      // console.log(item.name);
      const result = await axios.get(item.url);
      // console.log(result);
      // console.log(result.data);
      // store all this objects in one array, so we call the setPokeData function inside this function. We create a new array, first
      // we store all the elements of existing array and then we add the new item in the array [result.data] and return state

      setPokeData((state) => {
        state = [...state, result.data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));
        return state;
        // basically this will work like a push function in array
        // use sort to place in order, if a.id is > b.id, then return 1, else we return -1
      });
    });
  };

  useEffect(() => {
    pokeFun();
  }, [url]);

  // always execute, pass empty array so only loads once, if pass any item inside the url, this effect runs and
  // pass props pokeData and loading, to check if it is true or flase

  return (
    <main className={styles.main}>
      <div className={styles.pokecontainer}>
        <div className={styles.leftcontent}>
          <Card
            pokemon={pokeData}
            loading={loading}
            infoPokemon={(poke) => setPokeDex(poke)}
          />

          <div className={styles.btngroup}>
            {prevUrl && (
              <button
                className={styles.button}
                onClick={() => {
                  setPokeData([]);
                  setUrl(prevUrl);
                }}
              >
                Previous
              </button>
            )}

            {nextUrl && (
              <button
                onClick={() => {
                  setPokeData([]);
                  setUrl(nextUrl);
                }}
              >
                Next
              </button>
            )}
          </div>
        </div>

        <div className={styles.rightcontent}>
          <GetPokedex data={pokeDex} />
        </div>
      </div>
    </main>
  );
};
export default Pokedex;
