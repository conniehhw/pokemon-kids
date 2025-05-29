// import styles from "../page.module.css";
import styles from "../resources/resources.module.css";
// import Container from "react-bootstrap/Container";
// import Card from "react-bootstrap/Card";
// import CardImg from "react-bootstrap/CardImg";
import Link from "next/link";
import Image from "next/image";

// import CardBody from "react-bootstrap/CardBody";
// import CardFooter from "react-bootstrap/CardFooter";
// import CardTitle from "react-bootstrap/CardTitle";
// import CardText from "react-bootstrap/CardText";
import Button from "react-bootstrap/Button";
import { FigureCaption } from "react-bootstrap";

function Resources() {
  return (
    <main className={styles.main}>
      <div>
        <div>
          <ul className={styles.breadcrumb}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>Resources</li>
          </ul>
        </div>

        <div className={styles.grid}>
          <div className={styles.gridchild}>
            <div>
              <Link href="resources/poke101">
                <Image
                  // className={styles.projectsimg}
                  className={styles.img}
                  src="/images/pokemon101.png"
                  layout="responsive"
                  height={200}
                  width={200}
                  alt="Pokemon Group"
                />
              </Link>
            </div>
            <div className={styles.text}>
              <Link href="resources/poke101">
                <h6>Pokemon 101</h6>
              </Link>
              <p>A parent's guide to the world of Pokemon.</p>
            </div>
            <div className={styles.btnbox}>
              {/* <Link href="resources/poke101">
                Answers to FAQs
     
              </Link> */}
            </div>
          </div>

          <div className={styles.gridchild}>
            <div>
              <Link href="resources/poketcg">
                <Image
                  // className={styles.projectsimg}
                  className={styles.img}
                  src="/images/tradingcards.png"
                  layout="responsive"
                  height={200}
                  width={200}
                  alt="Trading Cards"
                />
              </Link>
            </div>

            <div className={styles.text}>
              <Link href="resources/poketcg">
                {" "}
                <h6>Trading Card Game</h6>
              </Link>

              <p>Collections, types of cards and building decks.</p>
            </div>
            <div className={styles.btnbox}>
              {/* <Link href="resources/poketcg">
                How to play the game
            
              </Link> */}
            </div>
          </div>

          {/* <div className={styles.gridchild}>
            <div>
              <Link href="resources/pokeregions">
                <Image
            
                  className={styles.img}
                  src="/images/pokemon-regions-icon.png"
                  a
                  href="resources/pokeregions"
                  layout="responsive"
                  height={200}
                  width={200}
                  alt="Regions"
                />
              </Link>
            </div>
            <div className={styles.text}>
              <h6>Regions</h6>
              <p>
                A guide to the Pokemon world; their home, language and more.
              </p>
            </div>
            <div className={styles.btnbox}>
              <Link href="resources/pokeregions">
                Explore regions

              </Link>
            </div>
          </div> */}

          <div className={styles.gridchild}>
            <div>
              <Link href="resources/pokemedia">
                <Image
                  className={styles.img}
                  src="/images/pokemon-media-icon.png"
                  layout="responsive"
                  height={200}
                  width={200}
                  alt="Pokemon Media"
                />
              </Link>
            </div>
            <div className={styles.text}>
              <Link href="resources/pokemedia">
                <h6>Pokemon Media</h6>
              </Link>

              <p>Even more pokemon: tv, film, video games and books.</p>
            </div>
            <div className={styles.btnbox}>
              {/* <Link href="resources/pokemedia">
                Continue your journey
      
              </Link> */}
            </div>
          </div>

          <div className={styles.gridchild}>
            <div>
              <Link href="resources/pokecenter">
                <Image
                  className={styles.img}
                  src="/images/pokemoncenter-animeicon.png"
                  layout="responsive"
                  height={200}
                  width={200}
                  alt="Pokemon Center"
                />
              </Link>
            </div>

            <div className={styles.text}>
              <Link href="resources/pokecenter">
                {" "}
                <h6>Pokemon Centres</h6>
              </Link>

              <p>An important destination for trainers, pokemon and fans.</p>
            </div>
            <div className={styles.btnbox}>
              {/* <Link href="resources/pokecenter">
                Learn More
             
              </Link> */}
            </div>
          </div>

          <div className={styles.gridchild}>
            <div>
              <Link href="resources/pokecafe">
                <Image
                  className={styles.img}
                  src="/images/pokemon-cafe-sign1.png"
                  layout="responsive"
                  height={200}
                  width={200}
                  alt="Pokemon Cafe Sign"
                />
              </Link>
            </div>
            <div className={styles.text}>
              <Link href="resources/pokecafe">
                {" "}
                <h6>Pokemon Cafe</h6>
              </Link>

              <p>A lunch date with your favourite Pokemon Friends.</p>
            </div>
            <div className={styles.btnbox}>
              {/* <Link href="resources/pokecafe">
                Table for two, please
     
              </Link> */}
            </div>
          </div>
        </div>

        <figure className={styles.figure}>
          <figcaption className={styles.figcaption}>
            <i>
              Source of images: Trading Card Game photo by{" "}
              <a href="https://unsplash.com/@giorgiotrovato">Giorgio Trovato</a>{" "}
              on Unsplash, Pokemon Media image by{" "}
              <a href="https://pixabay.com/users/thor_deichmann-2306827/">
                Thor_Deichmann
              </a>{" "}
              from pixabay, Pokemon Cafe photo from
              https://www.pokemon-cafe.jp/en/cafe/
            </i>
          </figcaption>
        </figure>
      </div>
    </main>
  );
}

export default Resources;
