"use client";

import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "next/image";
import Link from "next/link";
import { useTranslations, useLocale } from "next-intl";

import pic1 from "@/public/assets/sweetwater.png";
import pic2 from "@/public/assets/constructwater.png";
import pic3 from "@/public/assets/domestwat.jpeg";

const Services = () => {
  const t = useTranslations("services");
  const locale = useLocale();

  return (
    <Container>

      {/* Heading Section */}
      <div className="row">

        <div
          className="col-md-10 offset-md-1 text-center"
          style={{ marginTop: "2rem" }}
        >
          <h2>{t("title")}</h2>
          <p>{t("desc")}</p>
        </div>

      </div>

      {/* Cards Section */}
      <div className="row mt-4">

        {/* First Card */}
        <div className="col-md-4 d-flex justify-content-center mb-4">

          <Card style={{ width: "95%" }}>

            <div className="text-center pt-3">
              <Image
                src={pic1}
                alt="Sweet Water"
                width={100}
                height={100}
              />
            </div>

            <Card.Body className="text-center">

              <Card.Title>{t("card1title")}</Card.Title>

              <Card.Text>{t("card1desc")}</Card.Text>

              {/* ✅ ORDER BUTTON LINKED */}
              <Link href={`/${locale}/order`}>
                <Button variant="primary">
                  {t("btn")}
                </Button>
              </Link>

            </Card.Body>

          </Card>

        </div>

        {/* Second Card */}
        <div className="col-md-4 d-flex justify-content-center mb-4">

          <Card style={{ width: "95%" }}>

            <div className="text-center pt-3">
              <Image
                src={pic2}
                alt="Construction Water"
                width={100}
                height={100}
              />
            </div>

            <Card.Body className="text-center">

              <Card.Title>{t("card2title")}</Card.Title>

              <Card.Text>{t("card2desc")}</Card.Text>

              {/* ✅ ORDER BUTTON LINKED */}
              <Link href={`/${locale}/order`}>
                <Button variant="primary">
                  {t("btn")}
                </Button>
              </Link>

            </Card.Body>

          </Card>

        </div>

        {/* Third Card */}
        <div className="col-md-4 d-flex justify-content-center mb-4">

          <Card style={{ width: "95%" }}>

            <div className="text-center pt-3">
              <Image
                src={pic3}
                alt="Domestic Water"
                width={100}
                height={100}
              />
            </div>

            <Card.Body className="text-center">

              <Card.Title>{t("card3title")}</Card.Title>

              <Card.Text>{t("card3desc")}</Card.Text>

              {/* ✅ ORDER BUTTON LINKED */}
              <Link href={`/${locale}/order`}>
                <Button variant="primary">
                  {t("btn")}
                </Button>
              </Link>

            </Card.Body>

          </Card>

        </div>

      </div>

    </Container>
  );
};

export default Services;


// "use client";

// import React from "react";
// import { Container } from "react-bootstrap";
// import Button from "react-bootstrap/Button";
// import Card from "react-bootstrap/Card";
// import Image from "next/image";
// import { useTranslations } from "next-intl";

// import pic1 from "@/public/assets/sweetwater.png";
// import pic2 from "@/public/assets/constructwater.png";
// import pic3 from "@/public/assets/domestwat.jpeg";

// const Services = () => {
//   const t = useTranslations("services");

//   return (
//     <Container>

//       {/* Heading Section */}
//       <div className="row">

//         <div
//           className="col-md-10 offset-md-1 text-center"
//           style={{ marginTop: "2rem" }}
//         >
//           <h2>{t("title")}</h2>

//           <p>{t("desc")}</p>
//         </div>

//       </div>

//       {/* Cards Section */}
//       <div className="row mt-4">

//         {/* First Card */}
//         <div className="col-md-4 d-flex justify-content-center mb-4">

//           <Card style={{ width: "95%" }}>

//             <div className="text-center pt-3">

//               <Image
//                 src={pic1}
//                 alt="Sweet Water"
//                 width={100}
//                 height={100}
//               />

//             </div>

//             <Card.Body className="text-center">

//               <Card.Title>
//                 {t("card1title")}
//               </Card.Title>

//               <Card.Text>
//                 {t("card1desc")}
//               </Card.Text>

//               <Button variant="primary">
//                 {t("btn")}
//               </Button>

//             </Card.Body>

//           </Card>

//         </div>

//         {/* Second Card */}
//         <div className="col-md-4 d-flex justify-content-center mb-4">

//           <Card style={{ width: "95%" }}>

//             <div className="text-center pt-3">

//               <Image
//                 src={pic2}
//                 alt="Construction Water"
//                 width={100}
//                 height={100}
//               />

//             </div>

//             <Card.Body className="text-center">

//               <Card.Title>
//                 {t("card2title")}
//               </Card.Title>

//               <Card.Text>
//                 {t("card2desc")}
//               </Card.Text>

//               <Button variant="primary">
//                 {t("btn")}
//               </Button>

//             </Card.Body>

//           </Card>

//         </div>

//         {/* Third Card */}
//         <div className="col-md-4 d-flex justify-content-center mb-4">

//           <Card style={{ width: "95%" }}>

//             <div className="text-center pt-3">

//               <Image
//                 src={pic3}
//                 alt="Domestic Water"
//                 width={100}
//                 height={100}
//               />

//             </div>

//             <Card.Body className="text-center">

//               <Card.Title>
//                 {t("card3title")}
//               </Card.Title>

//               <Card.Text>
//                 {t("card3desc")}
//               </Card.Text>

//               <Button variant="primary">
//                 {t("btn")}
//               </Button>

//             </Card.Body>

//           </Card>

//         </div>

//       </div>

//     </Container>
//   );
// };

// export default Services;