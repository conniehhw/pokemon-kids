"use client";
import styles from "../PokeTest/PokeTest.module.css";
import { useState, useEffect } from "react";

// import React, { useState, useEffect } from "react";

// function PokeTest() {
// const url = "https://pokeapi.co/api/v2/pokemon/jigglypuff";
// const [data, setData] = useState([]);

// const fetchInfo = () => {
//   return fetch(url)
//     .then((res) => res.json())
//     .then((d) => setData(d));
// };

//   fetch("https://pokeapi.co/api/v2/pokemon/ditto") // pass the url into the fetch function as a string ""
//     // .then((response) => console.log(response)) // (response) = response object, arrow do this, console - body contains data, need to convert to readable method, ie. json method
//     .then((response) => response.json()) // convert response to json
//     // .then(data => console.log(data)) // response of all data in json format
//     .then((data) => console.log(data.name)) // access just the name example, or data.weight or data.id, etc
//     .catch((error) => console.error(error));
// }

// //fetch method
// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//   .then(response => {
//     if(!response.ok){
//       throw new Error("Could not fetch resource"); //if response object is not ok,
//     }
//     return response.json();
//   })
//   .then(data => console.log(data))
//   .catch(error => console.error(error));

function PokeTest() {
  // fetchData();

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
      const data = await response.json();
      setData(data);
    };
    fetchData(data);
  }, []);

  console.log(data);

  // pokemon card bg colors
  const pkColors = ["#f8d5a3", "#f5b7b1", "#c39bd3", "aed6f1", "a3e4d7"];

  const randomColor = pkColors[Math.floor(Math.random() * pkColors.length)];

  console.log(randomColor);

  // //async await method
  // async function fetchData() {
  //   try {
  //     // const pokemonName = document
  //     //   .getElementById("pokemonName")
  //     //   .value.toLowerCase();

  //     const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");

  //     // const response = await fetch(
  //     //   `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
  //     // );

  //     if (!response.ok) {
  //       throw new Error("Could not fetch resource"); // if response is okay, we will create a const
  //     }

  //     const data = await response.json(); // this also returns a promise, why we are using await
  //     console.log(data.id);
  //     return data;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  return (
    <>
      <div style={{ marginTop: "84pt" }}>
        {/* <input
          className={styles.font}
          type="text"
          id="pokemonName"
          placeholder="Enter Pokemon Name"
        />
        <button onClick="">Fetch Pokemon</button>
        <br></br> */}
      </div>
      <div
        className={styles.PokemonBg}
        style={{
          background: randomColor,
        }}
      >
        <div className={styles.PokemonImage}>
          <img
            src={data?.sprites?.other?.home.front_default}
            alt="pokemon sprite"
            height={250}
            width={250}
          />
        </div>
        <div className={styles.PokemonBody}>
          <div className={styles.card_body}>
            <h3>{data?.name}</h3>
          </div>

          <div className={styles.PokemonInfo}>
            {/* <div className={styles.PokemonInfoItem}>
              <h6>Name: {data?.name}</h6>
            </div> */}
            <div className={styles.PokemonInfoItem}>
              <p className={styles.heading}>Id: </p>
              <p>{data?.id}, </p>
            </div>

            <div className={styles.PokemonInfoItem}>
              <p className={styles.heading}>Type: </p>
              {data?.types?.map((type) => {
                return <p key={type.type.name}>{type.type.name},</p>;
              })}
            </div>

            <div className={styles.PokemonInfoItem}>
              <p className={styles.heading}>Height: </p>
              <p>{data?.height} </p>
              {/* <p>{data?.height}, </p> */}
            </div>

            <div className={styles.PokemonInfoItem}>
              <p className={styles.heading}>Abilities: </p>
              {data?.abilities?.map((ability) => {
                return (
                  <p key={ability.ability.name}>{ability.ability.name},</p>
                );
              })}
            </div>

            {/* <div className={styles.PokemonInfoItem}>
              <p className={styles.heading}>Stats: </p>
              {data?.stats?.map((stat) => {
                return <p key={stat.stat.name}>{stat.stat.name}, </p>;
              })}
            </div> */}
            <div className={styles.PokemonInfoItem}>
              <p className={styles.heading}>Moves: </p>
              {data?.moves?.slice(0, 4).map((move) => {
                return <p key={move.move.name}>{move.move.name}, </p>;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PokeTest;
