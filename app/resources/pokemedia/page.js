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
          <li>TCG</li>
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
          These cards are Basic, Stage 1 or Stage 2. Look at the upper-left
          corner and you will see the Pokémon’s Stage and the Pokémon it evolves
          from, if any.
        </p>
        <p>
          <Image
            className={styles.img}
            src="/images/pokemon-card.png"
            layout="responsive"
            height={201}
            width={601}
            alt="pokemon card"
          />
        </p>

        <p>
          Learn more about all the{" "}
          <a href="/resources/poketcg/pokecard" target="blank">
            parts of a Pokemon Card
          </a>{" "}
          and where to find its name, evolved form, type, Health Points (HP),
          energy, type, attack, damage, weakness and much more.
        </p>
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
          src="/images/energy-card-water.png"
          layout="responsive"
          height={702}
          width={522}
          alt="Water Energy Card"
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
          Pokemons - you would need:{" "}
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
      <div className={styles.section}>
        <div>Setting Up the Game</div>
      </div>
      <div className={styles.sectioncopy}>
        <p>
          Layout your cards; each player will have the same set up on their
          respective sides. There are 5 areas: Bench, Active, Deck, Prize Cards
          and a Discard Pile.
        </p>

        <p>
          For help with setting up your first Pokemon Trading Card Game, visit
          the official Pokemon website to{" "}
          <a
            href="https://tcg.pokemon.com/en-us/learn-to-play/"
            target="_blank"
          >
            {" "}
            view a quick video
          </a>
          .
        </p>
        <p>
          <Image
            className={styles.img}
            src="/images/tcg-layout-board.png"
            layout="responsive"
            height={362}
            width={602}
            alt="tcg game board"
          />
        </p>

        <p>
          The game boards are available in different game kits but you can also
          layout your cards without one or make your own like this printable{" "}
          <a
            href="https://www.pokemon.com/static-assets/content-assets/cms2/pdf/play-pokemon/pokemon-club/playmat/pokemon-tcg-playmat-2.pdf"
            target="_blank"
          >
            Evie
          </a>{" "}
          and
          <a
            href="https://www.pokemon.com/static-assets/content-assets/cms2/pdf/play-pokemon/pokemon-club/playmat/pokemon-tcg-playmat-1.pdf"
            target="_blank"
          >
            &nbsp;Pikachu
          </a>{" "}
          playmat.
        </p>

        <p>
          <Image
            className={styles.imgnbr}
            src="/images/tcg-layout-easy.png"
            layout="responsive"
            height={362}
            width={602}
            alt="tcg layout easy level"
          />
        </p>
      </div>
      <div className={styles.section}>
        <div>Start your Game</div>
      </div>
      <div className={styles.sectioncopy}>
        <p>
          To win the game, you will need to have a strategy and a plan. There
          are 3 ways to win a game:
          <ul>
            <li>i) Collect all of your Prize cards or</li>
            <li>ii) Knock out all of your opponent's Pokemon in play or</li>
            <li>iii) If your opponent has no more cards in their deck.</li>
          </ul>
        </p>
      </div>
      <div className={styles.sectioncopy}>
        Parts of a Turn
        <p>
          Each turn has 3 main parts:
          <ul>
            <li>1. Draw a card.</li>
            <li>
              2. Do any actions; put Basic Pokemon cards onto your bench, evolve
              your Pokemon, attach Energy cards, Play Trainer cards, retreat
              your Active pokemon and use Abilities.
            </li>
            <li>3. Attack. Then, end your turn. </li>
          </ul>
        </p>
        <p>
          For more detailed instructions, the{" "}
          <a
            href="https://www.pokemon.com/static-assets/content-assets/cms2/pdf/trading-card-game/rulebook/twm_rulebook_en.pdf"
            target="blank"
          >
            rulebook{" "}
          </a>
          for the TCG game contains all the information you need to get started
          and more.
        </p>
        <p>
          <Image
            className={styles.img}
            src="/images/kids-play-tcg.png"
            layout="responsive"
            height={362}
            width={602}
            alt="kids playing at tcg tournament"
          />
        </p>
      </div>
    </div>
  );
}

export default pokemedia;
