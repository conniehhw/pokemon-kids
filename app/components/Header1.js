// import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import Link from "next/link";
import styles from "../components/components.module.css";

// import "bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import Offcanvas from "react-bootstrap/Offcanvas";
import NavbarOffcanvas from "react-bootstrap/NavbarOffcanvas";
import OffcanvasHeader from "react-bootstrap/OffcanvasHeader";
import OffcanvasTitle from "react-bootstrap/OffcanvasTitle";
import OffcanvasBody from "react-bootstrap/OffcanvasBody";
import NavLink from "react-bootstrap/NavLink";

function Header1() {
  return (
    <>
      <Navbar expand="sm" fixed="top" className="bg-white border-bottom">
        {/* <Container fluid> */}
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
          <NavbarOffcanvas placement="end">
            <OffcanvasHeader closeButton>
              <OffcanvasTitle>Pokemon</OffcanvasTitle>
            </OffcanvasHeader>
            <OffcanvasBody>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/about">About</NavLink>
                <NavLink href="/resources">Resources</NavLink>
                <NavLink href="/pokedex">Pokedex</NavLink>
              </Nav>
            </OffcanvasBody>
          </NavbarOffcanvas>
        </Container>
      </Navbar>
    </>

    // <Navbar
    //   className="bg-white border-bottom"
    //   collapseOnSelect
    //   expand="sm"
    //   fixed="top"
    // >
    //   <Container className={styles.container}>
    //     <NavbarBrand href="/">
    //       <Image
    //         src="/images/pokemon-logo.png"
    //         height={75}
    //         width={175}
    //         alt="Pikachu + Ash"
    //       />
    //     </NavbarBrand>

    //     <NavbarToggle />
    //     <NavbarCollapse className="justify-content-end">
    //       <Navbar className={styles.navbar}>
    //         <Link href="/" class="nav-link">
    //           Home
    //         </Link>

    //         <Link href="/about" class="nav-link">
    //           About
    //         </Link>

    //         <Link eventKey={2} href="/resources" class="nav-link">
    //           Resources
    //         </Link>

    //         <Link eventKey={2} href="/pokedex" class="nav-link">
    //           Pokedex
    //         </Link>
    //       </Navbar>
    //     </NavbarCollapse>
    //   </Container>
    // </Navbar>
  );
}

export default Header1;

/* <heer className={styles.header1}>
        <div class="grid-item-brand">
          <a href="#" class="logo">
            <img src="logo.png" alt="Amazon" />
          </a>
        </div> */

/* <div class="grid-item-search">
          <input
            type="text"
            class="search-input"
            placeholder="Search for products"
          />
          <button class="search-button">
            <img
              src="https://img.icons8.com/?size=512&id=7695&format=png"
              alt=""
            />
          </button>
        </div> */

/* <div class="grid-item-account">
          <a href="#" class="nav-link">
            Hello, Sign in
          </a>

          <a href="#" class="nav-link cart-link">
            Cart
            <span class="cart-count">0</span>
          </a>
        </div>
      </header> */
