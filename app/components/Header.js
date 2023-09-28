import React from "react";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import styles from "../page.module.css";
// import Container from "./container";
import Image from "next/image";

function Header() {
  return (
    <Nav className={styles.header}>
      <Image
        src="/images/pokemon-logo.png" // Route of the image file
        height={74} // Desired size with correct aspect ratio
        width={176} // Desired size with correct aspect ratio
        alt="Pokemon Logo"
      />
      <div className={styles.nav}>
        <Link href="/">
          <p>Back to Home </p>
        </Link>
        <Link href="/about">
          <p>About </p>
        </Link>
        <p>
          <Link href="/pokedex">Pokedex </Link>
        </p>
        <p>
          <Link href="/resources">Resources </Link>
        </p>
      </div>
    </Nav>
  );
}

export default Header;
