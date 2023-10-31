// Can use State hook to setState vs. manual card

import React from "react";

const GetPokedex = () => {
  return (
    <>
      <p>Pokemon Name</p>
      {/* <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
        height={auto}
        width={auto}
        alt="Placeholder image"
      /> */}
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png"
        alt="pokemon card"
      />
      <div className="abilities">
        <div className="group">
          <p>Pokemon Ability1</p>
        </div>
        <div className="group">
          <p>Pokemon Ability2</p>
        </div>
      </div>
      <div className="base-stat">
        <p>Pokemon Base Stat 1</p>
        <p>Pokemon Base Stat 1</p>
        <p>Pokemon Base Stat 1</p>
      </div>
      <div></div>
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
