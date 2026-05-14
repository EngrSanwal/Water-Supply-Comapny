import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbarr from "@/components/Navbarr";
import Footer from "@/components/Footer";

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Water Supply",
  description: "Water Supply Website",
};

const locales = ["en", "ar"];

export default async function RootLayout({
  children,
  params,
}) {
  const { locale } = await params;

  // Validate locale
  if (!locales.includes(locale)) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        <NextIntlClientProvider messages={messages}>
          <Navbarr />

          {children}

          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}