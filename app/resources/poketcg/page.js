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
      <ul className={styles.breadcrumb}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/resources">Resources</a>
        </li>
        {/* <li>
          <a href="#">Summer 15</a>
        </li>
        <li>Italy</li> */}
      </ul>
      <div className={styles.title}>Pokemon Trading Card Game</div>
      <Row className={styles.row}>
        <Col sm={4} className="text-black py-4 px-4">
          <h3>Parts of a Pokemon Card</h3>
          <p>
            The Pokémon Trading Card Game is a 2-player game in which players
            &#40;assuming the role of Pokemon Trainer&#41; use their Pokemon to
            battle one another.{" "}
          </p>
          <p>
            Each player builds a deck of 60 cards which include Pokemon
            characters, energy cards and supporting cards. Pokemon cards will
            list the specie's abilities, attacks and the numeric damage it will
            inflict.
          </p>
          <p>
            When a Pokemon exceeds or reaches its HP, it is considered "Knocked
            Out".
          </p>
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
                <h5>Name</h5>
                <p>Your Pokemon's species name</p>
                {/* <LoremIpsum
                  p={3}
                  avgWordsPerSentence={13}
                  avgSentencesPerParagraph={5}
                /> */}
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
                <h5>Evolutionary Form</h5>
                <p>Some Pokemon can evolve into different forms.</p>
                <p>
                  {" "}
                  The stages are: Basic, Stage 1, Stage 2 & Mega etc. Stage 1
                  and Stage 2 Pokémon are also called Evolution cards.
                </p>
                {/* <LoremIpsum
                  p={2}
                  avgWordsPerSentence={5}
                  avgSentencesPerParagraph={2}
                /> */}
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
                <h5>Type</h5>
                <p>
                  Most Pokémon have a single type. However, some Pokémon may
                  have more than one type. Then there are Pokemon's without a
                  type called "Colourless"; also known as normal type.
                </p>
                {/* <LoremIpsum
                  p={2}
                  avgWordsPerSentence={5}
                  avgSentencesPerParagraph={2}
                /> */}
              </CarouselCaption>
            </CarouselItem>

            <CarouselItem className={styles.item}>
              <Image
                src="/images/pokemon-hp-bul.png"
                rounded
                height={400}
                width={250}
                alt="Pokemon Card"
              />
              <CarouselCaption className={styles.caption}>
                <h5>Health Points / Hit Points &#40;HP&#41;</h5>
                <p>
                  This number represents the Pokemon's total health/hit points
                  at the beginning ofthe battle.
                </p>
              </CarouselCaption>
            </CarouselItem>

            <CarouselItem className={styles.item}>
              <Image
                src="/images/pokemon-energy-bul.png"
                rounded
                height={400}
                width={250}
                alt="Pokemon Card"
              />
              <CarouselCaption className={styles.caption}>
                <h5>Energy</h5>
                <p>
                  These symbols show what energy cards the Pokemon needs to use
                  their attack.
                </p>
              </CarouselCaption>
            </CarouselItem>

            <CarouselItem className={styles.item}>
              <Image
                src="/images/pokemon-attack-bul.png"
                rounded
                height={400}
                width={250}
                alt="Pokemon Card"
              />
              <CarouselCaption className={styles.caption}>
                <h5>Attack</h5>
                <p>
                  The names of your Pokemon's attacks. Some Pokemon cards list
                  more then one attack.
                </p>
              </CarouselCaption>
            </CarouselItem>

            <CarouselItem className={styles.item}>
              <Image
                src="/images/pokemon-damage-bul.png"
                rounded
                height={400}
                width={250}
                alt="Pokemon Card"
              />
              <CarouselCaption className={styles.caption}>
                <h5>Damage</h5>
                <p>
                  The numeric amount of damage the Pokemon's attacks can
                  inflict.
                </p>
              </CarouselCaption>
            </CarouselItem>

            <CarouselItem className={styles.item}>
              <Image
                src="/images/pokemon-weakness-char.png"
                rounded
                height={400}
                width={250}
                alt="Pokemon Card"
              />
              <CarouselCaption className={styles.caption}>
                <h5>Weakness</h5>
                <p>
                  Damages from attacks that use this energy type do extra damage
                  to the Pokemon.
                </p>
              </CarouselCaption>
            </CarouselItem>

            <CarouselItem className={styles.item}>
              <Image
                src="/images/pokemon-resistance-escav.png"
                rounded
                height={400}
                width={250}
                alt="Pokemon Card"
              />
              <CarouselCaption className={styles.caption}>
                <h5>Resistance</h5>
                <p>
                  Attacks from this energy type do less damage to the Pokemon.
                  Example: Escavalier has resistance to Grass types and any
                  damage it takes will be minus 30 HP.
                </p>
              </CarouselCaption>
            </CarouselItem>

            <CarouselItem className={styles.item}>
              <Image
                src="/images/pokemon-retreat-escav.png"
                rounded
                height={400}
                width={250}
                alt="Pokemon Card"
              />
              <CarouselCaption className={styles.caption}>
                <h5>Retreat Cost</h5>
                <p>
                  The amount of energy needed to switch the Pokemon out of the
                  battlefield. Example: To remove this active Pokemon back to
                  the bench, you will need two energy of any type to retreat.
                </p>
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
            and Stadiums.
          </p>
          <p>
            For more information and examples, visit the official Pokemon
            Website page to read about{" "}
            <a
              href="https://www.pokemon.com/us/strategy/designing-a-deck-from-scratch"
              target="_blank"
            >
              An Introduction to Deckbuilding: Learn How to Build a Pokemon TCG
              Deck.
            </a>
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
            <p>
              Most Pokemon cards are Basic Pokemon, Stage 1 Pokemon or Stage 2
              Pokemon. Stage 1 & 2 are also called Evolution card. Look at the
              upper-left corner and you will see the Pokemon's Stage and the
              Pokemon it evolves from, if any.
            </p>
          </div>
          <div className={styles.clearfix}>
            <Image
              className={styles.img}
              src="/images/energy-cards.png"
              height={201}
              width={150}
              alt="Energy Cards"
            />
            <h5>Energy Cards</h5>
            <p>
              Most of the time, Pokemon can't attack without Energy cards.
              You'll need to match the symbols of the attack cost to the Energy
              card, but any kind of Energy can be used for the colourless/normal
              energy.
            </p>
          </div>
          <div className={styles.clearfix}>
            <Image
              className={styles.img}
              src="/images/trainer-cards.png"
              height={201}
              width={300}
              alt="Trainer Cards"
            />
            <h5>Trainer Cards</h5>
            <p>
              Trainer cards represent the Items, Supporters, and Stadiums a
              Trainer can use in battle. You can see the specific Trainer
              subtype in the upper-right corner and any special rules for that
              subtype at the bottom of the card.
            </p>
          </div>
        </div>

        <div className={styles.clearfix}>
          <h3 className="pt-3 pb-2 border-bottom border-warning border-3">
            Playing the Game
          </h3>
          <div className={styles.clearfix}>
            <Image
              className={styles.img}
              src="/images/card-deck.png"
              height={94}
              width={225}
              alt="Deck of cards"
            />

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
          </div>

          <div className={styles.clearfix}>
            <Image
              className={styles.img}
              src="/images/attack-criteria.png"
              height={241}
              width={254}
              alt="Card explaining energy needed for attack"
            />
            <h5>Parts of a Turn</h5>
            <p>Each turn has 3 actions to take:</p>
            <ol>
              <li>Draw a card.</li>
              <li>Do any of the following in any order:</li>
              <ul>
                <li>
                  Place Basic Pokemon cards from your hand onto your Bench
                </li>
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

          <p>
            For the full rules & guidebook on how to play, visit&nbsp;
            <a
              href="https://media.pocketmonsters.net/pdf/Black_White_Rulebook.pdf"
              target="_blank"
            >
              The Pokemon Trading Card Game Rules Book.
            </a>
            &nbsp;It will contain all the information you need to get started!
          </p>
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
            <Image
              className={styles.img}
              src="/images/start-game-b.png"
              height={307}
              width={600}
              alt="Rules for how to start a game part 2"
            />
            With the game layout set up, it's time to start your game - with
            fair play, integrity and spirit. Let the battle begin!{" "}
          </p>
          {/* <p>
            For more information, visit
            https://media.pocketmonsters.net/pdf/Black_White_Rulebook.pdf
          </p> */}
        </div>
      </Container>
    </main>
  );
}

export default poketcg;
