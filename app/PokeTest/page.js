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
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
      const data = await response.json();
      setData(data);
    };
    fetchData(data);
  }, []);

  console.log(data);

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
        <input
          className={styles.font}
          type="text"
          id="pokemonName"
          placeholder="Enter Pokemon Name"
        />
        <button onClick="">Fetch Pokemon</button>
        <br></br>

        <div>Name: {data.name}</div>
        <div>Id: {data.id}</div>
        <div>Weight: {data.weight}</div>

        <img
          src={data.sprites.other.home.front_shiny}
          alt="pokemon sprite"
          height={250}
          width={250}

          // style={{ display: "none" }}
        />
      </div>
    </>
  );
}

export default PokeTest;
