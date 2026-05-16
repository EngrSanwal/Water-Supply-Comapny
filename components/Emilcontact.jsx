"use client";

import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Toast,
  ToastContainer,
  Spinner,
} from "react-bootstrap";

import { useTranslations } from "next-intl";

const Emailcontact = () => {
  const t = useTranslations("orderPage");

  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setShowToast(true);
        e.target.reset();
      } else {
        setError(t("error"));
      }
    } catch (err) {
      setError(t("serverError"));
    }

    setLoading(false);
  };

  return (
    <Container fluid className="py-5">

      {/* TITLE */}
      <h2 className="text-center fw-bold mb-2">
        {t("title")}
      </h2>

      <p className="text-center text-muted mb-4">
        {t("subtitle")}
      </p>

      {/* FORM CARD */}
      <div className="shadow-lg p-4 p-md-5 rounded-4 bg-white">

        <form onSubmit={handleSubmit}>
          <Row className="g-3">

            <Col md={6}>
              <label className="form-label fw-semibold">
                {t("fullname")}
              </label>

              <input
                className="form-control"
                name="name"
                required
              />
            </Col>

            <Col md={6}>
              <label className="form-label fw-semibold">
                {t("email")}
              </label>

              <input
                className="form-control"
                name="email"
                type="email"
                required
              />
            </Col>

            <Col md={6}>
              <label className="form-label fw-semibold">
                {t("phone")}
              </label>

              <input
                className="form-control"
                name="phone"
                required
              />
            </Col>

            <Col md={6}>
              <label className="form-label fw-semibold">
                {t("address")}
              </label>

              <input
                className="form-control"
                name="address"
                required
              />
            </Col>

            <Col md={6}>
              <label className="form-label fw-semibold">
                {t("waterType")}
              </label>

              <select
                className="form-select"
                name="waterType"
                required
              >
                <option value="">
                  {t("selectType")}
                </option>

                <option value="Sweet Water">
                  {t("sweet")}
                </option>

                <option value="Construction Water">
                  {t("construction")}
                </option>

                <option value="Domestic Water">
                  {t("domestic")}
                </option>
              </select>
            </Col>

            <Col md={6}>
              <label className="form-label fw-semibold">
                {t("quantity")}
              </label>

              <input
                className="form-control"
                name="quantity"
                type="number"
                required
              />
            </Col>

            <Col md={6}>
              <label className="form-label fw-semibold">
                {t("deliveryDate")}
              </label>

              <input
                className="form-control"
                name="date"
                type="date"
                required
              />
            </Col>

            <Col md={12}>
              <label className="form-label fw-semibold">
                {t("message")}
              </label>

              <textarea
                className="form-control"
                name="message"
                rows="4"
              />
            </Col>

            {error && (
              <Col md={12}>
                <div className="alert alert-danger">
                  {error}
                </div>
              </Col>
            )}

            <Col md={12} className="text-center mt-2">
              <button
                type="submit"
                className="btn btn-primary px-5 py-2 fw-semibold"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Spinner size="sm" className="me-2" />
                    {t("submitting")}
                  </>
                ) : (
                  t("submit")
                )}
              </button>
            </Col>

          </Row>
        </form>
      </div>

      {/* TOAST */}
      <ToastContainer
        position="bottom-center"
        className="p-3"
        style={{
          position: "fixed",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 9999,
        }}
      >
        <Toast
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={3000}
          autohide
          bg="success"
          className="shadow-lg"
        >
          <Toast.Header>
            <strong className="me-auto">
              {t("toastTitle")}
            </strong>
          </Toast.Header>

          <Toast.Body className="text-white">
            {t("success")}
          </Toast.Body>
        </Toast>
      </ToastContainer>

    </Container>
  );
};

export default Emailcontact;



// "use client";

// import React, { useState } from "react";
// import { Container, Row, Col, Toast, ToastContainer, Spinner } from "react-bootstrap";

// const Emailcontact = () => {
//   const [loading, setLoading] = useState(false);
//   const [showToast, setShowToast] = useState(false);
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     setLoading(true);
//     setError("");

//     const formData = new FormData(e.target);
//     const data = Object.fromEntries(formData.entries());

//     try {
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });

//       if (res.ok) {
//         setShowToast(true);
//         e.target.reset();
//       } else {
//         setError("Failed to place order. Try again.");
//       }
//     } catch (err) {
//       setError("Server error. Please try later.");
//     }

//     setLoading(false);
//   };

//   return (
//     <Container fluid className="py-5">

//       {/* TITLE */}
//       <h2 className="text-center fw-bold mb-2">🚰 Water Supply Order Form</h2>
//       <p className="text-center text-muted mb-4">
//         Sweet Water • Construction Water • Domestic Water
//       </p>

//       {/* FORM CARD */}
//       <div className="shadow-lg p-4 p-md-5 rounded-4 bg-white">

//         <form onSubmit={handleSubmit}>
//           <Row className="g-3">

//             <Col md={6}>
//               <label className="form-label fw-semibold">Full Name</label>
//               <input className="form-control" name="name" required />
//             </Col>

//             <Col md={6}>
//               <label className="form-label fw-semibold">Email</label>
//               <input className="form-control" name="email" type="email" required />
//             </Col>

//             <Col md={6}>
//               <label className="form-label fw-semibold">Phone Number</label>
//               <input className="form-control" name="phone" required />
//             </Col>

//             <Col md={6}>
//               <label className="form-label fw-semibold">Delivery Address</label>
//               <input className="form-control" name="address" required />
//             </Col>

//             <Col md={6}>
//               <label className="form-label fw-semibold">Water Type</label>
//               <select className="form-select" name="waterType" required>
//                 <option value="">Select Type</option>
//                 <option value="Sweet Water">Sweet Water</option>
//                 <option value="Construction Water">Construction Water</option>
//                 <option value="Domestic Water">Domestic Water</option>
//               </select>
//             </Col>

//             <Col md={6}>
//               <label className="form-label fw-semibold">Quantity (Liters)</label>
//               <input className="form-control" name="quantity" type="number" required />
//             </Col>

//             <Col md={6}>
//               <label className="form-label fw-semibold">Delivery Date</label>
//               <input className="form-control" name="date" type="date" required />
//             </Col>

//             <Col md={12}>
//               <label className="form-label fw-semibold">Additional Message</label>
//               <textarea className="form-control" name="message" rows="4" />
//             </Col>

//             {error && (
//               <Col md={12}>
//                 <div className="alert alert-danger">{error}</div>
//               </Col>
//             )}

//             <Col md={12} className="text-center mt-2">
//               <button
//                 type="submit"
//                 className="btn btn-primary px-5 py-2 fw-semibold"
//                 disabled={loading}
//               >
//                 {loading ? (
//                   <>
//                     <Spinner size="sm" className="me-2" />
//                     Submitting...
//                   </>
//                 ) : (
//                   "Place Order"
//                 )}
//               </button>
//             </Col>

//           </Row>
//         </form>
//       </div>

//       {/* ✅ FIXED TOAST (ALWAYS VISIBLE) */}
//       <ToastContainer
//         position="bottom-center"
//         className="p-3"
//         style={{
//           position: "fixed",
//           bottom: "20px",
//           left: "50%",
//           transform: "translateX(-50%)",
//           zIndex: 9999,
//         }}
//       >
//         <Toast
//           onClose={() => setShowToast(false)}
//           show={showToast}
//           delay={3000}
//           autohide
//           bg="success"
//           className="shadow-lg"
//         >
//           <Toast.Header>
//             <strong className="me-auto">Order Status</strong>
//           </Toast.Header>
//           <Toast.Body className="text-white">
//             ✅ Order placed successfully!
//           </Toast.Body>
//         </Toast>
//       </ToastContainer>

//     </Container>
//   );
// };

// export default Emailcontact;