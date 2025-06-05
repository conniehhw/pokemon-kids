import React from "react";
import styles from "../pokecafe/pokecafe.module.css";
import Image from "next/image";

// Page function: Overview of Pokemon Cafe - locations, menu

function pokecafe() {
  return (
    <main className={styles.main}>
      <div>
        <ul className={styles.breadcrumb}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/resources">Resources</a>
          </li>
          <li>Pokémon Cafe</li>
        </ul>
      </div>

      <div className={styles.content}>
        <div>
          <div>
            <h2>Pokémon Cafe</h2>
            <h4>Enjoy a meal surrounded by your favourite Pokémon Friends</h4>
          </div>
        </div>
      </div>

      <div className={styles.sectioncopy}>
        <div className={styles.container}>
          <div className={styles.sectionText}>
            There are only two official Pokémon Cafes in the world! The first
            opened in 2018 and is located in Tokyo, Japan. The second location
            is in Osaka. If you are lucky, you may sometimes encounter a pop-up
            Pokémon Cafes.
          </div>
          <Image
            className={styles.img}
            src="/images/pokecafe-interior.png"
            // layout="responsive"
            height={251}
            width={502}
            alt="pokemon cafe interior"
          />
        </div>
      </div>

      <div className={styles.sectioncopy}>
        <div className={styles.subtitle}>Pokémon Themes</div>
        <div className={styles.container}>
          <div className={styles.sectionTextnoImg}>
            <p>
              Besides the Pokémon Menu, you will find small and large Pokémon
              figures to takes photos with, products you can purchase as
              souvenirs; such as plushies, cups, plates and also greet a giant
              Pokémon character during their visits in the dining area.
            </p>
            <p>
              You can find more visiting information at the official{" "}
              <a href="https://www.pokemon-cafe.jp/en/cafe/" target="_blank">
                Pokémon Cafe website.
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className={styles.container_grid}>
        <div className={styles.items}>
          <figure className={styles.figure}>
            <Image
              className={styles.imgFig}
              src="/images/pika-bulba-curry.png"
              // layout="responsive"
              height={380}
              width={380}
              alt="pika bulba curry
            "
            />
            <figcaption className={styles.figCap}>
              Pikachu and Bulbasaur&#39;s BBF Curry Plate
            </figcaption>
          </figure>
        </div>

        <div className={styles.items}>
          <figure className={styles.figure}>
            <Image
              className={styles.imgFig}
              src="/images/snorlax-plate.png"
              // layout="responsive"
              height={380}
              width={380}
              alt="snorlax plate"
            />
            <figcaption className={styles.figCap}>
              Snorlax&#39;s Tummy Filling Nap Lunch Plate
            </figcaption>
          </figure>
        </div>

        <div className={styles.items}>
          <figure className={styles.figure}>
            <Image
              className={styles.imgFig}
              src="/images/gengar-smoothie.png"
              // layout="responsive"
              height={380}
              width={380}
              alt="gengar smoothie"
            />
            <figcaption className={styles.figCap}>
              Gengar&#39;s Confuse Ray Smoothie
            </figcaption>
          </figure>
        </div>

        <div className={styles.items}>
          <figure className={styles.figure}>
            <Image
              className={styles.imgFig}
              src="/images/poke-latte.png"
              // layout="responsive"
              height={380}
              width={380}
              alt="poke latte"
            />
            <figcaption className={styles.figCap}>
              Choose Your Pokémon Latte{" "}
            </figcaption>
          </figure>
        </div>

        <div className={styles.items}>
          <figure className={styles.figure}>
            <Image
              className={styles.imgFig}
              src="/images/poke-parfait.png"
              // layout="responsive"
              height={380}
              width={380}
              alt="poke parfait"
            />
            <figcaption className={styles.figCap}>
              Pokémon Cafe&#39;s Berry Chocolate Parfait
            </figcaption>
          </figure>
        </div>
      </div>

      <div className={styles.sectioncopy}>
        <div className={styles.container}>
          <div className={styles.sectionTextNoImg}>
            <p>
              Remember to book a reservation if you decide to visit the cafe as
              it is quite popular.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default pokecafe;
