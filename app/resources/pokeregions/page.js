import React from "react";
// import styles from "../pokemedia/pokemedia.module.css";
import styles from "../pokeregions/pokeregions.module.css";
// import Badge from "react-bootstrap/Badge";
import Image from "next/image";
import PokemonCard from "../../components/PokemonCard";
import Link from "next/link";

function resources() {
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
          <li>Poke Regions</li>
        </ul>
      </div>

      <div className={styles.grid}>
        <div>
          <Image
            className={styles.img}
            src="/images/pokemon-regions.png"
            layout="responsive"
            height={140}
            width={350}
            alt="pokemon regions"
          />
        </div>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.box + " " + styles.box1}>
          <div className={styles.nested}>
            <Image
              className={styles.img}
              src="/images/pokemon-regions.png"
              layout="responsive"
              height={140}
              width={350}
              alt="pokemon regions"
            />
          </div>
          {/* <div className={styles.nested}>b</div>
          <div className={styles.nested}>c</div> */}
        </div>
        <div className={styles.box + " " + styles.box2}>
          <div className={styles.itemTest}>
            Item
            <div className={styles.pic}>
              {" "}
              <Image
                // className={styles.projectsimg}
                // className={styles.img}
                src="/images/pokeball.png"
                // layout="responsive"
                height={200}
                width={200}
                alt="Pokeball"
                className={styles.imgTest}
              />
            </div>
            <div className={styles.text}>
              text box: A parent's guide to the world of Pokemon.
            </div>
            <div className={styles.button}>Button</div>
          </div>
        </div>
        <div className={styles.box + " " + styles.box3}>
          <div className={styles.itemTest}>
            Item
            <div className={styles.pic}>
              {" "}
              <Image
                // className={styles.projectsimg}
                // className={styles.img}
                src="/images/pokeball.png"
                // layout="responsive"
                height={200}
                width={200}
                alt="Pokeball"
                className={styles.imgTest}
              />
            </div>
            <div className={styles.text}>
              text box: A parent's guide to the world of Pokemon. text box: A
              parent's guide to the world of Pokemon.text box: A parent's guide
              to the world of Pokemon.
            </div>
            <div className={styles.button}>Button</div>
          </div>
        </div>
        <div className={styles.box + " " + styles.box4}>
          <div className={styles.itemTest}>
            Item
            <div className={styles.pic}>
              {" "}
              <Image
                // className={styles.projectsimg}
                // className={styles.img}
                src="/images/pokeball.png"
                // layout="responsive"
                height={200}
                width={200}
                alt="Pokeball"
                className={styles.imgTest}
              />
            </div>
            <div className={styles.text}>
              text box: A parent's guide to the world of Pokemon.
            </div>
            <div className={styles.button}>Button</div>
          </div>
        </div>
        <div className={styles.box + " " + styles.box5}>Five</div>
      </div>

      {/* <PokemonCard /> */}

      {/* <div className={styles.grid}>
        Grid
        <div>Test1</div>
        <div>Test2</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
      </div> */}
    </div>
  );
}

export default resources;
