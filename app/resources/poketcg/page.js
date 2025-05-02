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
        {/* <div>
          <Image
            className={styles.img}
            src="/images/tradingcards-banner.png"
            layout="responsive"
            height={160}
            width={390}
            alt="trading cards banner"
          />
        </div> */}
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
        <div className={styles.container}>
          <Image
            className={styles.img}
            src="/images/card-deck-char.png"
            // layout="responsive"
            height={400}
            width={400}
            alt="card deck"
          />
          <div className={styles.sectionText}>
            Each player builds a deck of 60 cards which include Pokemon
            characters, energy cards and supporting cards. Pokemon cards will
            list the specie's abilities, attacks and the numeric damage it will
            inflict.
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <div>Pokemon, Energy & Trainer Cards</div>
      </div>
      {/* <div className={styles.subtitle}>Pokemon Cards</div> */}

      <div className={styles.sectioncopy}>
        <div className={styles.container}>
          <Image
            className={styles.img}
            src="/images/pokemon-card.png"
            // layout="responsive"
            height={201}
            width={601}
            alt="pokemon card evolutions"
          />

          <div className={styles.sectionText}>
            <h6>Pokemon Cards</h6>
            <p>
              These cards shown here are Basic, Stage 1 or Stage 2 Pokémon. Look
              at the upper-left corner and you will see the Pokémon’s Stage and
              the Pokémon it evolves from, if any.
            </p>

            <p>
              Learn more about all the{" "}
              <a href="/resources/poketcg/pokecard" target="blank">
                parts of a Pokémon Card
              </a>{" "}
              and where to find its name, evolved form, hit points (HP), type,
              attacks, damage, weaknesses and much more.
            </p>
          </div>
        </div>
      </div>

      {/* <div className={styles.section}> */}
      {/* <div className={styles.subtitle}>Energy Cards</div> */}
      <div className={styles.sectioncopy}>
        <div className={styles.container}>
          <Image
            className={styles.img}
            src="/images/energy-cards.png"
            // layout="responsive"
            height={530}
            width={713}
            alt="Energy Cards"
          />
          <div className={styles.sectionText}>
            <h6>Energy Cards</h6>
            <p>
              Most of the time, Pokemon can't attack without Energy cards.
              You'll need to match the symbols of the attack cost to the Energy
              card, but any kind of Energy can be used for the colourless/normal
              energy.
            </p>
          </div>
        </div>
      </div>
      {/* </div> */}

      {/* <div className={styles.sectioncopy}> */}
      {/* <div className={styles.subtitle}>Trainer Cards</div> */}
      <div className={styles.sectioncopy}>
        <div className={styles.container}>
          <Image
            className={styles.img}
            src="/images/trainer-cards.png"
            // layout="responsive"
            height={150}
            width={350}
            alt="Trainer Cards"
          />
          <div className={styles.sectionText}>
            <h6>Trainer Cards</h6>
            <p>
              {" "}
              Trainer cards represent the Items, Supporters, and Stadiums a
              Trainer can use in battle. You can see the specific Trainer
              subtype in the upper-right corner and any special rules for that
              subtype at the bottom of the card.
            </p>
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <div>Building Your Deck</div>
      </div>
      <div className={styles.sectioncopy}>
        <div className={styles.container}>
          <Image
            className={styles.imgShrink}
            src="/images/build-card-deck.png"
            // layout="responsive"
            height={1340}
            width={1140}
            alt="card deck"
          />
          <div className={styles.sectionText}>
            Like building your team - you need your players, coaches and
            sometimes gear. To build your deck around a type of Pokemon such as
            a Water-type deck - you would need for example: 15 pokemon cards, 9
            energy cards and 36 trainer cards ~ a mix of Items, Supporters and
            Stadiums.
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <div>Setting Up the Game</div>
      </div>

      <div className={styles.sectioncopy}>
        <div className={styles.container}>
          <Image
            className={styles.imgShrink}
            src="/images/playmat.png"
            // layout="responsive"
            height={362}
            width={602}
            alt="tcg game board"
          />
          <div className={styles.sectionText}>
            Layout your cards; each player will have the same set up on their
            respective sides. There are 5 areas: Bench, Active, Deck, Prize
            Cards and a Discard Pile. For help with setting up your first
            Pokemon Trading Card Game, visit the official Pokemon website to{" "}
            <a
              // href="https://tcg.pokemon.com/en-us/learn-to-play/"
              href="https://tcg.pokemon.com/en-us/faq-video-series/"
              target="_blank"
            >
              {" "}
              view the video series
            </a>{" "}
            or to follow along with this{" "}
            <a href="https://tcg.pokemon.com/en-us/learn/" target="_blank">
              {" "}
              quick start rulebook
            </a>
          </div>
        </div>
      </div>

      <div className={styles.sectioncopy}>
        <div className={styles.container}>
          <Image
            className={styles.imgShrink}
            src="/images/tcg-layout-easy.png"
            // layout="responsive"
            height={848}
            width={1300}
            alt="tcg layout easy level"
          />
          <div className={styles.sectionText}>
            The game boards are available in different game kits but you can
            also layout your cards without one or make your own like this
            printable{" "}
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
          </div>
        </div>
      </div>

      <div className={styles.section}>
        <div>Start your Game</div>
      </div>

      <div className={styles.sectioncopy}>
        <div className={styles.sectionText}>
          To win the game, you will need to have a strategy and a plan. There
          are 3 ways to win a game:
          <br></br>
          <br></br>
          <ul>
            <li>i) Collect all of your Prize cards or</li>
            <li>ii) Knock out all of your opponent's Pokemon in play or</li>
            <li>iii) If your opponent has no more cards in their deck.</li>
          </ul>
        </div>
      </div>

      <div className={styles.sectioncopy}>
        <div className={styles.container}>
          <Image
            className={styles.img}
            src="/images/kids-play-tcg.png"
            layout="responsive"
            height={362}
            width={602}
            alt="kids playing at tcg tournament"
          />
          <div className={styles.sectionText}>
            <p>Parts of a Turn - each turn has 3 main parts:</p>
            <ul>
              <li>1. Draw a card.</li>
              <li>
                2. Do any actions; put Basic Pokemon cards onto your bench,
                evolve your Pokemon, attach Energy cards, Play Trainer cards,
                retreat your Active pokemon and use Abilities.
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
              for the TCG game contains all the information you need to get
              started and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default poketcg;
