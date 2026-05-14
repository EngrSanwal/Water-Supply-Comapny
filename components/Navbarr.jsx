"use client";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Link from "next/link";

import { PiWhatsappLogoDuotone } from "react-icons/pi";

import { usePathname } from "next/navigation";

import { useLocale, useTranslations } from "next-intl";

import React from "react";

const Navbarr = () => {

  const pathname = usePathname();

  const t = useTranslations("navbar");

  const locale = useLocale();

  const activeStyle = {
    color: "#007bff",
    textDecoration: "underline",
    fontWeight: "600"
  };

  return (

    <Navbar expand="lg" className="bg-body-tertiary">

      <Container fluid>

        <Navbar.Brand href="#">
          ArabZone
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">

          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: "150px" }}
            navbarScroll
          >

            <Nav.Link
              as={Link}
              href={`/${locale}`}
              className="text-secondary"
              style={
                pathname === `/${locale}`
                  ? activeStyle
                  : {}
              }
            >
              {t("home")}
            </Nav.Link>

            <Nav.Link
              as={Link}
              href={`/${locale}/about`}
              className="text-secondary"
              style={
                pathname === `/${locale}/about`
                  ? activeStyle
                  : {}
              }
            >
              {t("about")}
            </Nav.Link>

            <Nav.Link
              as={Link}
              href={`/${locale}/products`}
              className="text-secondary"
              style={
                pathname === `/${locale}/products`
                  ? activeStyle
                  : {}
              }
            >
              {t("products")}
            </Nav.Link>

            <Nav.Link
              as={Link}
              href={`/${locale}/facilities`}
              className="text-secondary"
              style={
                pathname === `/${locale}/facilities`
                  ? activeStyle
                  : {}
              }
            >
              {t("facilities")}
            </Nav.Link>

            <Nav.Link
              as={Link}
              href={`/${locale}/contact`}
              className="text-secondary"
              style={
                pathname === `/${locale}/contact`
                  ? activeStyle
                  : {}
              }
            >
              {t("contact")}
            </Nav.Link>

          </Nav>

          <PiWhatsappLogoDuotone
            style={{ width: "30px", height: "60px" }}
          />

        </Navbar.Collapse>

      </Container>

    </Navbar>
  );
};

export default Navbarr;