import styles from "../page.module.css";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import CardImg from "react-bootstrap/CardImg";
import Link from "next/link";
// import Image from "next/image";

import CardBody from "react-bootstrap/CardBody";
import CardFooter from "react-bootstrap/CardFooter";
import CardTitle from "react-bootstrap/CardTitle";
import CardText from "react-bootstrap/CardText";
import Button from "react-bootstrap/Button";

function Resources() {
  return (
    <main className={styles.main}>
      <Container className={styles.grid}>
        <Card style={{ width: "18rem" }}>
          <CardImg variant="top" src="/images/pokemon-101.png" />
          <CardBody>
            <CardTitle>Pokemon 101</CardTitle>
            <CardText>
              A parent's guide to Pokemon. What are pokemon? Answers to your
              Frequently Asked Questions.
            </CardText>
          </CardBody>
          <CardFooter>
            <Button variant="primary bottom">
              <Link href="/resources/poke101">
                <span style={{ color: "white" }}>Go somewhere</span>
              </Link>
            </Button>
          </CardFooter>
          {/* </CardBody> */}
        </Card>

        <Card style={{ width: "18rem" }}>
          <CardImg variant="top" src="/images/pokemon-101.png" />
          <CardBody>
            <CardTitle>Pokemon 101</CardTitle>
            <CardText>A parent's guide to Pokemon. What are pokemon?</CardText>
          </CardBody>
          <CardFooter>
            <Button variant="primary bottom">
              <Link href="/resources/poke101">
                <span style={{ color: "white" }}>Go somewhere</span>
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card style={{ width: "18rem" }}>
          <CardImg variant="top" src="/images/trading-cards.png" />
          <CardBody>
            <CardTitle>Pokemon Trading Card Game TCG</CardTitle>
            <CardText>
              From collecting cards, types of cards and building decks - a guide
              for how to play the Pokemon Trading Card Game.
            </CardText>
          </CardBody>
          <CardFooter>
            <Button variant="primary bottom">
              <Link href="/resources/poketcg">
                <span style={{ color: "white" }}>Go somewhere</span>
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card style={{ width: "18rem" }}>
          <CardImg variant="top" src="/images/pokemon-360.png" />
          <CardBody>
            <CardTitle>Pokemon 360</CardTitle>
            <CardText>
              From books, television shows, films to video games - there are
              plently of ways to explore the Pokemon Universe.
            </CardText>
          </CardBody>
          <CardFooter>
            <Button variant="primary bottom">
              <Link href="/resources/pokemedia">
                <span style={{ color: "white" }}>Go somewhere</span>
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card style={{ width: "18rem" }}>
          <CardImg variant="top" src="/images/pokemon-centre.png" />
          <CardBody>
            <CardTitle>Pokemon Centres</CardTitle>
            <CardText>
              What is the difference between Pokemon Centres and Pokemon Stores?
            </CardText>
          </CardBody>
          <CardFooter>
            <Button variant="primary bottom">
              <Link href="/resources/pokecenter">
                <span style={{ color: "white" }}>Go somewhere</span>
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Card style={{ width: "18rem" }}>
          <CardImg variant="top" src="/images/pokemon-cafe.png" />
          <CardBody>
            <CardTitle>Pokemon Cafe</CardTitle>
            <CardText>
              Eat, drink and be merry. Welcome to the first-ever official
              Pokémon Cafe.
            </CardText>
          </CardBody>
          <CardFooter>
            <Button variant="primary bottom">
              <Link href="/resources/pokecafe">
                <span style={{ color: "white" }}>Go somewhere</span>
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </Container>
    </main>
  );
}

export default Resources;
