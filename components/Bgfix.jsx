"use client";

import React from "react";
import Button from "react-bootstrap/Button";
import { useTranslations } from "next-intl";
import bgImage from "@/public/assets/waterraybg.png";

const Bgfix = () => {
  const t = useTranslations("bgfix");

  return (
    <>
      <div
        className="bg-fixed-section"
        style={{
          backgroundImage: `url(${bgImage.src})`,
        }}
      >
        <div className="bg-overlay">
          <div className="container text-center">
            <h2>{t("title")}</h2>

            <br />

            <p>{t("desc")}</p>

            <br />

            <Button variant="light">
              {t("btn")}
            </Button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-fixed-section {
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          background-attachment: fixed;
          width: 100%;
        }

        .bg-overlay {
          background: rgba(0, 0, 0, 0.19);
          padding: 120px 20px;
          color: white;
        }
      `}</style>
    </>
  );
};

export default Bgfix;