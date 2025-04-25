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
              src="/images/pokemon101.png"
              layout="responsive"
              height={200}
              width={200}
              alt="Pokemon Group"
            />
            <h6>Pokemon 101</h6>

            <Link href="resources/poke101">
              <Button className={styles.button}>Learn more</Button>
            </Link>
          </div>
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
            <h6>Trading Card Game</h6>

            <Link href="resources/poketcg">
              <Button className={styles.button}>Learn more</Button>
            </Link>
          </div>
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
            <h6>Regions</h6>

            <Link href="resources/pokeregions">
              <Button className={styles.button}>Learn more</Button>
            </Link>
          </div>
          <div>
            <Image
              // className={styles.projectsimg}
              className={styles.img}
              src="/images/pokemon-media-icon.png"
              layout="responsive"
              height={200}
              width={200}
              alt="Pokemon Media"
            />
            <h6>Pokemon Universe</h6>

            <Link href="resources/pokemedia">
              <Button className={styles.button}>Learn more</Button>
            </Link>
          </div>
          <div>
            <Image
              // className={styles.projectsimg}
              className={styles.img}
              src="/images/pokemoncenter-animeicon.png"
              layout="responsive"
              height={200}
              width={200}
              alt="Pokemon Center"
            />
            <h6>Pokemon Centres</h6>

            <Link href="resources/pokecenter">
              <Button className={styles.button}>Learn more</Button>
            </Link>
          </div>
          <div>
            <Image
              // className={styles.projectsimg}
              className={styles.img}
              src="/images/pokemon-cafe-sign1.png"
              layout="responsive"
              height={200}
              width={200}
              alt="Pokemon Cafe Sign"
            />
            <h6>Pokemon Cafe</h6>

            <Link href="resources/pokecafe">
              <Button className={styles.button}>learn more</Button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Resources;
