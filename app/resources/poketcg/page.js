import React from "react";
import styles from "../poketcg/poketcg.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import { LoremIpsum } from "react-lorem-ipsum";
import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "react-bootstrap/CarouselItem";
import CarouselCaption from "react-bootstrap/CarouselCaption";

function poketcg() {
  return (
    <main className={styles.main}>
      {/* <div className={styles.title}>poketcg page</div> */}

      <Row className={styles.row}>
        {/* <Col sm={4} className="text-black py-4 px-4"> */}
        <Col sm={4} className="text-black py-4 px-4">
          <LoremIpsum
            p={2}
            avgWordsPerSentence={5}
            avgSentencesPerParagraph={2}
          />
          {/* <Button variant="primary" style={{ color: "blue" }}>
              <Link href="/resources">
                <span style={{ color: "white" }}>Let's Go!</span>
              </Link>
            </Button> */}
        </Col>
        <Col
          sm={8}
          // className="text-center py-4 px-4"
          className={styles.col}
          style={{
            backgroundColor: "#0A285F",
            borderColor: "black",
            borderRadius: "15px",
          }}
        >
          <Carousel>
            {/* <Image
              src="/images/pokemon-species-name.png"
              rounded
              height={400}
              width={250}
              alt="Pokemon Card"
              className=""
            /> */}
            <CarouselItem className={styles.item}>
              <Image
                src="/images/pokemon-species-name.png"
                rounded
                height={400}
                width={250}
                alt="Pokemon Card"
              />
              {/* <div className={styles.div}> */}
              <CarouselCaption className={styles.div}>
                <LoremIpsum
                  p={2}
                  avgWordsPerSentence={5}
                  avgSentencesPerParagraph={2}
                />
                {/* </div> */}
              </CarouselCaption>
              {/* <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </CarouselCaption> */}
            </CarouselItem>

            <CarouselItem className={styles.item}>
              <Image
                src="/images/pokemon-evol-stage.png"
                rounded
                height={400}
                width={250}
                alt="Pokemon Card"
              />
              <CarouselCaption className={styles.div}>
                <LoremIpsum
                  p={2}
                  avgWordsPerSentence={5}
                  avgSentencesPerParagraph={2}
                />
              </CarouselCaption>
            </CarouselItem>

            <CarouselItem className={styles.item}>
              <Image
                src="/images/pokemon-type.png"
                rounded
                height={400}
                width={250}
                alt="Pokemon Card"
              />
              <CarouselCaption className={styles.div}>
                <LoremIpsum
                  p={2}
                  avgWordsPerSentence={5}
                  avgSentencesPerParagraph={2}
                />
              </CarouselCaption>
            </CarouselItem>
          </Carousel>

          {/* <Image
            className={styles.img}
            src="/images/pokemon-fans.png"
            height={200}
            width={400}
            alt="Kids with pokemon backpack"
          /> */}
          {/* <div className={styles.div}></div> */}
        </Col>
      </Row>
    </main>
  );
}

export default poketcg;
