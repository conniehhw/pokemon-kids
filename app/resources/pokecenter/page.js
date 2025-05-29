import styles from "../pokecenter/pokecenter.module.css";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";
import { Style_Script } from "next/font/google";

function pokecenter() {
  return (
    <div>
      <div className={styles.main}>
        <div>
          <ul className={styles.breadcrumb}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/resources">Resources</a>
            </li>
            <li>Pokemon Centres</li>
          </ul>
        </div>

        <div className={styles.grid}>
          {/* <div>
            <Image
              className={styles.img}
              src="/images/pokemoncenter-anime.png"
              layout="responsive"
              height={280}
              width={564}
              alt="pokemoncenter in anime"
            />
          </div> */}
        </div>

        <div className={styles.content}>
          <div>
            <div>
              <h2>Pokecenters</h2>
              <h4>An important destination for trainers, pokemons & fans</h4>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <div>Pokemon Centers Inside the Pokemon World</div>
        </div>

        <div className={styles.sectioncopy}>
          <div className={styles.container}>
            <div className={styles.sectionText}>
              {/* <p> */}
              In Pokemon world, the Pokemon Center is where characters and
              Pokemons can heal after battle. Every center has a Nurse Joy to
              help Pokemons recover their strength. Pokemon centers are alos
              gathering centers for trainers with access to tools to help their
              journeys as well as food and lodging. In the games series, Poke
              Marts are also featured inside Pokemon Centers, where supplies can
              be purchased to help with Pokemon training, including potions and
              healing items.
              {/* </p> */}
            </div>
            <div className={styles.img}>
              <figure className={styles.figure}>
                <Image
                  className={styles.img}
                  src="/images/pokemon-center.png"
                  // layout="responsive"
                  height={392}
                  width={392}
                  alt="pokemoncenter anime"
                />

                <figcaption className={styles.figcaption}>
                  A scene from the video game "Pokémon: Let's Go, Eevee!". The
                  player character is inside a Pokémon Center, with a Nurse Joy
                  and a Chansey at the counter (Image from&nbsp;
                  <a href="https://Pokémon.fandom.com/wiki/Pokémon_CenterPokemon.fandom.com)">
                    Pokémon.fandom.com)
                  </a>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <div>Pokemon Centers in Real Life</div>
        </div>

        <div className={styles.sectioncopy}>
          <div className={styles.container}>
            <div className={styles.sectionText}>
              {/* <p className={styles.clearfix}> */}
              There are also real life Pokemon Centers fans can visit! Pokemon
              Centers are official shops where you can find original and
              exclusive Pokemon merchandise such as your favourite plushie,
              stationery, cards, key chains and much more.
              {/* </p> */}
            </div>
            <figure>
              <Image
                className={styles.imgFig}
                src="/images/pokemoncenter-shibuya.png"
                // layout="responsive"
                height={392}
                width={392}
                alt="pokemoncenter Shibuya"
              />
              <figcaption>
                <i>Pokemon Center Shibuya</i>
              </figcaption>
            </figure>
          </div>
        </div>

        <div className={styles.sectioncopy}>
          <div className={styles.container}>
            <div className={styles.sectionText}>
              {/* <p className={styles.clearfix}> */}
              The first Pokémon Center store opened in Tokyo, April 1998. There
              are 17 Pokemon Center locations in Japan, each one is based on a
              different concept with special events such as Pokemon Design Lab
              where you can design your own T-shirt, life size characters,
              trading card and game stations, touch screen Pokedex and much
              more.
              {/* </p> */}
            </div>
            <figure>
              <Image
                className={styles.imgFig}
                src="/images/pokemoncenter-tokyoDX.png"
                // layout="responsive"
                height={392}
                width={392}
                alt="pokemoncenter Tokyo DX"
              />
              <figcaption>
                <i>Pokemon Center Tokyo DX & Pokemon Cafe</i>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

      {/* <div className={styles.grid_small}> */}
      <div className={styles.container_grid}>
        <div className={styles.items}>
          <figure className={styles.figure}>
            <Image
              className={styles.imgFig}
              src="/images/pokemoncenter-skytree.png"
              // layout="responsive"
              height={392}
              width={392}
              alt="pokemoncenter skytree"
            />
            <figcaption className={styles.figCap}>
              Pokemon Center at Sky Tree Town
            </figcaption>
          </figure>
        </div>

        <div className={styles.items}>
          <figure className={styles.figure}>
            <Image
              className={styles.imgFig}
              src="/images/pokemoncenter-megatokyo.png"
              // layout="responsive"
              height={392}
              width={392}
              alt="pokemoncenter mega tokyo"
            />
            <figcaption className={styles.figCap}>
              Pokemon Center Mega Tokyo & Pikachu Sweets
            </figcaption>
          </figure>
        </div>

        <div className={styles.items}>
          <figure className={styles.figure}>
            <Image
              className={styles.imgFig}
              src="/images/pokemoncenter-kyoto.png"
              // layout="responsive"
              height={392}
              width={392}
              alt="pokemoncenter Kyoto"
            />
            <figcaption className={styles.figCap}>
              Pokemon Center Kyoto
            </figcaption>
          </figure>
        </div>
      </div>

      <div className={styles.sectioncopy}>
        <div className={styles.container}>
          <div className={styles.sectionText}>
            <p className={styles.clearfix}>
              No plans to travel to Japan in the near future? Check out what is
              available at the{" "}
              <a href="https://www.pokemoncenter.com/en-ca" target="_blank">
                official online shop Pokemon Center.
              </a>
            </p>
          </div>
          <Image
            className={styles.img1}
            src="/images/pokemon-plush.png"
            // layout="responsive"
            height={392}
            width={392}
            alt="pokemoncenter plush"
          />
        </div>
      </div>
    </div>
  );
}

export default pokecenter;
