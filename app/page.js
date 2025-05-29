// Home Page
import styles from "./page.module.css";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import { FigureCaption } from "react-bootstrap";

export const metadata = {
  title: "Pokemon Kids Home Page",
  description: "...",
};

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.welcome}>
        <div>
          <h1>Welcome!</h1>
          <h6>
            So you want to be a pokemon trainer? Follow along with Ash and
            Pikachu and start your journey.
          </h6>
          <br></br>
          <Link href="/resources">
            <Button className={styles.b}>Let's Go!</Button>
          </Link>
        </div>

        <div>
          <Image
            className={styles.img}
            src="/images/pikachu-ash.png"
            layout="responsive"
            height={790}
            width={591}
            alt="pikachu ash full"
          />
        </div>
      </div>

      <div className={styles.projects}>
        <div className={styles.projectimg}>
          <div>
            <Link href="resources/poke101">
              <Image
                className={styles.img1}
                src="/images/pokemon101.png"
                layout="responsive"
                height={200}
                width={200}
                alt="All Pokemon Visual"
              />
            </Link>
          </div>

          <div className={styles.projecttext}>
            <Link href="resources/poke101">
              <h6> Pokemon 101</h6>
            </Link>

            <p>A parent's guide to the world of Pokemon.</p>
          </div>
          {/* <Link href="resources/poke101">
            <div className={styles.button}>
              <button className={styles.b}>Learn More</button>
            </div>
          </Link> */}
        </div>

        {/* <Link href="/resources/poke101">
              <Button>Learn More</Button>
            </Link> */}

        <div className={styles.projectimg}>
          <div>
            <Link href="resources/poketcg">
              <Image
                className={styles.img1}
                src="/images/tradingcards.png"
                layout="responsive"
                height={200}
                width={200}
                alt="Pokemon cards"
              />
            </Link>
          </div>
          <div className={styles.projecttext}>
            <Link href="resources/poketcg">
              <h6>Trading Card Game</h6>
            </Link>
            <p>Collections, types of cards and building decks.</p>
          </div>
          {/* 
          <div className={styles.button}>
            <button className={styles.b}>Learn More</button>
          </div> */}
        </div>

        <div className={styles.projectimg}>
          <div>
            <Link href="/PokedexHome">
              <Image
                className={styles.img1}
                src="/images/pokedex-home.png"
                layout="responsive"
                height={200}
                width={200}
                alt="Pokedex"
              />
            </Link>
          </div>
          <div className={styles.projecttext}>
            <Link href="/PokedexHome">
              <h6>Pokedex</h6>
            </Link>
            <p>Get the stats on your favourite Pokemon & more.</p>
          </div>

          {/* <div className={styles.button}>
            <button className={styles.b}>Learn More</button>
          </div> */}
        </div>
      </div>
      <div>
        <figure className={styles.figure}>
          <figcaption className={styles.figcaption}>
            <i>
              Source of images: From Nintendo, Game Freak and Creatures Inc. and
              https://www.pokemon.com, otherwise indicated elsewhere.
            </i>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
