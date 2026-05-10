"use client";
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaTint, FaHardHat, FaHome, FaTruck, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const page = () => {
 const services = [
    {
      title: "Sweet Water",
      icon: <FaTint fontSize="3rem" />,
      description: "Pure & filtered drinking water for daily use",
      price: "₹299 / 10Ton",
      color: "#2196f3",
    },
    {
      title: "Construction Water",
      icon: <FaHardHat fontSize="3rem" />,
      description: "Heavy-duty water for construction sites",
      price: "₹199 / 1000Ton",
      color: "#ff9800",
    },
    {
      title: "Domestic Water",
      icon: <FaHome fontSize="3rem" />,
      description: "Affordable water for households & colonies",
      price: "₹249 / 1000Ton",
      color: "#4caf50",
    },
  ];

  return (
    <Container className="py-5">
      {/* Header */}
      <div className="row">
        <div className="col-md-12">
          <div className="text-center mb-5">
        <h1 className="display-5 fw-bold" style={{ color: "#0a4275" }}>
          💧 Water Supply Services
        </h1>
        <p className="lead text-secondary">
          Clean & reliable water for every need
        </p>
      </div>

        </div>

      </div>
      <div className="row">
          {services.map((service, idx) => (
          <Col lg={4} md={6} className="mb-4" key={idx}>
            <Card className="h-100 shadow-sm border-0 text-center p-3">
              <div style={{ color: service.color }}>{service.icon}</div>
              <Card.Body>
                <Card.Title className="fw-bold fs-3">{service.title}</Card.Title>
                <Card.Text className="text-secondary">{service.description}</Card.Text>
                <h5 className="fw-bold" style={{ color: service.color }}>
                  {service.price}
                </h5>
                <a href="tel:+923107189909" className="btn btn-primary mt-3 px-4">
                  <FaTruck className="me-2" /> Order Now
                </a>
              </Card.Body>
            </Card>
          </Col>
        ))}

      </div>
      <div className="row">
         <Col lg={6} className="mb-4">
          <Card className="border-0 shadow-sm text-center p-4">
            <FaPhoneAlt className="mx-auto mb-3" fontSize="2rem" color="#0a4275" />
            <h4>Customer Support</h4>
            <p className="mb-2">Complaints & Issues</p>
            <h5 className="fw-bold">📞 0310-7189909</h5>
            <p className="mb-0 mt-3">Registration Guide</p>
            <h5 className="fw-bold">📞 0325-6992358</h5>
          </Card>
        </Col>

        <Col lg={6} className="mb-4">
          <Card className="border-0 shadow-sm text-center p-4 bg-primary text-white">
            <FaEnvelope className="mx-auto mb-3" fontSize="2rem" />
            <h4>CEO Direct Contact</h4>
            <p>If support doesn't resolve your issue</p>
            <a href="mailto:ceo.pakmela@gmail.com" className="text-white fw-bold fs-5">
              ceo.@gmail.com
            </a>
          </Card>
        </Col>

      </div>
      <div className="row">
         <h6 className="mb-0">
          🚨 24/7 Emergency Water Supply • Same Day Delivery • Free Quality Check
        </h6>
      </div>

      {/* Service Cards */}
    
    </Container>
  );
}

export default page
