"use client";

import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import { useTranslations } from "next-intl";

import pic1 from "@/public/assets/trksunca.png";
import pic2 from "@/public/assets/factinnerca.png";
import pic3 from "@/public/assets/trkmorningca.png";
import pic4 from "@/public/assets/waterraybg.png";
import pic5 from "@/public/assets/trkmorningca.png";
import pic6 from "@/public/assets/factout.png";
import pic7 from "@/public/assets/factin.png";

const Carousell = () => {

  const t = useTranslations("carousel");

  return (
    <>
      <style>{`
        .carousel-img {
          height: 13rem;
          object-fit: cover;
        }

        @media (min-width: 992px) {
          .carousel-img {
            height: 35rem;
          }
        }
      `}</style>

      <Carousel fade>

        <Carousel.Item>

          <Image
            src={pic1}
            alt="First slide"
            className="d-block w-100 carousel-img"
            priority
          />

          <Carousel.Caption>
            <h3>{t("slide1")}</h3>
          </Carousel.Caption>

        </Carousel.Item>

        <Carousel.Item>

          <Image
            src={pic2}
            alt="Second slide"
            className="d-block w-100 carousel-img"
          />

          <Carousel.Caption>
            <h3>{t("slide2")}</h3>
          </Carousel.Caption>

        </Carousel.Item>

        <Carousel.Item>

          <Image
            src={pic6}
            alt="Third slide"
            className="d-block w-100 carousel-img"
          />

          <Carousel.Caption>
            <h3>{t("slide3")}</h3>
          </Carousel.Caption>

        </Carousel.Item>

        <Carousel.Item>

          <Image
            src={pic3}
            alt="Fourth slide"
            className="d-block w-100 carousel-img"
          />

          <Carousel.Caption>
            <h3>{t("slide4")}</h3>
          </Carousel.Caption>

        </Carousel.Item>

        <Carousel.Item>

          <Image
            src={pic7}
            alt="Fifth slide"
            className="d-block w-100 carousel-img"
          />

          <Carousel.Caption>
            <h3>{t("slide5")}</h3>
          </Carousel.Caption>

        </Carousel.Item>

      </Carousel>
    </>
  );
};

export default Carousell;