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
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
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

// import styles from "../page.module.css";
// import { useEffect, useState } from "react";

// const Home = () => {
//   // const [userInfo, setUserInfo] = useState({});
//   const [userInfo, setUserInfo] = useState([]);
//   // const [pokeInfo, setPokeInfo] = useState([]);

//   useEffect(() => {
//     const getData = async () => {
//       const query = await fetch("https://jsonplaceholder.typicode.com/users");
//       // const query2 = await fetch("https://pokeapi.co/api/v2/pokemon");
//       const response = await query.json();
//       // const response2 = await query2.json();
//       console.log("response from api", response);
//       // console.log("response from api", response2);
//       setUserInfo(response);
//       // setPokeInfo(response);
//     };

//     getData();
//   }, []);

// useEffect(() => {
//   const getData2 = async () => {
//     const query2 = await fetch("https://pokeapi.co/api/v2/pokemon");
//     const response2 = await query2.json();
//     console.log("response from api", response2);
//     setPokeInfo(response2);
//   };

//   getData2();
// }, []);

// return (
//   <main className={styles.main}>
//     <h3>Howdy</h3>
//     {userInfo &&
//       userInfo.length &&
//       userInfo.map((user, any) => {
//         return (
//           <div>
//             <h5>{user.name}</h5>
//             <p>username: {user.username}</p>
//             <p>
//               address: {user.address.suite}, {user.address.street}
//             </p>
//           </div>
//         );
//       })}
//       <h3>Pokedex</h3>
//       {pokeInfo &&
//         pokeInfo.length &&
//         pokeInfo.map((pokeInfo) => {
//           return <div>{pokeInfo.name}</div>;
//         })} */}
//     </main>
//   );
// };

// return (
//   <main className={styles.main}>
//     <h3>Howdy</h3>
//     {userInfo &&
//       userInfo.length &&
//       userInfo.map((user, any) => {
//         return (
//           <div>
//             <h5>{user.name}</h5>
//             <p>username: {user.username}</p>
//             <p>
//               address: {user.address.suite}, {user.address.street}
//             </p>
//           </div>
//         );
//       })}
//     <h3>Pokedex</h3>
//     {pokeInfo &&
//       pokeInfo.length &&
//       pokeInfo.map((pokemon, any) => {
//         return <div>{pokemon.name}</div>;
//       })}
//   </main>
// );

// export default Home;

// async function getData() {
//   const res = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

// export default async function Page() {
//   const data = await getData();

//   return (
//     <main className={styles.main}>
//       <h1>Pokedex Page</h1>
//     </main>
//   );
// }

//   return (
//     <main className={styles.main}>
//       <h1>Pokedex Page</h1>
//     </main>
//   );
