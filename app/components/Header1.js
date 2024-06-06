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

function Header1() {
  return (
    <Navbar
      className="bg-white border-bottom"
      collapseOnSelect
      expand="sm"
      fixed="top"
    >
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

// <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
//   <Container>
//     <NavbarBrand>
//       <div className={styles.nav1}>
//         <div>
//           <Link href="/home">
//             <Image
//               src="/images/pokemon-logo.png"
//               height={75}
//               width={175}
//               alt="Pokemon Logo"
//             />
//           </Link>
//         </div>
//       </div>
//     </NavbarBrand>

//     <NavbarToggle aria-controls="responsive-navbar-nav" />
//     <NavbarCollapse id="responsive-navbar-nav">
//       <Nav className={styles.nav1}>
//         <div className={styles.nav1}>
//           <Link href="/about">About</Link>
//         </div>
//         <div>
//           <Link href="/pokedex">Pokedex</Link>
//         </div>

//         <div>
//           <Link href="/resources">Resources</Link>
//         </div>

//         <div>
//           <Link href="/contact">Contact</Link>
//         </div>
//       </Nav>
//     </NavbarCollapse>
//   </Container>
// </Navbar>

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
