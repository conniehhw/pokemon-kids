import React from "react";
import styles from "../pokemedia/pokemedia.module.css";
import Badge from "react-bootstrap/Badge";

function pokemedia() {
  return (
    <main className={styles.main}>
      <div className={styles.title}>
        pokemedia page
        <p>
          Since the start of the original Pokemon Trading Card Game, it has
          expanded to multiple video games, 25 seasons in the television anime,
          23 animated movies on top of live events globally.
        </p>
        <p>
          <Badge bg="warning">Info Coming Soon!</Badge>
        </p>
      </div>
    </main>
  );
}

export default pokemedia;
