import React from "react";
import Badge from "react-bootstrap/Badge";
import styles from "../pokecafe/pokecafe.module.css";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "next/image";

function pokecafe() {
  return (
    <main className={styles.main}>
      {/* <div className={styles.title}>
        pokecafe page
        <p>
          You can enjoy a Gengar's Confuse Ray Smoothie or Snorlax's Tummy
          Filling Nap Lunch Plate, surrounded by your favorite Pokémon, at one
          of two official Pokemon Cafes.
        </p>
        <p>
          <Badge bg="info">Info Coming Soon!</Badge>
        </p>
      </div> */}
      <div className={styles.wrapper}>
        <div>One</div>
        <div>Two</div>
        <div>Three</div>
        <div>Four</div>
        <div>Five</div>
      </div>
    </main>
  );
}

export default pokecafe;
