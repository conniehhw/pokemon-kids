// import "bootstrap/dist/css/bootstrap.min.css";
import Image from "next/image";
import styles from "../components/components.module.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavbarBrand from "react-bootstrap/NavbarBrand";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarOffcanvas from "react-bootstrap/NavbarOffcanvas";
import OffcanvasHeader from "react-bootstrap/OffcanvasHeader";
import OffcanvasTitle from "react-bootstrap/OffcanvasTitle";
import OffcanvasBody from "react-bootstrap/OffcanvasBody";
import NavLink from "react-bootstrap/NavLink";

function Header1() {
  return (
    <>
      <Navbar expand="sm" fixed="top" className="bg-white border-bottom">
        <Container className={styles.container} fluid>
          <NavbarBrand href="/">
            <Image
              src="/images/pokemon-logo.png"
              height={75}
              width={175}
              alt="Pokemon Logo"
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

                <NavLink href="/PokedexHome">Pokedex</NavLink>
              </Nav>
            </OffcanvasBody>
          </NavbarOffcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Header1;
