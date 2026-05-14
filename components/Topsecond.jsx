"use client";

import React from 'react';
import { Container } from 'react-bootstrap';
import Image from 'next/image';
import companyimg from '@/public/assets/organizationpic.png';

import { FaCheckCircle, FaTint, FaClock } from 'react-icons/fa';

import { useTranslations } from "next-intl";

const Topsecond = () => {

  const t = useTranslations("topsecond");

  return (
    <Container fluid>

      <div className='row'>

        <div className='col-md-6' style={{ margin: "3rem 0 3rem 0" }}>

          <div className="hero-content">

            <span className="badge bg-primary mb-3 px-3 py-2">
              {t("badge")}
            </span>

            <h1 className="display-4 fw-bold mb-4">
              {t("title1")} <br />
              <span className="text-primary">
                {t("title2")}
              </span>
            </h1>

            <p className="lead text-muted mb-4">
              {t("desc")}
            </p>

            <div className="features-list mb-4">

              <div className="d-flex align-items-center mb-2">
                <FaCheckCircle className="text-primary me-2" />
                <span>{t("feature1")}</span>
              </div>

              <div className="d-flex align-items-center mb-2">
                <FaTint className="text-primary me-2" />
                <span>{t("feature2")}</span>
              </div>

              <div className="d-flex align-items-center mb-2">
                <FaClock className="text-primary me-2" />
                <span>{t("feature3")}</span>
              </div>

            </div>

            <div className="button-group" style={{ display: "flex" }}>

              <button className="btn btn-primary me-3">
                {t("order")}
              </button>

              <button className="btn btn-outline-secondary">
                {t("support")}
              </button>

            </div>

          </div>

        </div>

        <div className='col-md-6' style={{ margin: "3rem 0 3rem 0" }}>

          <Image
            src={companyimg}
            alt="Hail Water Supply Company - Pure water facility"
            style={{ objectFit: "contain" }}
            className="responsive-image img-fluid"
            width={800}
            height={600}
            priority
          />

        </div>

      </div>

    </Container>
  );
};

export default Topsecond;