"use client";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import { PiWhatsappLogoDuotone } from "react-icons/pi";
import { usePathname } from "next/navigation";
import React from 'react'

const Navbarr = () => {
  const pathname = usePathname();
  
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "150px" }}
            navbarScroll
          >
            <Nav.Link as={Link} href="/" className="text-secondary" style={pathname === "/" ? { color: "#007bff", textDecoration: "underline" } : {}}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} href="/about" className="text-secondary" style={pathname === "/about" ? { color: "#007bff", textDecoration: "underline" } : {}}>
              About Us
            </Nav.Link>
             <Nav.Link as={Link} href="/products" className="text-secondary" style={pathname === "/products" ? { color: "#007bff", textDecoration: "underline" } : {}}>
              Products & Services
            </Nav.Link>
             <Nav.Link as={Link} href="/facilities" className="text-secondary" style={pathname === "/facilities" ? { color: "#007bff", textDecoration: "underline" } : {}}>
             Facilities
            </Nav.Link>
             <Nav.Link as={Link} href="/gallery" className="text-secondary" style={pathname === "/gallery" ? { color: "#007bff", textDecoration: "underline" } : {}}>
              Gallery
            </Nav.Link>
             <Nav.Link as={Link} href="/contact" className="text-secondary" style={pathname === "/contact" ? { color: "#007bff", textDecoration: "underline" } : {}}>
              Contact Us
            </Nav.Link>
          </Nav>
          <PiWhatsappLogoDuotone style={{ width: "30px", height: "60px" }} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarr