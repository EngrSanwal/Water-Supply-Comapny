"use client";

import React from "react";

import Container from "react-bootstrap/Container";

import Link from "next/link";

import { useLocale, useTranslations } from "next-intl";

import { usePathname } from "next/navigation";

import { FaPhoneAlt } from "react-icons/fa";

const LanguageSwitcher = () => {

  const locale = useLocale();

  const pathname = usePathname();

  const t = useTranslations("navbar");

  const switchLocale = locale === "en" ? "ar" : "en";

  // Remove current locale from pathname
  const pathnameWithoutLocale = pathname.replace(
    `/${locale}`,
    ""
  );

  return (

    <Container fluid className="py-2 border-bottom">

      <div className="row align-items-center">

        {/* LEFT SIDE */}
        <div className="col-md-6 col-6 text-center text-md-start mb-2 mb-md-0">

          <h6 className="m-0 d-flex align-items-center justify-content-center justify-content-md-start gap-2">

            <FaPhoneAlt />

            <span>
              0325-6992358
            </span>

          </h6>

        </div>

        {/* RIGHT SIDE */}
        <div className="col-md-6 col-6 text-center text-md-end">

          <Link
            href={`/${switchLocale}${pathnameWithoutLocale}`}
            style={{
              backgroundColor: "#007bff",
              color: "white",
              padding: "8px 18px",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: "600"
            }}
          >
            {t("language")}
          </Link>

        </div>

      </div>

    </Container>
  );
};

export default LanguageSwitcher;