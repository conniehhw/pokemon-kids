import styles from "../page.module.css";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import CardImg from "react-bootstrap/CardImg";
// import Image from "next/image";
import CardHeader from "react-bootstrap/CardHeader";
import CardBody from "react-bootstrap/CardBody";
import CardTitle from "react-bootstrap/CardTitle";
import CardText from "react-bootstrap/CardText";
import Button from "react-bootstrap/Button";

function BodyShorthandExample() {
  return (
    <main className={styles.main}>
      <Container className={styles.grid}>
        <Card style={{ width: "18rem" }}>
          <CardImg variant="top" src="/images/pokemon-101.png" />
          <CardBody>
            <CardTitle>Card Title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            <Button variant="primary">Go somewhere</Button>
          </CardBody>
        </Card>
        <Card style={{ width: "18rem" }}>
          <CardImg variant="top" src="/images/pokemon-101.png" />
          <CardBody>
            <CardTitle>Card Title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            <Button variant="primary">Go somewhere</Button>
          </CardBody>
        </Card>
        <Card style={{ width: "18rem" }}>
          <CardImg variant="top" src="/images/pokemon-101.png" />
          <CardBody>
            <CardTitle>Card Title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            <Button variant="primary">Go somewhere</Button>
          </CardBody>
        </Card>
        <Card style={{ width: "18rem" }}>
          <CardImg variant="top" src="/images/pokemon-101.png" />
          <CardBody>
            <CardTitle>Card Title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            <Button variant="primary">Go somewhere</Button>
          </CardBody>
        </Card>
        <Card style={{ width: "18rem" }}>
          <CardImg variant="top" src="/images/pokemon-101.png" />
          <CardBody>
            <CardTitle>Card Title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            <Button variant="primary">Go somewhere</Button>
          </CardBody>
        </Card>
        <Card style={{ width: "18rem" }}>
          <CardImg variant="top" src="/images/pokemon-101.png" />
          <CardBody>
            <CardTitle>Card Title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            <Button variant="primary">Go somewhere</Button>
          </CardBody>
        </Card>
      </Container>
    </main>
  );
}

export default BodyShorthandExample;
