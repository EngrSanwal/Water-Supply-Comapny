"use client";

import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';

import {
  FaShippingFast,
  FaDollarSign,
  FaIdCard,
  FaShieldAlt
} from 'react-icons/fa';

import { useTranslations } from "next-intl";

const WhyChooseUs = () => {

  const t = useTranslations("whychoose");

  return (

    <section className="why-choose-us py-5">

      <Container>

        <div className='row'>

          <div className='col-md-12'>

            <section className="py-5">

              <Container>

                <h2 className="text-center fw-bold mb-2">
                  {t("title")}
                </h2>

                <p className="text-center text-muted mb-5">
                  {t("desc")}
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

      </Container>

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
      `}</style>

    </section>
  );
};

export default WhyChooseUs;