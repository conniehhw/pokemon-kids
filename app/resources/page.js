import styles from "../resources/resources.module.css";
import Link from "next/link";
import Image from "next/image";

// Page Function - home page to house resources tiles

function Resources() {
  return (
    <main className={styles.main}>
      <div>
        <div>
          <ul className={styles.breadcrumb}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>Resources</li>
          </ul>
        </div>

        <div className={styles.grid}>
          <div className={styles.gridchild}>
            <div>
              <Link href="resources/poke101">
                <Image
                  className={styles.img}
                  src="/images/pokemon101.png"
                  layout="responsive"
                  height={200}
                  width={200}
                  alt="All Pokemon Visual"
                />
              </Link>
            </div>
            <div className={styles.text}>
              <Link href="resources/poke101">
                <h6>Pokémon 101</h6>
              </Link>
              <p>A parent's guide to the world of Pokémon.</p>
            </div>
          </div>

          <div className={styles.gridchild}>
            <div>
              <Link href="resources/poketcg">
                <Image
                  className={styles.img}
                  src="/images/tradingcards.png"
                  layout="responsive"
                  height={200}
                  width={200}
                  alt="Trading Cards"
                />
              </Link>
            </div>

            <div className={styles.text}>
              <Link href="resources/poketcg">
                {" "}
                <h6>Trading Card Game</h6>
              </Link>

              <p>Collections, types of cards and building decks.</p>
            </div>
          </div>

          {/* <div className={styles.gridchild}>
            <div>
              <Link href="resources/pokeregions">
                <Image
            
                  className={styles.img}
                  src="/images/pokemon-regions-icon.png"
                  a
                  href="resources/pokeregions"
                  layout="responsive"
                  height={200}
                  width={200}
                  alt="Regions"
                />
              </Link>
            </div>
            <div className={styles.text}>
              <h6>Regions</h6>
              <p>
                A guide to the Pokemon world; their home, language and more.
              </p>
            </div>
            <div className={styles.btnbox}>
              <Link href="resources/pokeregions">
                Explore regions

              </Link>
            </div>
          </div> */}

          <div className={styles.gridchild}>
            <div>
              <Link href="resources/pokemedia">
                <Image
                  className={styles.img}
                  src="/images/pokemon-media-icon.png"
                  layout="responsive"
                  height={200}
                  width={200}
                  alt="Pokemon Media"
                />
              </Link>
            </div>
            <div className={styles.text}>
              <Link href="resources/pokemedia">
                <h6>Pokémon Media</h6>
              </Link>

              <p>Even more Pokémon: tv, film, video games and books.</p>
            </div>
          </div>

          <div className={styles.gridchild}>
            <div>
              <Link href="resources/pokecenter">
                <Image
                  className={styles.img}
                  src="/images/pokemoncenter-animeicon.png"
                  layout="responsive"
                  height={200}
                  width={200}
                  alt="Pokemon Center"
                />
              </Link>
            </div>
            <div className={styles.text}>
              <Link href="resources/pokecenter">
                {" "}
                <h6>Pokémon Centers</h6>
              </Link>
              <p>An important destination for trainers, Pokémon and fans.</p>
            </div>
          </div>

          <div className={styles.gridchild}>
            <div>
              <Link href="resources/pokecafe">
                <Image
                  className={styles.img}
                  src="/images/pokemon-cafe-sign1.png"
                  layout="responsive"
                  height={200}
                  width={200}
                  alt="Pokemon Cafe Sign"
                />
              </Link>
            </div>
            <div className={styles.text}>
              <Link href="resources/pokecafe">
                {" "}
                <h6>Pokémon Cafe</h6>
              </Link>
              <p>A lunch date with your favourite Pokémon Friends.</p>
            </div>
          </div>
        </div>

        <figure className={styles.figure}>
          <figcaption className={styles.figcaption}>
            <i>
              Source of images: Trading Card Game photo by{" "}
              <a href="https://unsplash.com/@giorgiotrovato" target="_blank">
                Giorgio Trovato
              </a>{" "}
              on Unsplash, Pokémon Media image by{" "}
              <a
                href="https://pixabay.com/users/thor_deichmann-2306827/"
                target="_blank"
              >
                Thor_Deichmann
              </a>{" "}
              from pixabay, Pokémon Cafe photo from{" "}
              <a href="https://www.pokemon-cafe.jp/en/cafe/" target="_blank">
                https://www.pokemon-cafe.jp/en/cafe/
              </a>
            </i>
          </figcaption>
        </figure>
      </div>
    </main>
  );
}

export default Resources;
