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

  const slides = [
    {
      img: pic1,
      alt: "First slide",
      title: t("slide1"),
      priority: true,
    },
    {
      img: pic2,
      alt: "Second slide",
      title: t("slide2"),
    },
    {
      img: pic6,
      alt: "Third slide",
      title: t("slide3"),
    },
    {
      img: pic3,
      alt: "Fourth slide",
      title: t("slide4"),
    },
    {
      img: pic7,
      alt: "Fifth slide",
      title: t("slide5"),
    },
  ];

  return (
    <>
      <style>{`
        .carousel-wrapper {
          position: relative;
          width: 100%;
          overflow: hidden;
          background: #000;
        }

        .carousel-img {
          height: 13rem;
          object-fit: cover;
        }

        .image-loading {
          background: #e9ecef;
          animation: pulse 1.5s infinite;
        }

        @keyframes pulse {
          0% {
            opacity: 0.7;
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.7;
          }
        }

        @media (min-width: 992px) {
          .carousel-img {
            height: 35rem;
          }
        }
      `}</style>

      <Carousel fade interval={3000} pause={false}>

        {slides.map((slide, index) => (

          <Carousel.Item key={index}>

            <div className="carousel-wrapper">

              <Image
                src={slide.img}
                alt={slide.alt}
                className="d-block w-100 carousel-img"
                priority={slide.priority || false}
                loading={slide.priority ? "eager" : "lazy"}
                placeholder="blur"
                sizes="100vw"
                
              />

            </div>

            <Carousel.Caption>
              <h3>{slide.title}</h3>
            </Carousel.Caption>

          </Carousel.Item>

        ))}

      </Carousel>
    </>
  );
};

export default Carousell;