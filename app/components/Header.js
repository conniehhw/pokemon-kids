import React from "react";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import Container from "./container";
import Image from "next/image";

function Header() {
  return (
    <Container>
      <Nav>
        <Image
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
    </Container>
  );
}

export default Header;
