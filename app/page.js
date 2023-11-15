// Home Page
import Image from "next/image";
import styles from "./page.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import CardImg from "react-bootstrap/CardImg";
import CardBody from "react-bootstrap/CardBody";
import CardFooter from "react-bootstrap/CardFooter";
import CardTitle from "react-bootstrap/CardTitle";
import CardText from "react-bootstrap/CardText";

export const metadata = {
  title: "Pokemon Kids Home Page",
  description: "...",
};

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <Container> */}
      <Row className={styles.row}>
        <Col md={7} className="text-black px-3 py-3">
          <h1 class="font-weigh-light">Welcome!</h1>
          <p class="pt-3">
            So you want to be a pokemon trainer? Follow along with Ash and
            Pikachu and start your journey.
          </p>
          <br></br>
          <Button variant="primary" style={{ color: "blue" }}>
            <Link href="/about">
              <span style={{ color: "white" }}>Let's Go!</span>
            </Link>
          </Button>
        </Col>
        <Col
          md={5}
          // style={{ backgroundColor: "#FFDE00", borderRadius: "10px" }}
          style={{ backgroundColor: "", borderRadius: "10px" }}
        >
          <Image
            className={styles.img}
            src="/images/pikachu-ash.png"
            height={590}
            width={391}
            alt="Pikachu + Ash"
          />
        </Col>
      </Row>
      <Container className={styles.gridmain}>
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
      </Container>
    </main>
  );
}
