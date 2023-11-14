import React from "react";
import Badge from "react-bootstrap/Badge";
import styles from "../pokecenter/pokecenter.module.css";

function pokecenter() {
  return (
    <main className={styles.main}>
      <div className={styles.title}>
        pokecenter page
        <p>
          A Pokémon Center is an official Pokémon shop where players can get the
          latest infromation about everything game-related and also purchase
          Pokemon exclusive items.
        </p>
        <p>
          <Badge bg="Danger">Info Coming Soon!</Badge>
        </p>
      </div>
    </main>
  );
}

export default pokecenter;
