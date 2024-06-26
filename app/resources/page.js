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
          <div>
            <Image
              // className={styles.projectsimg}
              className={styles.img}
              src="/images/pokemon-101.png"
              layout="responsive"
              height={200}
              width={200}
              alt="Pokemon Group"
            />
            <h6>Pokemon 101</h6>
            Text Blurb
            <Link href="resources/poke101">
              <Button className={styles.button}>Read more</Button>
            </Link>
          </div>
          <div>
            <Image
              // className={styles.projectsimg}
              className={styles.img}
              src="/images/trading-cards.png"
              layout="responsive"
              height={200}
              width={200}
              alt="Trading Cards"
            />
            <h6>Trading Card Game</h6>
            Text Blurb
            <Link href="resources/poketcg">
              <Button className={styles.button}>Read more</Button>
            </Link>
          </div>
          <div>
            <Image
              // className={styles.projectsimg}
              className={styles.img}
              src="/images/pokedex.png"
              layout="responsive"
              height={200}
              width={200}
              alt="Regions"
            />
            <h6>Regions</h6>
            Text Blurb
            <Link href="resources/pokeregions">
              <Button className={styles.button}>Read more</Button>
            </Link>
          </div>
          <div>
            <Image
              // className={styles.projectsimg}
              className={styles.img}
              src="/images/pokemon-360.png"
              layout="responsive"
              height={200}
              width={200}
              alt="Pokemon Media"
            />
            <h6>Media</h6>
            Text Blurb
            <Link href="resources/pokemedia">
              <Button className={styles.button}>Read more</Button>
            </Link>
          </div>
          <div>
            <Image
              // className={styles.projectsimg}
              className={styles.img}
              src="/images/pokemon-centre.png"
              layout="responsive"
              height={200}
              width={200}
              alt="Pokemon Group"
            />
            <h6>Pokemon Centres</h6>
            Text Blurb
            <Link href="resources/pokecenter">
              <Button className={styles.button}>Read more</Button>
            </Link>
          </div>
          <div>
            <Image
              // className={styles.projectsimg}
              className={styles.img}
              src="/images/pokemon-cafe2.png"
              layout="responsive"
              height={200}
              width={200}
              alt="Pokemon Group"
            />
            <h6>Pokemon Cafe</h6>
            Text Blurb
            <Link href="resources/pokecafe">
              <Button className={styles.button}>Read more</Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Resources;
