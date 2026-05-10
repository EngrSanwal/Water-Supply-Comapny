"use client";

import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "next/image";
import pic1 from "@/public/assets/trksunca.png";
import pic2 from "@/public/assets/factinnerca.png";
import pic3 from "@/public/assets/trkmorningca.png";
import pic4 from "@/public/assets/waterraybg.png";
import pic5 from "@/public/assets/trkmorningca.png";

const Carousell = () => {
  return (
    <>
      <style>{`
        .carousel-img {
          height: 13rem;
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
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero...</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Image
            src={pic2}
            alt="Second slide"
            className="d-block w-100 carousel-img"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Image
            src={pic3}
            alt="Third slide"
            className="d-block w-100 carousel-img"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Image
            src={pic4}
            alt="Fourth slide"
            className="d-block w-100 carousel-img"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <Image
            src={pic5}
            alt="Fifth slide"
            className="d-block w-100 carousel-img"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Carousell;