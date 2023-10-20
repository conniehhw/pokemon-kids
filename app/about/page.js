import styles from "../page.module.css";
// import styles from "../about/page.module.css";
// import styles from "../components/container.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import { LoremIpsum } from "react-lorem-ipsum";
import Image from "next/image";

export default function About() {
  return (
    <main className={styles.main}>
      {/* <h1>About Page</h1> */}

      <Row className="">
        <Col sm={5} className="text-black py-4 px-4">
          <h1 class="font-weigh-light">About Page</h1>
          <p class="pt-3">
            Hello! This website is designed for the younger Pokémon fans, ages 5
            - 8. It features activities such as games, searching the pokedex,
            learning to draw their fav characters and more.
          </p>
          <br></br>
          <Button variant="primary" style={{ color: "blue" }}>
            <Link href="/about">
              <span style={{ color: "white" }}>Let's Go!</span>
            </Link>
          </Button>
        </Col>
        <Col
          sm={7}
          className="text-center"
          style={{ backgroundColor: "#FFDE00", borderRadius: "25px" }}
        >
          {/* <Image
            className={styles.img}
            src="/images/pikachu-ash.png"
            height={590}
            width={391}
            alt="Pikachu + Ash"
          /> */}
        </Col>
      </Row>

      {/* <Container
        style={{
          backgroundColor: "#FFDE00",
          borderRadius: "25px",
        }}
        class="w-auto"
      >
        <Row>
          <Col>
            <LoremIpsum
              p={1}
              avgWordsPerSentence={6}
              avgSentencesPerParagraph={4}
            />
          </Col>
          <Col></Col>
        </Row>
      </Container> */}
    </main>
  );
}
