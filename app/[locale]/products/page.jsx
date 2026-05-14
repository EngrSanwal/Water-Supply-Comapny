"use client";

import React, { useState } from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import {
  FaTint,
  FaHardHat,
  FaHome,
  FaTruck,
  FaCalendarCheck,
  FaRupeeSign,
  FaCheckCircle,
  FaClock
} from 'react-icons/fa';

import { useTranslations } from "next-intl";

const page = () => {

  const t = useTranslations("productsPage");

  const [activeTab, setActiveTab] = useState('sweet');

  const packages = {

    sweet: [
      {
        name: t("sweetBasic"),
        liters: "1000L",
        price: "999",
        delivery: t("weekly"),
        features: [
          t("sweetFeature1"),
          t("sweetFeature2"),
          t("sweetFeature3")
        ]
      },

      {
        name: t("sweetFamily"),
        liters: "3000L",
        price: "2799",
        delivery: t("biweekly"),
        features: [
          t("sweetFeature4"),
          t("sweetFeature5"),
          t("sweetFeature6")
        ]
      },

      {
        name: t("sweetBusiness"),
        liters: "10000L",
        price: "8999",
        delivery: t("daily"),
        features: [
          t("sweetFeature7"),
          t("sweetFeature8"),
          t("sweetFeature9")
        ]
      }
    ],

    construction: [
      {
        name: t("constructionSmall"),
        liters: "5000L",
        price: "3999",
        delivery: t("asneeded"),
        features: [
          t("constructionFeature1"),
          t("constructionFeature2"),
          t("constructionFeature3")
        ]
      },

      {
        name: t("constructionMedium"),
        liters: "20000L",
        price: "14999",
        delivery: t("daily"),
        features: [
          t("constructionFeature4"),
          t("constructionFeature5"),
          t("constructionFeature6")
        ]
      },

      {
        name: t("constructionLarge"),
        liters: "50000L",
        price: "34999",
        delivery: t("multipledaily"),
        features: [
          t("constructionFeature7"),
          t("constructionFeature8"),
          t("constructionFeature9")
        ]
      }
    ],

    domestic: [
      {
        name: t("domesticStarter"),
        liters: "500L",
        price: "599",
        delivery: t("weekly"),
        features: [
          t("domesticFeature1"),
          t("domesticFeature2"),
          t("domesticFeature3")
        ]
      },

      {
        name: t("domesticPlus"),
        liters: "1500L",
        price: "1599",
        delivery: t("twiceweekly"),
        features: [
          t("domesticFeature4"),
          t("domesticFeature5"),
          t("domesticFeature6")
        ]
      },

      {
        name: t("domesticPremium"),
        liters: "3000L",
        price: "2999",
        delivery: t("daily"),
        features: [
          t("domesticFeature7"),
          t("domesticFeature8"),
          t("domesticFeature9")
        ]
      }
    ]
  };

  const waterTypes = [

    {
      id: 'sweet',
      name: t("sweetWater"),
      icon: <FaTint />,
      color: '#1E88E5',
      desc: t("sweetDesc")
    },

    {
      id: 'construction',
      name: t("constructionWater"),
      icon: <FaHardHat />,
      color: '#F57C00',
      desc: t("constructionDesc")
    },

    {
      id: 'domestic',
      name: t("domesticWater"),
      icon: <FaHome />,
      color: '#43A047',
      desc: t("domesticDesc")
    }

  ];

  return (
    <>

      {/* Hero Section */}

      <section className="hero">

        <Container>

          <Row>

            <Col lg={7}>

              <h1>
                {t("heroTitle")}{" "}
                <span className="highlight">
                  {t("heroHighlight")}
                </span>
              </h1>

              <p>
                {t("heroDesc")}
              </p>

              <div className="hero-badges">

                <span>
                  <FaTruck /> {t("badge1")}
                </span>

                <span>
                  <FaCalendarCheck /> {t("badge2")}
                </span>

                <span>
                  <FaRupeeSign /> {t("badge3")}
                </span>

              </div>

            </Col>

            <Col lg={5}>

              <div className="contact-card" style={{marginTop:"2rem"}}>

                <h4>{t("customTitle")}</h4>

                <p>{t("customDesc")}</p>

              </div>

            </Col>

          </Row>

        </Container>

      </section>

      {/* Tab Navigation */}

      <section className="tabs-section">

        <Container>

          <div className="tabs-wrapper">

            {waterTypes.map((type) => (

              <button
                key={type.id}
                className={`tab-btn ${activeTab === type.id ? 'active' : ''}`}
                style={
                  activeTab === type.id
                    ? { borderBottomColor: type.color }
                    : {}
                }
                onClick={() => setActiveTab(type.id)}
              >

                <span style={{ color: type.color }}>
                  {type.icon}
                </span>

                <div>

                  <strong>{type.name}</strong>

                  <small>{type.desc}</small>

                </div>

              </button>

            ))}

          </div>

        </Container>

      </section>

      {/* Pricing Cards */}

      <section className="pricing">

        <Container>

          <Row className="g-4">

            {packages[activeTab].map((pkg, idx) => (

              <Col key={idx} md={6} lg={4}>

                <div className={`pricing-card ${idx === 1 ? 'popular' : ''}`}>

                  {idx === 1 && (
                    <div className="popular-badge">
                      {t("popular")}
                    </div>
                  )}

                  <h3>{pkg.name}</h3>

                  <div className="liters">
                    {pkg.liters}
                  </div>

                  <div className="delivery">
                    <FaClock /> {t("delivery")}: {pkg.delivery}
                  </div>

                  <ul className="features-list">

                    {pkg.features.map((feature, i) => (

                      <li key={i}>
                        <FaCheckCircle /> {feature}
                      </li>

                    ))}

                  </ul>

                  <button
                    className="order-btn"
                    style={{
                      backgroundColor: waterTypes.find(
                        t => t.id === activeTab
                      ).color
                    }}
                  >
                    {t("order")} →
                  </button>

                </div>

              </Col>

            ))}

          </Row>

        </Container>

      </section>

      {/* How It Works */}

      <section className="how-it-works">

        <Container>

          <h2>
            {t("howTitle")}{" "}
            <span className="highlight">
              {t("howHighlight")}
            </span>
          </h2>

          <Row className="steps">

            <Col md={3} sm={6}>

              <div className="step">

                <div className="step-number">1</div>

                <h4>{t("step1title")}</h4>

                <p>{t("step1desc")}</p>

              </div>

            </Col>

            <Col md={3} sm={6}>

              <div className="step">

                <div className="step-number">2</div>

                <h4>{t("step2title")}</h4>

                <p>{t("step2desc")}</p>

              </div>

            </Col>

            <Col md={3} sm={6}>

              <div className="step">

                <div className="step-number">3</div>

                <h4>{t("step3title")}</h4>

                <p>{t("step3desc")}</p>

              </div>

            </Col>

            <Col md={3} sm={6}>

              <div className="step">

                <div className="step-number">4</div>

                <h4>{t("step4title")}</h4>

                <p>{t("step4desc")}</p>

              </div>

            </Col>

          </Row>

        </Container>

      </section>

      {/* Compare Table */}

      <section className="compare">

        <Container>

          <h2>
            {t("compareTitle")}{" "}
            <span className="highlight">
              {t("compareHighlight")}
            </span>
          </h2>

          <div className="table-wrapper">

            <table>

              <thead>

                <tr>

                  <th>{t("feature")}</th>

                  <th>{t("sweetWater")}</th>

                  <th>{t("constructionWater")}</th>

                  <th>{t("domesticWater")}</th>

                </tr>

              </thead>

              <tbody>

                <tr>
                  <td>{t("bestfor")}</td>
                  <td>{t("bestfor1")}</td>
                  <td>{t("bestfor2")}</td>
                  <td>{t("bestfor3")}</td>
                </tr>

                <tr>
                  <td>{t("quality")}</td>
                  <td>{t("quality1")}</td>
                  <td>{t("quality2")}</td>
                  <td>{t("quality3")}</td>
                </tr>

                <tr>
                  <td>{t("ph")}</td>
                  <td>7.0 - 7.5</td>
                  <td>6.8 - 7.2</td>
                  <td>6.5 - 7.0</td>
                </tr>

                <tr>
                  <td>{t("minorder")}</td>
                  <td>500 Liters</td>
                  <td>5000 Liters</td>
                  <td>1000 Liters</td>
                </tr>

                <tr>
                  <td>{t("deliverytime")}</td>
                  <td>2-4 Hours</td>
                  <td>{t("sameday")}</td>
                  <td>4-6 Hours</td>
                </tr>

              </tbody>

            </table>

          </div>

        </Container>

      </section>

      {/* FAQ Section */}

      <section className="faq">

        <Container>

          <h2>
            {t("faqTitle")}{" "}
            <span className="highlight">
              {t("faqHighlight")}
            </span>
          </h2>

          <Row className="g-4">

            <Col md={6}>

              <div className="faq-item">

                <h4>❓ {t("faq1q")}</h4>

                <p>{t("faq1a")}</p>

              </div>

            </Col>

            <Col md={6}>

              <div className="faq-item">

                <h4>❓ {t("faq2q")}</h4>

                <p>{t("faq2a")}</p>

              </div>

            </Col>

            <Col md={6}>

              <div className="faq-item">

                <h4>❓ {t("faq3q")}</h4>

                <p>{t("faq3a")}</p>

              </div>

            </Col>

            <Col md={6}>

              <div className="faq-item">

                <h4>❓ {t("faq4q")}</h4>

                <p>{t("faq4a")}</p>

              </div>

            </Col>

          </Row>

        </Container>

      </section>

      <style jsx>{`
        .hero {
          background: linear-gradient(135deg, #0B2B4A, #1A4A6F);
          padding: 60px 0;
          color: white;
        }

        .hero h1 {
          font-size: 42px;
          font-weight: 800;
          margin-bottom: 15px;
        }

        .highlight {
          color: #FFD700;
        }

        .hero-badges {
          display: flex;
          gap: 20px;
          margin-top: 25px;
          flex-wrap: wrap;
        }

        .hero-badges span {
          background: rgba(255,255,255,0.1);
          padding: 8px 16px;
          border-radius: 30px;
          font-size: 14px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .contact-card {
          background: white;
          padding: 25px;
          border-radius: 20px;
          text-align: center;
          color: #333;
        }

        .call-btn {
          display: inline-block;
          background: #25D366;
          color: white;
          padding: 12px 25px;
          border-radius: 40px;
          text-decoration: none;
          font-weight: bold;
          margin-top: 15px;
        }

        .tabs-section {
          background: #f8f9fa;
          padding: 30px 0;
        }

        .tabs-wrapper {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .tab-btn {
          background: white;
          border: none;
          padding: 15px 25px;
          border-radius: 15px;
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s;
          border-bottom: 3px solid transparent;
        }

        .tab-btn.active {
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
        }

        .tab-btn small {
          display: block;
          font-size: 12px;
          color: #666;
        }

        .pricing {
          padding: 60px 0;
          background: #f8f9fa;
        }

        .pricing-card {
          background: white;
          border-radius: 20px;
          padding: 30px;
          position: relative;
          transition: all 0.3s;
          height: 100%;
        }

        .pricing-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 35px rgba(0,0,0,0.1);
        }

        .popular {
          border: 2px solid #FFD700;
        }

        .popular-badge {
          position: absolute;
          top: -12px;
          right: 20px;
          background: #FFD700;
          padding: 5px 15px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: bold;
        }

        .liters {
          font-size: 28px;
          font-weight: bold;
          color: #1E88E5;
          margin: 15px 0;
        }

        .delivery {
          margin: 15px 0;
          padding: 8px;
          background: #f0f0f0;
          border-radius: 10px;
          font-size: 14px;
        }

        .features-list {
          list-style: none;
          padding: 0;
          margin: 20px 0;
        }

        .features-list li {
          padding: 8px 0;
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
        }

        .features-list svg {
          color: #4CAF50;
        }

        .order-btn {
          width: 100%;
          padding: 12px;
          border: none;
          border-radius: 12px;
          color: white;
          font-weight: bold;
        }

        .how-it-works,
        .compare,
        .faq {
          padding: 60px 0;
        }

        .how-it-works h2,
        .compare h2,
        .faq h2 {
          text-align: center;
          margin-bottom: 40px;
          font-size: 32px;
          font-weight: 700;
        }

        .steps {
          text-align: center;
        }

        .step-number {
          width: 50px;
          height: 50px;
          background: #1E88E5;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          font-weight: bold;
          margin: 0 auto 15px;
        }

        .table-wrapper {
          overflow-x: auto;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          background: white;
          border-radius: 16px;
          overflow: hidden;
        }

        th,
        td {
          padding: 15px;
          text-align: left;
          border-bottom: 1px solid #eee;
        }

        th {
          background: #0B2B4A;
          color: white;
        }

        .faq-item {
          background: #f8f9fa;
          padding: 20px;
          border-radius: 16px;
        }

        .faq-item h4 {
          font-size: 18px;
          margin-bottom: 10px;
        }

        @media (max-width: 768px) {

          .hero h1 {
            font-size: 28px;
          }

          .tab-btn {
            padding: 10px 15px;
            font-size: 14px;
          }

          .pricing-card {
            padding: 20px;
          }

        }
      `}</style>

    </>
  );
}

export default page;