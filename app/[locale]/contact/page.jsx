"use client"

import React from 'react'
import { Container, Card } from 'react-bootstrap'
import { useTranslations } from "next-intl";

const Page = () => {

  const t = useTranslations("contactPage");

  return (

    <Container>

      <div
        className='row'
        style={{ marginTop: "3rem" }}
      >

        <div className='col-md-12'>

          <h3 style={{ textAlign: "center" }}>
            {t("title")}
          </h3>

          <h5
            style={{
              textAlign: "center",
              marginTop: "1.5rem"
            }}
          >
            {t("subtitle")}
          </h5>

        </div>

      </div>

      <div className='row'>

        <div className='col-md-2'></div>

        <div
          className='col-md-4'
          style={{
            justifyItems: "center",
            margin: "3rem 0 1rem 0"
          }}
        >

          <Card
            border="primary"
            style={{ width: '18rem' }}
          >

            <Card.Header>
              {t("complainTitle")}
            </Card.Header>

            <Card.Body>

              <Card.Title
                style={{
                  textAlign: "center",
                  fontSize: "3rem"
                }}
              >
                ⚠️
              </Card.Title>

              <Card.Text>

                {t("complainDesc")}

                <br />

                <span style={{ fontWeight: "bold" }}>
                  0310-7189909
                </span>

              </Card.Text>

              <Card.Text style={{ textAlign: "center" }}>

                <a
                  href="tel:+923107189909"
                  className="btn btn-primary fw-bold px-4 py-2 rounded-3"
                >
                  📞 {t("callBtn")}
                </a>

              </Card.Text>

            </Card.Body>

          </Card>

        </div>

        <div
          className='col-md-4'
          style={{
            justifyItems: "center",
            margin: "3rem 0 1rem 0"
          }}
        >

          <Card
            border="primary"
            style={{ width: '18rem' }}
          >

            <Card.Header>
              {t("guideTitle")}
            </Card.Header>

            <Card.Body>

              <Card.Title
                style={{
                  textAlign: "center",
                  fontSize: "3rem"
                }}
              >
                ✏️
              </Card.Title>

              <Card.Text>

                {t("guideDesc")}

                <br />

                <span style={{ fontWeight: "bold" }}>
                  0325-6992358
                </span>

              </Card.Text>

              <Card.Text style={{ textAlign: "center" }}>

                <a
                  href="tel:+923256992358"
                  className="btn btn-primary fw-bold px-4 py-2 rounded-3"
                >
                  📞 {t("callBtn")}
                </a>

              </Card.Text>

            </Card.Body>

          </Card>

        </div>

        <div className='col-md-2'></div>

      </div>

      <div className='row'>

        <div className='col-md-2'></div>

        <div
          className='col-md-8'
          style={{
            textAlign: "center",
            margin: "2.5rem 0 1.5rem 0",
            border: "1px solid blue",
            borderRadius: "1rem"
          }}
        >

          <h5 style={{ margin: "0.5rem 0 0.5rem 0" }}>

            {t("emailText")}

          </h5>

          <h5>

            <a
              href="mailto:ceo.company@gmail.com"
              style={{ textDecoration: "none" }}
            >
              ceo.company@gmail.com
            </a>

          </h5>

        </div>

      </div>

    </Container>
  )
}

export default Page