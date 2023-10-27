"use client";

import styles from "../page.module.css";
import { useEffect, useState } from "react";

// export default function Pokedex() {
//   return (
//     <main className={styles.main}>
//       <h1>Pokedex Page</h1>
//     </main>
//   );
// }

const Home = () => {
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const query = await fetch("https://jsonplaceholder.typicode.com/users");
      const response = await query.json();
      console.log("response from api", response);
      setUserInfo(response);
    };

    getData();
  }, []);

  //   return (
  //     <main className={styles.main}>
  //       <h1>Pokedex Page</h1>
  //     </main>
  //   );

  return (
    <main className={styles.main}>
      <h3>Howdy</h3>
      {userInfo &&
        userInfo.length &&
        userInfo.map((user, any) => {
          return (
            <div>
              <h5>{user.name}</h5>
              <p>{user.username}</p>
              <p>{user.phone}</p>
            </div>
          );
        })}
    </main>
  );
};

export default Home;

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
