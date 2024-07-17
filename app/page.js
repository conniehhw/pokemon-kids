// Home Page
import styles from "./page.module.css";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import Link from "next/link";

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
            <Button>Let's Go!</Button>
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
          <Image
            className={styles.img}
            src="/images/pokemon-101a.png"
            layout="responsive"
            height={200}
            width={200}
            alt="All Pokemon Visual"
          />

          <div className={styles.projecttext}>
            <h5>Pokemon 101</h5>
            <h6>A parent's guide. What are pokemon?</h6>
            <br></br>

            <Link href="/resources/poke101">
              <Button>Learn More</Button>
            </Link>
          </div>
        </div>

        <div className={styles.projectimg}>
          <Image
            className={styles.img}
            src="/images/trading-cards1.png"
            layout="responsive"
            height={200}
            width={200}
            alt="Pokemon cards"
          />

          <div className={styles.projecttext}>
            <h5>Trading Card Game</h5>
            <h6>Collections, types of cards and building decks.</h6>
            <br></br>
            <Link href="/resources/poketcg">
              <Button>Learn More</Button>
            </Link>
          </div>
        </div>
        {/* 
        <div className={styles.projectimg}>
          <Image
            className={styles.img}
            src="/images/trading-cards1.png"
            layout="responsive"
            height={200}
            width={200}
            alt="Pokemon cards"
          />

          <div className={styles.projecttext}>
            <h5>Trading Card Game</h5>
            <h6>Collections, types of cards and building decks.</h6>
            <br></br>
            <Link href="/resources/poketcg">
              <Button>Learn More</Button>
            </Link>
          </div>
        </div> */}

        <div className={styles.projectimg}>
          <Image
            className={styles.img}
            src="/images/pokedex.png"
            layout="responsive"
            height={200}
            width={200}
            alt="Pokemon Group"
          />

          <div className={styles.projecttext}>
            <h5>Pokedex</h5>
            <h6>Get the stats on your favourite Pokemon & more</h6>
            <br></br>
            <Link href="/pokedex1">
              <Button>Learn More</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
