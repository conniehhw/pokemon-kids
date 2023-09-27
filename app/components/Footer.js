import React from "react";
// import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import Container from "./container";
// import Image from "next/image";

function Footer() {
  return (
    <Container>
      <footer>
        Copyright &copy; Your website 2023
        <Link href="/pokedex"> Pokedex </Link>
        <Link href="/about">About </Link>
        {/* <Nav expand="lg" className="bg-body-tertiary">
        <Image
          src="/images/pokemon-logo.png" // Route of the image file
          height={75} // Desired size with correct aspect ratio
          width={176} // Desired size with correct aspect ratio
          alt="Pokemon Logo"
        />
        <Link href="/">Back to Home </Link>
        <Link href="/about">About </Link>
      </Nav> */}
      </footer>
    </Container>
  );
}

export default Footer;
