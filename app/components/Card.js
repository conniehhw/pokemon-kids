import React from "react";
import styles from "../pokedex/pokedex.module.css";
import Image from "next/image";

// check data is coming from card component
// check if loading is true/false, if true - data is not fetched yet.
const Card = ({ pokemon, loading }) => {
  console.log(pokemon);
  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        pokemon.map((item) => {
          return (
            <>
              <div className={styles.card}>
                <p>{item.id}</p>
                <Image
                  // src="/images/pokemon-logo.png"
                  src={item.sprites.front_default}
                  height={75}
                  width={75}
                  alt=""
                />
                <p>Charmander</p>
              </div>
            </>
          );
        })
      )}

      <div className={styles.card}>
        <p> 1</p>
        <Image
          src="/images/pokemon-logo.png"
          // src={item.sprites.front_default}
          height={75}
          width={175}
          alt="Placeholder image"
        />
        <p>Charmander</p>
      </div>
    </>
  );
};

export default Card;
