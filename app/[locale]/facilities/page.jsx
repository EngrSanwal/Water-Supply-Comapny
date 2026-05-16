"use client";

import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaTint,
  FaHardHat,
  FaHome,
  FaTruck,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";
import Link from "next/link";
import { useParams } from "next/navigation";

import { useTranslations } from "next-intl";

const page = () => {

  const t = useTranslations("facilitiesPage");
  const params = useParams();
const locale = params.locale;

  const services = [
    {
      title: t("sweetTitle"),
      icon: <FaTint fontSize="3rem" />,
      description: t("sweetDesc"),
      price: "1000L / 10,000L",
      color: "#2196f3",
    },

    {
      title: t("constructionTitle"),
      icon: <FaHardHat fontSize="3rem" />,
      description: t("constructionDesc"),
      price: "1000L / 50,000L",
      color: "#ff9800",
    },

    {
      title: t("domesticTitle"),
      icon: <FaHome fontSize="3rem" />,
      description: t("domesticDesc"),
      price: "500L / 3000L",
      color: "#4caf50",
    },
  ];

  return (
    <Container className="py-5">

      {/* Header */}

      <div className="row">

        <div className="col-md-12">

          <div className="text-center mb-5">

            <h1
              className="display-5 fw-bold"
              style={{ color: "#0a4275" }}
            >
              💧 {t("heroTitle")}
            </h1>

            <p className="lead text-secondary">
              {t("heroDesc")}
            </p>

          </div>

        </div>

      </div>

      <div className="row">

        {services.map((service, idx) => (

          <Col lg={4} md={6} className="mb-4" key={idx}>

            <Card className="h-100 shadow-sm border-0 text-center p-3">

              <div style={{ color: service.color }}>
                {service.icon}
              </div>

              <Card.Body>

                <Card.Title className="fw-bold fs-3">
                  {service.title}
                </Card.Title>

                <Card.Text className="text-secondary">
                  {service.description}
                </Card.Text>

                <h5
                  className="fw-bold"
                  style={{ color: service.color }}
                >
                  {service.price}
                </h5>

                <Link
  href={`/${locale}/order`}
  className="btn btn-primary mt-3 px-4"
>
  <FaTruck className="me-2" />
  {t("orderBtn")}
</Link>

              </Card.Body>

            </Card>

          </Col>

        ))}

      </div>

      <div className="row">

        <Col lg={6} className="mb-4">

          <Card className="border-0 shadow-sm text-center p-4">

            <FaPhoneAlt
              className="mx-auto mb-3"
              fontSize="2rem"
              color="#0a4275"
            />

            <h4>{t("supportTitle")}</h4>

            <p className="mb-2">
              {t("supportDesc")}
            </p>

            <h5 className="fw-bold">
              📞 0310-7189909
            </h5>

            <p className="mb-0 mt-3">
              {t("guide")}
            </p>

            <h5 className="fw-bold">
              📞 0325-6992358
            </h5>

          </Card>

        </Col>

        <Col lg={6} className="mb-4">

          <Card className="border-0 shadow-sm text-center p-4 bg-primary text-white">

            <FaEnvelope
              className="mx-auto mb-3"
              fontSize="2rem"
            />

            <h4>{t("ceoTitle")}</h4>

            <p>
              {t("ceoDesc")}
            </p>

            <a
              href="mailto:arabzonewater@gmail.com"
              className="text-white fw-bold fs-5"
            >
              arabzonewater@gmail.com
            </a>

          </Card>

        </Col>

      </div>

      <div className="row">

        <h6 className="mb-0">
          🚨 {t("footerText")}
        </h6>

      </div>

    </Container>
  );
}

export default page;