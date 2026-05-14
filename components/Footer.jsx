"use client";

import Image from "next/image";
import React from "react";
import { Container } from "react-bootstrap";
import logoimg from "@/public/assets/sweetwater.png";
import Link from "next/link";

import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaWhatsapp,
  FaArrowRight,
  FaPhoneAlt,
} from "react-icons/fa";

import { MdEmail } from "react-icons/md";

import { useTranslations } from "next-intl";

const Footer = () => {

  const t = useTranslations("footer");

  return (
    <>
      <Container fluid style={{ backgroundColor: "black", color: "white" }}>
        <div className="row py-5">
          <div className="col-md-2"></div>

          <div className="col-md-4 d-flex align-items-center">
            <h4 className="d-flex align-items-center gap-2 m-0">
              {t("connect")} <FaArrowRight size={35} />
            </h4>
          </div>

          <div className="col-md-4 d-flex align-items-center justify-content-center gap-3">

            <h1 style={{ margin: "0.5rem" }}>
              <a
                href="https://www.facebook.com/share/19faiqTX35/"
                style={{ color: "white", textDecoration: "none" }}
              >
                <FaFacebook size={40} />
              </a>
            </h1>

            <h1 style={{ margin: "0.5rem" }}>
              <a
                href="https://www.instagram.com/pak_mela?igsh=MWNub3pmMjdraTRvYg=="
                style={{ color: "white", textDecoration: "none" }}
              >
                <FaInstagram size={40} />
              </a>
            </h1>

            <h1 style={{ margin: "0.5rem" }}>
              <a
                href="https://youtube.com/playlist?list=PL7RXOAih98ALpaFawFbPY_jzfXeHY9wSn&si=aGtMxJgCjDXmga9Y"
                style={{ color: "white", textDecoration: "none" }}
              >
                <FaYoutube size={40} />
              </a>
            </h1>

            <h1 style={{ margin: "0.5rem" }}>
              <a
                href="https://linkedin.com"
                style={{ color: "white", textDecoration: "none" }}
              >
                <FaLinkedin size={40} />
              </a>
            </h1>

            <h1 style={{ margin: "0.5rem" }}>
              <a
                href="https://chat.whatsapp.com/EvStouxMRpSIMJP8zmzcTu?mode=gi_t"
                style={{ color: "white", textDecoration: "none" }}
              >
                <FaWhatsapp size={40} />
              </a>
            </h1>

          </div>

          <div className="col-md-2"></div>
        </div>

        <div className="row">
          <div className="col-md-2"></div>

          <div className="col-md-4">
            <div className="ratio ratio-16x9" style={{ marginBottom: "30px" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3539.6600997641726!2d41.73665387545924!3d27.479839376313677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjfCsDI4JzQ3LjQiTiA0McKwNDQnMjEuMiJF!5e0!3m2!1sen!2s!4v1778329186627!5m2!1sen!2s"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className="col-md-6">
            <h4 style={{ margin: "2rem 0 2rem 0" }}>
              {t("contact")}
            </h4>

            <h5 className="d-flex align-items-center">
              <FaPhoneAlt className="me-2" />
              0325-6992358, 0310-7189909
            </h5>

            <h5
              className="d-flex align-items-center"
              style={{ margin: "1rem 0 1rem 0" }}
            >
              <MdEmail className="me-2" />

              <a
                href="mailto:ceo.company@gmail.com"
                style={{ color: "white", textDecoration: "none" }}
              >
                ceo.company@gmail.com
              </a>
            </h5>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Footer;