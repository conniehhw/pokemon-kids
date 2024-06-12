import React from "react";
import styles from "../pokemedia/pokemedia.module.css";
// import Badge from "react-bootstrap/Badge";
import Image from "next/image";

function pokemedia() {
  return (
    // <div className={styles.main}>
    <div>
      <div>
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
      </div>
      <div className={styles.grid}>
        <div>
          {" "}
          <Image
            className={styles.img}
            src="/images/tradingcards-banner.png"
            layout="responsive"
            height={160}
            width={390}
            alt="trading cards banner"
          />
        </div>
      </div>
      <div className={styles.content}>
        <div>
          <div>
            <h2>Get Ready to Play!</h2>
            <h4>
              Trading Card Game (TCG), a 2-player game in which Trainers choose
              Pokemons to go to battle.{" "}
            </h4>
          </div>
        </div>
        {/* <div>Testing 1</div>
        <div>testing 1</div>
        <div>testing 2</div> */}
      </div>

      <div className={styles.section}>
        <div>The Cards</div>
      </div>
      <div className={styles.sectioncopy}>
        <p>
          Each player builds a deck of 60 cards which include Pokemon
          characters, energy cards and supporting cards. Pokemon cards will list
          the specie's abilities, attacks and the numeric damage it will
          inflict.
        </p>
        <Image
          className={styles.img}
          src="/images/card-deck.png"
          layout="responsive"
          height={94}
          width={225}
          alt="card deck"
        />
      </div>
      <div className={styles.section}>
        <div>Pokemon, Energy & Trainer</div>
      </div>
      <div className={styles.sectioncopy}>
        <div>Pokemon Cards</div>
        <p>
          Most Pokemon cards are Basic Pokemon, Stage 1 Pokemon or Stage 2
          Pokemon. Stage 1 & 2 are also called Evolution card. Look at the
          upper-left corner and you will see the Pokemon's Stage and the Pokemon
          it evolves from, if any.
        </p>
        <Image
          className={styles.img}
          src="/images/pokemon-card.png"
          layout="responsive"
          height={201}
          width={601}
          alt="pokemon card"
        />
      </div>
      <div className={styles.sectioncopy}>
        <div>Energy Cards</div>
        <p>
          Most of the time, Pokemon can't attack without Energy cards. You'll
          need to match the symbols of the attack cost to the Energy card, but
          any kind of Energy can be used for the colourless/normal energy.
        </p>
        <Image
          className={styles.img}
          src="/images/energy-cards.png"
          layout="responsive"
          height={201}
          width={150}
          alt="Energy Cards"
        />
      </div>
      <div className={styles.sectioncopy}>
        <div>Trainer Cards</div>
        <p>
          Trainer cards represent the Items, Supporters, and Stadiums a Trainer
          can use in battle. You can see the specific Trainer subtype in the
          upper-right corner and any special rules for that subtype at the
          bottom of the card.
        </p>
        <Image
          className={styles.img}
          src="/images/trainer-cards.png"
          layout="responsive"
          height={201}
          width={300}
          alt="Trainer Cards"
        />
      </div>
      <div className={styles.section}>
        <div>Building Your Deck</div>
      </div>
      <div className={styles.sectioncopy}>
        <p>
          Like building your team - you need your players, coaches and sometimes
          gear.
        </p>
        <p>
          To build your deck around a type of Pokemon such as the Electric
          Pokemons - you will need:{" "}
        </p>
        <p>
          <ul>
            <li>12 pokemon cards</li>
            <li>14 energy cards</li>
            <li>
              34 Trainer cards ~ A mix of Items, Supporters, and Stadiums.
            </li>
          </ul>
        </p>
        <Image
          className={styles.img}
          src="/images/pokemon-card-deck.png"
          layout="responsive"
          height={94}
          width={225}
          alt="card deck"
        />
      </div>
    </div>
  );
}

export default pokemedia;
