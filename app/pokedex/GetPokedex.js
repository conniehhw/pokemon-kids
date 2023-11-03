// Can use State hook to setState vs. manual card

import React from "react";
import styles from "../pokedex/pokedex.module.css";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const GetPokedex = ({ data }) => {
  console.log(data);
  return (
    <>
      {!data ? (
        ""
      ) : (
        <>
          {/* <Row className={styles.row}>
            <Col className={styles.col}></Col>
            <Col className={styles.col2}>
              <h2>{data.name}</h2>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
                // src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`}
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
            </Col>
            <Col className={styles.col}></Col>
          </Row> */}
          <h1>{data.name}</h1>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
            // src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`}
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
