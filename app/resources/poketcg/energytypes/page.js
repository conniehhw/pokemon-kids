import React from "react";
// import styles from "../pokemedia/pokemedia.module.css";
import styles from "../../pokemedia/pokemedia.module.css";
// import Badge from "react-bootstrap/Badge";
import Image from "next/image";
import Link from "next/link";

function energytypes() {
  return (
    <div>
      <div>
        <ul className={styles.breadcrumb}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/resources">Resources</a>
          </li>
          <li>
            <a href="/resources/poketcg">TCG</a>
          </li>
          <li>Energy Types</li>
          {/*<li>Italy</li> */}
        </ul>
      </div>
      <div className={styles.grid}>
        <div>
          {" "}
          <Image
            className={styles.img}
            src="/images/pokemon-type.png"
            layout="responsive"
            height={160}
            width={390}
            alt="energy types"
          />
        </div>
      </div>
      <div className={styles.content}>
        <div>
          <div>
            <h2>Energy Types</h2>
            <p>
              Pokémon Knock Out opposing Pokémon by using attacks or Abilities.
              To power their attacks, Pokémon need Energy cards.
            </p>
          </div>
        </div>
        {/* <div>Testing 1</div>
        <div>testing 1</div>
        <div>testing 2</div> */}
      </div>
    </div>
  );
}

export default energytypes;
