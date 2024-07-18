import React from "react";
import styles from "../pokemedia/pokemedia.module.css";
// import Badge from "react-bootstrap/Badge";
import Image from "next/image";

function pokemedia() {
  return (
    <div className={styles.main}>
      <div>
        <div>
          <ul className={styles.breadcrumb}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/resources">Resources</a>
            </li>
            <li>Pokemon Universe</li>
          </ul>
        </div>

        <div className={styles.grid}>
          <div>
            <Image
              className={styles.img}
              src="/images/pokemon-media-banner.png"
              layout="responsive"
              height={140}
              width={350}
              alt="pokeball with black background"
            />
          </div>
        </div>
        {/* <div>Photo by Thimo Pedersen on Unsplash</div> */}

        <div className={styles.content}>
          <div>
            <div>
              <h2>More ways Pokemon!</h2>
              <h4>
                Besides collecting the cards, there are many other ways to enjoy
                Pokemon!
              </h4>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <div>Pokemon Universe</div>
        </div>

        <div className={styles.sectioncopy}>
          <div className={styles.subtitle}>Television & Films</div>
          <p>
            The first televsion animation launched in 1997. Since then, the
            series has expanded to 25 seasons. Adding to the series, is the
            latest released in 2023, titled "Pokemon Horizons".
          </p>
          <p className={styles.videowrapper}>
            <iframe
              className={styles.responsiveiframe}
              // width="350"
              // height="300"
              src="https://www.youtube-nocookie.com/embed/sq2RftrcEKc?si=qg7fiSyA7QGMwlUM/autoplay=1&mute=1&rel=0&border=0&modestbranding=1"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            {/* Add a warning /alert or something it will reroute to exteranl site Youtube for trailer */}
          </p>
          <p>
            As of 2020, there are 23 Pokemon films along with one live-action
            film, "Pokemon Detective Pikachu". With the popularity of the
            franchise, a stop-motion animation,{" "}
            <a href="https://www.netflix.com/ca/title/81186864" target="_blank">
              Pokemon Concierge"
            </a>{" "}
            premiered on Netflix in 2023. Visit the{" "}
            <a href="https://www.pokemon.com/us/animation" target="_blank">
              animation
            </a>{" "}
            page on the official website to learn more, including where to
            watch.
          </p>
        </div>

        <div className={styles.sectioncopy}>
          <div className={styles.subtitle}>Video Games</div>
          <p>
            {/* Add video link to Youtube for trailer */}
            Pokemon has several types of video games, some of which are played
            on Nintendo Game Devices or Consoles or on a tablet and mobile
            phone.
          </p>
          <p className={styles.videowrapper1}>
            {/* <p className={styles.videowrapper}> */}
            <iframe
              className={styles.responsiveiframe1}
              // width="350"
              // height="300"

              src="https://www.youtube.com/embed/dAQBo9BGRdA?si=OE2gFFz91pmcztxZ/autoplay=1&mute=1&rel=0&border=0&modestbranding=1"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            {/* Add a warning /alert or something it will reroute to exteranl site Youtube for trailer */}
          </p>
          <p>
            For instance, in{" "}
            <a
              href="https://www.pokemon.com/us/pokemon-video-games/pokemon-scarlet-and-pokemon-violet"
              target="_blank"
            >
              Pokemon Scarlet & Violet
            </a>
            , in this role playing game, the player catches and trades Pokemons
            and battle other Pokemon Trainers while exploring different regions.
          </p>
          {/* <div> */}
          <p className={styles.clearfix}>
            <Image
              className={styles.imgFloatTest1}
              src="/images/pokemon-go.png"
              // layout="responsive"
              height={481}
              width={582}
              alt="pokemon go"
            />
            Then there is popular{" "}
            <a
              href="https://www.pokemon.com/us/pokemon-video-games/pokemon-go"
              target="_blank"
            >
              Pokemon Go{" "}
              {/* Add a note to be careful of surroiunding when playing supervised*/}
            </a>
            mobile game which uses the phone's GPS together with augmented
            reality technology - allowing as though Pokemons appear around you,
            as you move your avatar within your real world surroundings. The
            main goal of the game to find and catch Pokemons.{" "}
          </p>

          <p className={styles.clearfix}>
            <Image
              className={styles.imgFloatTest}
              src="/images/pokemon-snap.png"
              // layout="responsive"
              height={481}
              width={582}
              alt="pokemon snap"
            />
            <a
              href="https://www.pokemon.com/us/pokemon-video-games/new-pokemon-snap"
              target="_blank"
            >
              Pokemon Snap{" "}
            </a>{" "}
            is a new adventure where you, the player explore the Lental region,
            research and encounter wild Pokemon as your snap photos for your
            album.
          </p>
          <p className={styles.imgFloatCopy}>
            <Image
              className={styles.imgFloatTest}
              src="/images/pokemon-caferemix.png"
              // layout="responsive"
              height={481}
              width={582}
              alt="pokemon cafe remix"
            />
            In the game
            <a href="https://cafemix.pokemon.com/en-us/" target="_blank">
              {" "}
              Pokemon Cafe Remix,
            </a>{" "}
            the player completes puzzles to create drinks and dishes to server
            at your Pokemon Cafe. You can find a full list of{" "}
            <a
              href="https://www.pokemon.com/us/pokemon-video-games/all-pokemon-games"
              target="_blank"
            >
              Pokemon games
            </a>{" "}
            on the official website.
          </p>
        </div>

        <div className={styles.sectioncopy}>
          <div className={styles.subtitle}>Books</div>
          <p>
            Other ways to immerse yourself in the Pokemon Universe is through
            reading.
          </p>
          <p>
            The Pokemon Visual Companion is a fact-packed illustrated guide to
            the animated series to learn more about characters like Ash,
            Professor Sycamore, essential gears and more. The Pokemon Essential
            Handbook series contain the latest list of all the Pokemons and
            their stats. Or follow their adventures in one of many chapter books
            collection.
          </p>
          <Image
            className={styles.imgFloatTest2}
            src="/images/pokemon-books.png"
            layout="responsive"
            height={231}
            width={452}
            alt="pokemon books"
          />
        </div>
      </div>
    </div>
  );
}

export default pokemedia;
{
  /* <div className={styles.grid}>
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
          <div>Photo by Thimo Pedersen on Unsplash</div>
        </div>
        <div className={styles.content}>
          <div>
            <div>
              <h2>Get Ready to Play!</h2>
              <h4>
                Trading Card Game (TCG), a 2-player game in which Trainers
                choose Pokemons to go to battle.{" "}
              </h4>
            </div>
          </div>
   
        </div>

        <div className={styles.section}>
          <div>The Cards</div>
        </div>
        <div className={styles.sectioncopy}>
          <p>
            Each player builds a deck of 60 cards which include Pokemon
            characters, energy cards and supporting cards. Pokemon cards will
            list the specie's abilities, attacks and the numeric damage it will
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
            corner and you will see the Pokémon’s Stage and the Pokémon it
            evolves from, if any.
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
            Trainer cards represent the Items, Supporters, and Stadiums a
            Trainer can use in battle. You can see the specific Trainer subtype
            in the upper-right corner and any special rules for that subtype at
            the bottom of the card.
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
            Like building your team - you need your players, coaches and
            sometimes gear.
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
            respective sides. There are 5 areas: Bench, Active, Deck, Prize
            Cards and a Discard Pile.
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
                2. Do any actions; put Basic Pokemon cards onto your bench,
                evolve your Pokemon, attach Energy cards, Play Trainer cards,
                retreat your Active pokemon and use Abilities.
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
            for the TCG game contains all the information you need to get
            started and more.
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
        </div> */
}
