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
        className={styles.logo}
        src="/images/pokemon-logo.png" // Route of the image file
        height={75} // Desired size with correct aspect ratio
        width={176} // Desired size with correct aspect ratio
        alt="Pokemon Logo"
      />

      <Link href="/">Back to Home </Link>
      <Link href="/about">About </Link>
      <Link href="/pokedex">Pokedex </Link>
      <Link href="/resources">Resources </Link>
    </Nav>
  );
}

export default Header;
