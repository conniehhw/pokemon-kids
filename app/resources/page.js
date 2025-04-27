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
              <Image
                // className={styles.projectsimg}
                className={styles.img}
                src="/images/pokemon101.png"
                layout="responsive"
                height={200}
                width={200}
                alt="Pokemon Group"
              />
            </div>
            <div className={styles.text}>
              <h6>Pokemon 101</h6>
              <p>A parent's guide to the world of Pokemon.</p>
            </div>
            <div className={styles.btnbox}>
              <Link href="resources/poke101">
                <Button className={styles.button}>Learn more</Button>
              </Link>
            </div>
          </div>

          <div className={styles.gridchild}>
            <div>
              <Image
                // className={styles.projectsimg}
                className={styles.img}
                src="/images/tradingcards.png"
                layout="responsive"
                height={200}
                width={200}
                alt="Trading Cards"
              />
            </div>
            <div className={styles.text}>
              <h6>Trading Card Game</h6>

              <p>Collections, types of cards and building decks.</p>
            </div>
            <div className={styles.btnbox}>
              <Link href="resources/poketcg">
                <Button className={styles.button}>Learn more</Button>
              </Link>
            </div>
          </div>

          <div className={styles.gridchild}>
            <div>
              <Image
                // className={styles.projectsimg}
                className={styles.img}
                src="/images/pokemon-regions-icon.png"
                layout="responsive"
                height={200}
                width={200}
                alt="Regions"
              />
            </div>
            <div className={styles.text}>
              <h6>Regions</h6>
              <p>
                A guide to the Pokemon world; their home, language and more.
              </p>
            </div>
            <div className={styles.btnbox}>
              <Link href="resources/pokeregions">
                <Button className={styles.button}>Learn more</Button>
              </Link>
            </div>
          </div>

          <div className={styles.gridchild}>
            <div>
              <Image
                className={styles.img}
                src="/images/pokemon-media-icon.png"
                layout="responsive"
                height={200}
                width={200}
                alt="Pokemon Media"
              />
            </div>
            <div className={styles.text}>
              <h6>Pokemon 360</h6>
              <p>Even more pokemon: tv, film, video games and books.</p>
            </div>
            <div className={styles.btnbox}>
              <Link href="resources/pokemedia">
                <Button className={styles.button}>Learn more</Button>
              </Link>
            </div>
          </div>

          <div className={styles.gridchild}>
            <div>
              <Image
                className={styles.img}
                src="/images/pokemoncenter-animeicon.png"
                layout="responsive"
                height={200}
                width={200}
                alt="Pokemon Center"
              />
            </div>
            <div className={styles.text}>
              <h6>Pokemon Centres</h6>
              <p>An important destination for trainers, pokemon and fans.</p>
            </div>
            <div className={styles.btnbox}>
              <Link href="resources/pokecenter">
                <Button className={styles.button}>Learn more</Button>
              </Link>
            </div>
          </div>

          <div className={styles.gridchild}>
            <div>
              <Image
                className={styles.img}
                src="/images/pokemon-cafe-sign1.png"
                layout="responsive"
                height={200}
                width={200}
                alt="Pokemon Cafe Sign"
              />
            </div>
            <div className={styles.text}>
              <h6>Pokemon Cafe</h6>
              <p>A lunch date with your favourite Pokemon Friends.</p>
            </div>
            <div className={styles.btnbox}>
              <Link href="resources/pokecafe">
                <Button className={styles.button}>Learn more</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Resources;
