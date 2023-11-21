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
      <div className={styles.title}>Pokemon Trading Card Game</div>
      <Row className={styles.row}>
        <Col sm={4} className="text-black py-4 px-4">
          <h3>Parts of a Pokemon Card</h3>
          <p>
            The Pokémon Trading Card Game is a 2-player game in which players
            use 60-card decks to battle.
          </p>
          <p>
            {" "}
            In the Pokémon TCG, players build decks around cards that feature
            Pokémon characters, and then take turns using attacks to try to
            defeat their opponent.{" "}
          </p>
          The game requires some strategy and planning to win. ~ from official
          Pokemon Website
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
            <CarouselItem className={styles.item}>
              <Image
                src="/images/pokemon-species-name.png"
                rounded
                height={400}
                width={250}
                alt="Pokemon Card"
              />
              <CarouselCaption className={styles.caption}>
                <LoremIpsum
                  p={3}
                  avgWordsPerSentence={13}
                  avgSentencesPerParagraph={5}
                />
              </CarouselCaption>
            </CarouselItem>

            <CarouselItem className={styles.item}>
              <Image
                src="/images/pokemon-evol-stage.png"
                rounded
                height={400}
                width={250}
                alt="Pokemon Card"
              />
              <CarouselCaption className={styles.caption}>
                <LoremIpsum
                  p={2}
                  avgWordsPerSentence={5}
                  avgSentencesPerParagraph={2}
                />
              </CarouselCaption>
            </CarouselItem>

            <CarouselItem className={styles.item}>
              <Image
                src="/images/pokemon-type-icon.png"
                rounded
                height={400}
                width={250}
                alt="Pokemon Card"
              />
              <CarouselCaption className={styles.caption}>
                <LoremIpsum
                  p={2}
                  avgWordsPerSentence={5}
                  avgSentencesPerParagraph={2}
                />
              </CarouselCaption>
            </CarouselItem>
          </Carousel>
        </Col>
      </Row>

      <Container className={styles.container}>
        <div className={styles.clearfix}>
          <h3 className="pt-3 pb-2 border-bottom border-warning border-3">
            Setting Up The Game
          </h3>
          <p>
            <Image
              className={styles.img}
              src="/images/tcg-layout.png"
              height={311}
              width={331}
              alt="TCG Card Layout Diagram"
            />
            <Image
              className={styles.img}
              src="/images/tcg-layout-photo.png"
              height={301}
              width={261}
              alt="TCG Photo Layout"
            />
            Use the diagram to layout your cards; each player will have the same
            set up on their respective sides. There are 5 areas: Bench, Active,
            Deck, Prize Cards and a Discard Pile.
          </p>
        </div>

        <div className={styles.clearfix}>
          <h3 className="pt-3 pb-2 border-bottom border-warning border-3">
            Building Your Card Deck
          </h3>
          <p>
            <Image
              className={styles.img}
              src="/images/pokemon-card-deck.png"
              height={671}
              width={571}
              alt="Pokemon Card Deck List"
            />
            One approach is to build your Deck Around One Type of Pokemon such
            as Energy Pokemons. In your deck, you should have 12 pokemon cards,
            14 energy cards and 34 Trainer cards ~ A mix of Items, Supporters,
            and Stadiums. Visit the official Pokemon site for more details
            https://www.pokemon.com/us/strategy/designing-a-deck-from-scratch{" "}
          </p>
        </div>

        <div className={styles.clearfix}>
          <h3 className="pt-3 border-bottom border-warning border-3">
            3 Card Types
          </h3>{" "}
          <div className={styles.clearfix}>
            <Image
              className={styles.img}
              src="/images/pokemon-card.png"
              height={201}
              width={601}
              alt="Pokemon Cards"
            />

            <h5>Pokemon Cards</h5>
            <LoremIpsum
              p={1}
              avgWordsPerSentence={10}
              avgSentencesPerParagraph={3}
            />
          </div>
          <div className={styles.clearfix}>
            <Image
              className={styles.img}
              src="/images/energy-cards.png"
              height={201}
              width={150}
              alt="Energy Cards"
            />
            <h5>Pokemon Cards</h5>
            <LoremIpsum
              p={1}
              avgWordsPerSentence={10}
              avgSentencesPerParagraph={3}
            />
          </div>
          <div className={styles.clearfix}>
            <Image
              className={styles.img}
              src="/images/trainer-cards.png"
              height={201}
              width={300}
              alt="Trainer Cards"
            />
            <h5>Pokemon Cards</h5>
            <LoremIpsum
              p={1}
              avgWordsPerSentence={10}
              avgSentencesPerParagraph={3}
            />
          </div>
        </div>

        <div className={styles.clearfix}>
          <h3 className="pt-3 pb-2 border-bottom border-warning border-3">
            Playing the Game
          </h3>
          <p>
            <Image
              className={styles.img}
              src="/images/pokemon-group.png"
              height={154}
              width={250}
              alt="Pokemon All Kinds"
            />
          </p>
          <h5>Winning The Game</h5>
          <p>There are 3 ways to win a game:</p>
          <ol>
            <li>Collect all of your Prize cards.</li>
            <li>Knock Out all of your opponent's Pokemon in play.</li>
            <li>
              If your opponent has no cards in their deck at the beginning of
              their turn.
            </li>
          </ol>

          <h5>Parts of a Turn</h5>
          <p>Each turn has 3 actions to take:</p>
          <ol>
            <li>Draw a card.</li>
            <li>Do any of the following in any order:</li>
            <ul>
              <li>Place Basic Pokemon cards from your hand onto your Bench</li>
              <li>Evolve your Pokemon that are already on the bench</li>
              <li>
                Attach an Energy card from your hand to one of your Pokemon ~
                Once per turn
              </li>
              <li>Use Abilities</li>
              <li>Retreat any of your Active Pokemon</li>
            </ul>
            <li>Attack. Then, end your turn.</li>
          </ol>
        </div>

        <div className={styles.clearfix}>
          <h3 className="pt-3 pb-2 border-bottom border-warning border-3">
            How to Start a Game
          </h3>
          <p>
            <Image
              className={styles.img}
              src="/images/start-game.png"
              height={308}
              width={600}
              alt="Rules for how to start a game"
            />
            With the game layout set up, it's time to start your game - with
            fair play, integrity and spirit. Let the battle begin!{" "}
          </p>
        </div>
      </Container>
    </main>
  );
}

export default poketcg;
