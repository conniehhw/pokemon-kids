// Home Page
import Image from "next/image";
import styles from "./page.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";

export const metadata = {
  title: "Pokemon Kids Home Page",
  description: "...",
};

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <Container> */}
      <Row className="border border-dark">
        <Col sm={5} className="text-black border border-dark py-4 px-4">
          <h1 class="font-weigh-light">Welcome!</h1>
          <p class="pt-3">
            So you want to be a pokemon trainer? Follow along with Ash and
            Pikachu and start your journey.
          </p>
          <br></br>
          <Button variant="primary" style={{ color: "blue" }}>
            <Link href="/about">Let's Go!</Link>
          </Button>
        </Col>
        <Col
          sm={7}
          className="text-center"
          style={{ backgroundColor: "#FFDE00", borderRadius: "25px" }}
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
      {/* </Container> */}
    </main>
  );
}
