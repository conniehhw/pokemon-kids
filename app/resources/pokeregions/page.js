import React from "react";
// import styles from "../pokemedia/pokemedia.module.css";
import styles from "../pokeregions/pokeregions.module.css";
// import Badge from "react-bootstrap/Badge";
import Image from "next/image";
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
