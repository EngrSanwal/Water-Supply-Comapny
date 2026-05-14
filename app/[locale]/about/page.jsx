"use client";

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import {
  FaTruck,
  FaDollarSign,
  FaRegRegistered,
  FaIdCard,
  FaShippingFast,
  FaGift,
  FaHeadset,
  FaLock,
  FaCheckCircle,
  FaUsers,
  FaGlobe,
  FaClock,
  FaStar,
  FaAward,
  FaShieldAlt
} from 'react-icons/fa';

import { useTranslations } from "next-intl";

const page = () => {

  const t = useTranslations("aboutpage");

  return (

    <Container fluid>

      <div className='row'>

        <div className='col-md-12'>

          <section
            className="hero-section py-5"
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
            }}
          >

            <Row className="align-items-center">

              <Col lg={8} className="mx-auto text-center text-white">

                <h1 className="display-4 fw-bold mb-3">
                  {t("heroTitle")}{" "}
                  <span style={{ color: '#FFD700' }}>
                    {t("heroHighlight")}
                  </span>
                </h1>

                <p className="lead mb-0">
                  {t("heroDesc")}
                </p>

              </Col>

            </Row>

          </section>

        </div>

      </div>

      <div className='row'>

        <div className='col-11'>

          <section className="py-5">

            <Row className="align-items-center g-5">

              <Col lg={6}>

                <h2 className="fw-bold mb-3">
                  {t("storyTitle")}{" "}
                  <span style={{ color: '#e67e22' }}>
                    {t("storyHighlight")}
                  </span>
                </h2>

                <div
                  style={{
                    width: '60px',
                    height: '4px',
                    background: '#e67e22',
                    marginBottom: '20px'
                  }}
                ></div>

                <p
                  className="text-muted"
                  style={{
                    fontSize: '1.1rem',
                    lineHeight: '1.8'
                  }}
                >
                  {t("storyDesc1")}
                </p>

                <p
                  className="text-muted"
                  style={{
                    fontSize: '1.1rem',
                    lineHeight: '1.8'
                  }}
                >
                  {t("storyDesc2")}
                </p>

                <div className="mt-4">

                  <div className="d-flex align-items-center mb-2">
                    <FaCheckCircle className="text-success me-2" />
                    <span>{t("feature1")}</span>
                  </div>

                  <div className="d-flex align-items-center mb-2">
                    <FaCheckCircle className="text-success me-2" />
                    <span>{t("feature2")}</span>
                  </div>

                  <div className="d-flex align-items-center">
                    <FaCheckCircle className="text-success me-2" />
                    <span>{t("feature3")}</span>
                  </div>

                </div>

              </Col>

              <Col lg={6}>

                <div className="bg-light p-4 rounded-4 shadow-sm">

                  <div className="row g-3">

                    <div className="col-6">

                      <div className="text-center p-3 bg-white rounded-3">

                        <h2 className="display-4 fw-bold text-primary">
                          98%
                        </h2>

                        <p className="text-muted mb-0">
                          {t("stat1")}
                        </p>

                      </div>

                    </div>

                    <div className="col-6">

                      <div className="text-center p-3 bg-white rounded-3">

                        <h2 className="display-4 fw-bold text-primary">
                          30K+
                        </h2>

                        <p className="text-muted mb-0">
                          {t("stat2")}
                        </p>

                      </div>

                    </div>

                    <div className="col-6">

                      <div className="text-center p-3 bg-white rounded-3">

                        <h2 className="display-4 fw-bold text-primary">
                          50+
                        </h2>

                        <p className="text-muted mb-0">
                          {t("stat3")}
                        </p>

                      </div>

                    </div>

                    <div className="col-6">

                      <div className="text-center p-3 bg-white rounded-3">

                        <h2 className="display-4 fw-bold text-primary">
                          80+
                        </h2>

                        <p className="text-muted mb-0">
                          {t("stat4")}
                        </p>

                      </div>

                    </div>

                  </div>

                </div>

              </Col>

            </Row>

          </section>

        </div>

      </div>

      <div className='row'>

        <div className='col-md-12'>

          <section className="py-5" style={{ background: '#f8f9fa' }}>

            <Container>

              <Row className="g-4">

                <Col md={6}>

                  <div className="p-4 bg-white rounded-4 shadow-sm h-100 text-center">

                    <div
                      className="icon-wrapper mx-auto mb-3"
                      style={{
                        background: '#e67e22',
                        width: '70px',
                        height: '70px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <FaGlobe size={32} color="white" />
                    </div>

                    <h3 className="fw-bold mb-3">
                      {t("mission")}
                    </h3>

                    <p
                      className="text-muted"
                      style={{ lineHeight: '1.8' }}
                    >
                      {t("missionDesc")}
                    </p>

                  </div>

                </Col>

                <Col md={6}>

                  <div className="p-4 bg-white rounded-4 shadow-sm h-100 text-center">

                    <div
                      className="icon-wrapper mx-auto mb-3"
                      style={{
                        background: '#e67e22',
                        width: '70px',
                        height: '70px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <FaAward size={32} color="white" />
                    </div>

                    <h3 className="fw-bold mb-3">
                      {t("vision")}
                    </h3>

                    <p
                      className="text-muted"
                      style={{ lineHeight: '1.8' }}
                    >
                      {t("visionDesc")}
                    </p>

                  </div>

                </Col>

              </Row>

            </Container>

          </section>

        </div>

      </div>

      <div className='row'>

        <div className='col-md-12'>

          <section className="py-5">

            <Container>

              <h2 className="text-center fw-bold mb-2">

                {t("whyTitle")}{" "}

                <span style={{ color: '#e67e22' }}>
                  {t("whyHighlight")}
                </span>

              </h2>

              <p className="text-center text-muted mb-5">
                {t("whyDesc")}
              </p>

              <Row className="g-4">

                {[
                  {
                    icon: FaShieldAlt,
                    title: t("card1title"),
                    desc: t("card1desc"),
                    color: '#4CAF50'
                  },

                  {
                    icon: FaDollarSign,
                    title: t("card2title"),
                    desc: t("card2desc"),
                    color: '#FF9800'
                  },

                  {
                    icon: FaShippingFast,
                    title: t("card3title"),
                    desc: t("card3desc"),
                    color: '#2196F3'
                  },

                  {
                    icon: FaIdCard,
                    title: t("card4title"),
                    desc: t("card4desc"),
                    color: '#9C27B0'
                  },

                ].map((item, i) => (

                  <Col key={i} xs={6} md={4} lg={3}>

                    <div className="card h-100 text-center p-3 border-0 shadow-sm hover-card">

                      <div
                        className="mx-auto mb-3"
                        style={{
                          backgroundColor: `${item.color}15`,
                          width: '70px',
                          height: '70px',
                          borderRadius: '50%',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}
                      >
                        <item.icon size={32} color={item.color} />
                      </div>

                      <h5 className="fw-bold fs-6">
                        {item.title}
                      </h5>

                      <small className="text-muted">
                        {item.desc}
                      </small>

                    </div>

                  </Col>

                ))}

              </Row>

            </Container>

          </section>

        </div>

      </div>

      <div className='row'>

        <div className='col-md-12'>

          <section className="py-5">

            <Container>

              <div className="bg-warning bg-opacity-10 p-5 rounded-4 text-center">

                <h3 className="fw-bold mb-3">
                  {t("ctaTitle")}
                </h3>

                <p className="text-muted mb-4">
                  {t("ctaDesc")}
                </p>

                <button
                  className="btn btn-primary btn-lg px-5"
                  style={{
                    background: '#e67e22',
                    border: 'none'
                  }}
                >
                  {t("ctaBtn")}
                </button>

              </div>

            </Container>

          </section>

        </div>

      </div>

      <style jsx>{`
        .hover-card {
          transition: all 0.3s ease;
          cursor: pointer;
          background: white;
          border-radius: 16px;
        }

        .hover-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.12) !important;
        }

        @media (max-width: 768px) {
          .display-4 {
            font-size: 2rem;
          }

          .hover-card {
            padding: 1rem !important;
          }

          .hover-card h5 {
            font-size: 0.85rem;
          }

          .hover-card small {
            font-size: 0.7rem;
          }
        }

        @media (max-width: 576px) {

          .hero-section h1 {
            font-size: 1.8rem;
          }

          .bg-warning {
            padding: 2rem !important;
          }

        }
      `}</style>

    </Container>
  )
}

export default page;