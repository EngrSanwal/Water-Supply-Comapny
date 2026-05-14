"use client";

import React from "react";
import Button from "react-bootstrap/Button";
import { useTranslations, useLocale } from "next-intl";
import bgImage from "@/public/assets/waterraybg.png";
import Link from "next/link";

const Bgfix = () => {

  const t = useTranslations("bgfix");
  const locale = useLocale();

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

            <Button
              as={Link}
              variant="light"
              href={`/${locale}/contact`}
            >
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
  height: auto;
}

.bg-overlay {
  background: rgba(0, 0, 0, 0.19);
  padding: 120px 20px;
  color: white;
  height: auto;
}
      `}</style>
    </>
  );
};

export default Bgfix;