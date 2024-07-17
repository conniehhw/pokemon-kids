import React from "react";
import styles from "../poketcg/poketcg.module.css";
import Image from "next/image";
import { LoremIpsum } from "react-lorem-ipsum";

function poketcg() {
  return (
    <div className={styles.main}>
      <div>
        <ul className={styles.breadcrumb}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/resources">Resources</a>
          </li>
          <li>TCG</li>
        </ul>
      </div>

      <div className={styles.grid}>
        <div>
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
      {/* <div>Photo by Thimo Pedersen on Unsplash</div> */}

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
      </div>

      <div className={styles.section}>
        <div>The Cards</div>
      </div>

      <div className={styles.sectioncopy}>
        <p classNamer={styles.clearfix}>
          {/* Each player builds a deck of 60 cards which include Pokemon
          characters, energy cards and supporting cards. Pokemon cards will list
          the specie's abilities, attacks and the numeric damage it will
          inflict. */}
          {/* </p>
        <p> */}
          <Image
            className={styles.imgFloatTest}
            src="/images/card-deck.png"
            // layout="responsive"
            height={94}
            width={225}
            alt="card deck"
          />
          Each player builds a deck of 60 cards which include Pokemon
          characters, energy cards and supporting cards. Pokemon cards will list
          the specie's abilities, attacks and the numeric damage it will
          inflict.
        </p>
      </div>

      <div className={styles.section}>
        <div>Pokemon, Energy & Trainer</div>
      </div>

      <div className={styles.sectioncopy}>
        <div className={styles.subtitle}>Pokemon Cards</div>
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
            alt="pokemon card evolutions"
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
        <div className={styles.subtitle}>Energy Cards</div>
        <p className={styles.clearfix}>
          {/* Most of the time, Pokemon can't attack without Energy cards. You'll
          need to match the symbols of the attack cost to the Energy card, but
          any kind of Energy can be used for the colourless/normal energy. */}
          <Image
            className={styles.imgFloatTest1}
            src="/images/energy-card-water.png"
            // layout="responsive"
            height={702}
            width={522}
            alt="Water Energy Card"
          />
          Most of the time, Pokemon can't attack without Energy cards. You'll
          need to match the symbols of the attack cost to the Energy card, but
          any kind of Energy can be used for the colourless/normal energy.
        </p>
      </div>

      <div className={styles.sectioncopy}>
        <div className={styles.subtitle}>Trainer Cards</div>
        <p className={styles.clearfix}>
          {/* Trainer cards represent the Items, Supporters, and Stadiums a Trainer
          can use in battle. You can see the specific Trainer subtype in the
          upper-right corner and any special rules for that subtype at the
          bottom of the card.
        </p> */}
          <Image
            className={styles.imgFloatTest2}
            src="/images/trainer-cards.png"
            // layout="responsive"
            height={201}
            width={300}
            alt="Trainer Cards"
          />
          Trainer cards represent the Items, Supporters, and Stadiums a Trainer
          can use in battle. You can see the specific Trainer subtype in the
          upper-right corner and any special rules for that subtype at the
          bottom of the card.
        </p>
      </div>

      <div className={styles.section}>
        <div>Building Your Deck</div>
      </div>
      <div className={styles.sectioncopy}>
        <p className={styles.clearfix}>
          <Image
            className={styles.imgFloatTest2}
            src="/images/pokemon-card-deck.png"
            // layout="responsive"
            height={94}
            width={225}
            alt="card deck"
          />
          Like building your team - you need your players, coaches and sometimes
          gear. To build your deck around a type of Pokemon such as the Electric
          Pokemons - you would need: 12 pokemon cards, 14 energy cards and 34
          trainer cards ~ a mix of Items, Supporters and Stadiums.
          {/* <ul>
            <li>12 pokemon cards</li>
            <li>14 energy cards</li>
            <li>
              34 Trainer cards ~ A mix of Items, Supporters, and Stadiums.
            </li>
          </ul> */}
        </p>
      </div>

      <div className={styles.section}>
        <div>Setting Up the Game</div>
      </div>

      <div className={styles.sectioncopy}>
        <p className={styles.clearfix}>
          <Image
            className={styles.imgFloatTest2}
            src="/images/tcg-layout-board.png"
            // layout="responsive"
            height={362}
            width={602}
            alt="tcg game board"
          />
          Layout your cards; each player will have the same set up on their
          respective sides. There are 5 areas: Bench, Active, Deck, Prize Cards
          and a Discard Pile. For help with setting up your first Pokemon
          Trading Card Game, visit the official Pokemon website to{" "}
          <a
            href="https://tcg.pokemon.com/en-us/learn-to-play/"
            target="_blank"
          >
            {" "}
            view a quick video
          </a>
          .
        </p>
      </div>

      <div className={styles.sectioncopy}>
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
        To win the game, you will need to have a strategy and a plan. There are
        3 ways to win a game:
        <ul>
          <li>i) Collect all of your Prize cards or</li>
          <li>ii) Knock out all of your opponent's Pokemon in play or</li>
          <li>iii) If your opponent has no more cards in their deck.</li>
        </ul>
      </div>

      <div className={styles.sectioncopy}>
        Parts of a Turn Each turn has 3 main parts:
        <ul>
          <li>1. Draw a card.</li>
          <li>
            2. Do any actions; put Basic Pokemon cards onto your bench, evolve
            your Pokemon, attach Energy cards, Play Trainer cards, retreat your
            Active pokemon and use Abilities.
          </li>
          <li>3. Attack. Then, end your turn. </li>
        </ul>
        <p>
          For more detailed instructions, the{" "}
          <a
            href="https://www.pokemon.com/static-assets/content-assets/cms2/pdf/trading-card-game/rulebook/twm_rulebook_en.pdf"
            target="_blank"
          >
            rulebook{" "}
          </a>
          for the TCG game contains all the information you need to get started
          and more.
        </p>
        <Image
          className={styles.img}
          src="/images/kids-play-tcg.png"
          layout="responsive"
          height={362}
          width={602}
          alt="kids playing at tcg tournament"
        />
      </div>

      {/* <div className={styles.section}>
        <div>Float Right</div>
      </div>

      <div className={styles.sectioncopy}>
        <p className={styles.clearfix}>
      
          <Image
            className={styles.imgFloatTest}
            src="/images/card-deck.png"
    
            height={94}
            width={225}
            alt="card deck"
          />
          In this example, the image will float to the right in the paragraph,
          and the text in the paragraph will wrap around the image.
        </p>
      </div> */}
    </div>
  );
}

export default poketcg;
