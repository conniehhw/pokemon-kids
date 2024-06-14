import React from "react";
// import styles from "../pokemedia/pokemedia.module.css";
import styles from "../pokeregions/pokeregions.module.css";
// import Badge from "react-bootstrap/Badge";
import Image from "next/image";
import Link from "next/link";

function resources() {
  return (
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
        Grid
        <div>Test1</div>
        <div>Test2</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
        <div>Test</div>
      </div>
    </div>
  );
}

export default resources;
