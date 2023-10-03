import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";
import NavDropdown from "react-bootstrap/NavDropdown";

import Link from "next/link";
import styles from "../page.module.css";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" className={styles.navbar}>
      <Container>
        <NavbarBrand href="/">
          <Image
            src="/images/pokemon-logo.png"
            height={75}
            width={175}
            alt="Pikachu + Ash"
          />
        </NavbarBrand>
        <NavbarToggle aria-controls="responsive-navbar-nav" />
        <NavbarCollapse id="responsive-navbar-nav">
          {/* <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav> */}
          <Nav className="ms-auto">
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

            {/* <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link> */}
          </Nav>
        </NavbarCollapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;

// function Header() {
//   return (
//     <nav class="navbar navbar-expand-lg navbar-light bg-light">
//       <a class="navbar-brand" href="/">
//         <Image
//           src="/images/pokemon-logo.png"
//           height={75}
//           width={175}
//           alt="Pikachu + Ash"
//         />
//       </a>

//       <button
//         class="navbar-toggler"
//         type="button"
//         data-toggle="collapse"
//         data-target="#navbarNav"
//         // aria-controls="navbarNav"
//         aria-controls="responsive-navbar-Nav"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <span class="navbar-toggler-icon"></span>
//       </button>

//       <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
//         <ul class="navbar-nav">
//           <li class="nav-item">
//             <Link href="/" class="nav-link">
//               Home
//             </Link>
//           </li>
//           <li class="nav-item">
//             <Link href="/about" class="nav-link">
//               About
//             </Link>
//           </li>
//           <li class="nav-item">
//             <Link href="/pokedex" class="nav-link">
//               Pokedex
//             </Link>
//           </li>
//           <li class="nav-item">
//             <Link href="/resources" class="nav-link">
//               Resources
//             </Link>
//           </li>
//           <li class="nav-item">
//             <Link href="/contact" class="nav-link">
//               Contact
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Header;
