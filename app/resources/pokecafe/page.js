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
      <div>
        <ul className={styles.breadcrumb}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/resources">Resources</a>
          </li>
          <li>Pokemon Cafe</li>
        </ul>
      </div>
      <div className={styles.grid}>
        <div>
          <Image
            className={styles.img}
            src="/images/pokemon-cafe-banner.png"
            layout="responsive"
            height={140}
            width={350}
            alt="pokemon cafe sign banner"
          />
        </div>
      </div>
      {/* <div>Photo by Thimo Pedersen on Unsplash</div> */}

      <div className={styles.content}>
        <div>
          <div>
            <h2>Pokemon Cafe</h2>
            <h4>Enjoy a meal surrounded by your favourite Pokemon Friends</h4>
          </div>
        </div>
      </div>

      {/* <div className={styles.section}>
        <div>Cafes in Tokyo & Osaka</div>
      </div> */}
      <div className={styles.sectioncopy}>
        <p>
          There are only two official Pokemon Cafes in the world! The first
          opened in 2018 and is located in Tokyo, Japan. The second location is
          in Osaka. If you are lucky, you may sometimes encounter a pop-up
          Pokemon Cafes.
        </p>
        <Image
          className={styles.img}
          src="/images/pokecafe-interior.png"
          layout="responsive"
          height={251}
          width={502}
          alt="pokemon cafe interior"
        />
      </div>

      <div className={styles.sectioncopy}>
        <div className={styles.subtitle}>Pokemon Themes</div>
        {/* <div>Energy Cards</div> */}
        <p>
          Besides the Pokemon Menu, you will find small and large Pokemon
          figures to takes photos with, products you can purchase as souvenirs;
          such as stuffies, cups, plates and also greet a giant Pokemon
          character during their visits in the dining area.
        </p>
        <p>
          You can find more visting information at the official{" "}
          <a
            href="https://www.pokemoncenter-online.com/cafe/en/"
            target="_blank"
          >
            Pokemon Cafe website.
          </a>
        </p>
      </div>

      <div className={styles.gridphoto}>
        <div>
          <Image
            className={styles.img}
            src="/images/pika-bulba-curry.png"
            layout="responsive"
            height={150}
            width={150}
            alt="pika bulba curry
            "
          />
        </div>

        <div>
          <Image
            className={styles.img}
            src="/images/snorlax-plate.png"
            layout="responsive"
            height={150}
            width={150}
            alt="snorlax plate"
          />
        </div>

        <div>
          <Image
            className={styles.img}
            src="/images/pressed-sushi.png"
            layout="responsive"
            height={150}
            width={150}
            alt="pressed-sushi"
          />
        </div>

        <div>
          <Image
            className={styles.img}
            src="/images/gengar-smoothie.png"
            layout="responsive"
            height={150}
            width={150}
            alt="gengar smoothie"
          />
        </div>

        <div>
          <Image
            className={styles.img}
            src="/images/poke-latte.png"
            layout="responsive"
            height={150}
            width={150}
            alt="poke latte"
          />
        </div>

        <div>
          <Image
            className={styles.img}
            src="/images/poke-parfait.png"
            layout="responsive"
            height={150}
            width={150}
            alt="poke parfait"
          />
        </div>
      </div>

      <div className={styles.sectioncopy}>
        <p>
          Remember to book a reservation if you decide to visit the cafe as it
          is quite popular.
        </p>
        {/* <Image
          className={styles.img}
          src="/images/evie-character-greet.png"
          layout="responsive"
          height={251}
          width={502}
          alt="evie character greet"
        /> */}
      </div>

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
    </main>
  );
}

export default pokecafe;
