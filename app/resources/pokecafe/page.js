import React from "react";
import Badge from "react-bootstrap/Badge";
import styles from "../pokecafe/pokecafe.module.css";

function pokecafe() {
  return (
    <main className={styles.main}>
      <div className={styles.title}>
        pokecafe page
        <p>
          You can enjoy a Gengar's Confuse Ray Smoothie or Snorlax's Tummy
          Filling Nap Lunch Plate, surrounded by your favorite Pokémon, at one
          of two official Pokemon Cafes.
        </p>
        <p>
          <Badge bg="info">Info Coming Soon!</Badge>
        </p>
      </div>
    </main>
  );
}

export default pokecafe;
