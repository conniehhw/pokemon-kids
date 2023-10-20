import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
// import NavbarOffcanvas from "react-bootstrap/NavbarOffcanvas";
// import NavbarText from "react-bootstrap/NavbarText";
import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";

function TextLinkExample() {
  return (
    <Navbar className="bg-white" collapseOnSelect expand="sm" fixed="top">
      <Container className={styles.container}>
        <NavbarBrand href="/">
          <Image
            src="/images/pokemon-logo.png"
            height={75}
            width={175}
            alt="Pikachu + Ash"
          />
        </NavbarBrand>

        <NavbarToggle />
        <NavbarCollapse className="justify-content-end">
          {/* <NavbarOffcanvas placement="end"> */}
          <Navbar className={styles.navbar}>
            <Link href="/" class="nav-link">
              Home
            </Link>

            <Link href="/about" class="nav-link">
              About
            </Link>

            {/* <Link href="#deets" class="nav-link">
              More deets
            </Link> */}

            <Link eventKey={2} href="/resources" class="nav-link">
              Resources
            </Link>

            <Link eventKey={2} href="/pokedex" class="nav-link">
              Pokedex
            </Link>
            {/* Signed in as: <a href="#login">Mark Otto</a> */}
          </Navbar>
          {/* </NavbarOffcanvas> */}
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
}

export default TextLinkExample;
