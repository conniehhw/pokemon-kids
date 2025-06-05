import styles from "../pokecenter/pokecenter.module.css";
import Image from "next/image";

// Page function: Pokemon Centers in game and real bricks & mortor locations

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
            <li>Pokémon Centers</li>
          </ul>
        </div>

        <div className={styles.content}>
          <div>
            <div>
              <h2>Pokémon Centers</h2>
              <h4>An important destination for trainers, Pokémon & fans</h4>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <div>Pokémon Centers Inside the Pokémon World</div>
        </div>

        <div className={styles.sectioncopy}>
          <div className={styles.container}>
            <div className={styles.sectionText}>
              In Pokémon world, the Pokémon Center is where characters and
              Pokémon can heal after battle. Every center has a Nurse Joy to
              help Pokémon recover their strength. Pokémon centers are also
              gathering centers for trainers with access to tools to help their
              journeys as well as food and lodging. In the games series, Poke
              Marts are also featured inside Pokémon Centers, where supplies can
              be purchased to help with Pokémon training, including potions and
              healing items.
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
                  <a
                    href="https://pokemon.fandom.com/wiki/Pok%C3%A9mon_Wiki"
                    target="_blank"
                  >
                    Pokémon.fandom.com)
                  </a>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>

        <div className={styles.section}>
          <div>Pokémon Centers in Real Life</div>
        </div>

        <div className={styles.sectioncopy}>
          <div className={styles.container}>
            <div className={styles.sectionText}>
              There are also real life Pokémon Centers fans can visit! Pokémon
              Centers are official shops where you can find original and
              exclusive Pokémon merchandise such as your favourite plushie,
              stationery, cards, key chains and much more.
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
                <i>Pokémon Center Shibuya</i>
              </figcaption>
            </figure>
          </div>
        </div>

        <div className={styles.sectioncopy}>
          <div className={styles.container}>
            <div className={styles.sectionText}>
              The first Pokémon Center store opened in Tokyo, April 1998. There
              are 17 Pokémon Center locations in Japan, each one is based on a
              different concept with special events such as Pokémon Design Lab
              where you can design your own T-shirt, life size characters,
              trading card and game stations, touch screen Pokedex and much
              more.
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
                <i>Pokémon Center Tokyo DX & Pokémon Cafe</i>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

      {/* grid container to organize images */}
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
              Pokémon Center at Sky Tree Town
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
              Pokémon Center Mega Tokyo & Pikachu Sweets
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
              Pokémon Center Kyoto
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
                official online shop Pokémon Center.
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
