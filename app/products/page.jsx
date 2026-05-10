"use client";

import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaTint, FaHardHat, FaHome, FaTruck, FaCalendarCheck, FaRupeeSign, FaCheckCircle, FaClock, FaShieldAlt, FaChartLine } from 'react-icons/fa';



const page = () => {
 const [activeTab, setActiveTab] = useState('sweet');

  const packages = {
    sweet: [
      { name: "Basic", liters: "1000L", price: "999", delivery: "Weekly", features: ["RO purified water", "Free can", "Basic support"] },
      { name: "Family", liters: "3000L", price: "2799", delivery: "Bi-weekly", features: ["Premium quality", "2 free cans", "Priority support"] },
      { name: "Business", liters: "10000L", price: "8999", delivery: "Daily", features: ["Bulk discount", "24/7 delivery", "Dedicated truck"] }
    ],
    construction: [
      { name: "Small Site", liters: "5000L", price: "3999", delivery: "As needed", features: ["Same day delivery", "Quality certified", "Fast service"] },
      { name: "Medium Site", liters: "20000L", price: "14999", delivery: "Daily", features: ["Bulk rates", "Priority dispatch", "24/7 availability"] },
      { name: "Large Site", liters: "50000L", price: "34999", delivery: "Multiple daily", features: ["Fleet of tankers", "Site storage", "Best price guarantee"] }
    ],
    domestic: [
      { name: "Starter", liters: "500L", price: "599", delivery: "Weekly", features: ["Clean water", "Regular service", "Affordable"] },
      { name: "Plus", liters: "1500L", price: "1599", delivery: "Twice weekly", features: ["Priority delivery", "Tank cleaning", "Emergency support"] },
      { name: "Premium", liters: "3000L", price: "2999", delivery: "Daily", features: ["Unlimited supply", "24/7 support", "Premium quality"] }
    ]
  };

  const waterTypes = [
    { id: 'sweet', name: 'Sweet Water', icon: <FaTint />, color: '#1E88E5', desc: 'For drinking & cooking' },
    { id: 'construction', name: 'Construction Water', icon: <FaHardHat />, color: '#F57C00', desc: 'For building projects' },
    { id: 'domestic', name: 'Domestic Water', icon: <FaHome />, color: '#43A047', desc: 'For household use' }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <Container>
          <Row>
            <Col lg={7}>
              <h1>Choose Your <span className="highlight">Water Package</span></h1>
              <p>Select from our range of tailored water supply plans for sweet, construction & domestic needs</p>
              <div className="hero-badges">
                <span><FaTruck /> Free Delivery*</span>
                <span><FaCalendarCheck /> Subscription Available</span>
                <span><FaRupeeSign /> Best Price Guarantee</span>
              </div>
            </Col>
            <Col lg={5}>
              <div className="contact-card">
                <h4>Need Custom Quantity?</h4>
                <p>Call us for bulk orders & special requirements</p>
                <a href="tel:+911234567890" className="call-btn">📞 +91 12345 67890</a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Tab Navigation */}
      <section className="tabs-section">
        <Container>
          <div className="tabs-wrapper">
            {waterTypes.map((type) => (
              <button
                key={type.id}
                className={`tab-btn ${activeTab === type.id ? 'active' : ''}`}
                style={activeTab === type.id ? { borderBottomColor: type.color } : {}}
                onClick={() => setActiveTab(type.id)}
              >
                <span style={{ color: type.color }}>{type.icon}</span>
                <div>
                  <strong>{type.name}</strong>
                  <small>{type.desc}</small>
                </div>
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* Pricing Cards */}
      <section className="pricing">
        <Container>
          <Row className="g-4">
            {packages[activeTab].map((pkg, idx) => (
              <Col key={idx} md={6} lg={4}>
                <div className={`pricing-card ${idx === 1 ? 'popular' : ''}`}>
                  {idx === 1 && <div className="popular-badge">Most Popular</div>}
                  <h3>{pkg.name}</h3>
                  <div className="liters">{pkg.liters}</div>
                  <div className="price">
                    <span className="currency">₹</span>
                    <span className="amount">{pkg.price}</span>
                    <span className="period">/month</span>
                  </div>
                  <div className="delivery">
                    <FaClock /> Delivery: {pkg.delivery}
                  </div>
                  <ul className="features-list">
                    {pkg.features.map((feature, i) => (
                      <li key={i}><FaCheckCircle /> {feature}</li>
                    ))}
                  </ul>
                  <button className="order-btn" style={{ backgroundColor: waterTypes.find(t => t.id === activeTab).color }}>
                    Order Now →
                  </button>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* How It Works */}
      <section className="how-it-works">
        <Container>
          <h2>How <span className="highlight">It Works</span></h2>
          <Row className="steps">
            <Col md={3} sm={6}>
              <div className="step">
                <div className="step-number">1</div>
                <h4>Choose Package</h4>
                <p>Select water type & plan</p>
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div className="step">
                <div className="step-number">2</div>
                <h4>Place Order</h4>
                <p>Call or WhatsApp us</p>
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div className="step">
                <div className="step-number">3</div>
                <h4>Schedule Delivery</h4>
                <p>Choose date & time</p>
              </div>
            </Col>
            <Col md={3} sm={6}>
              <div className="step">
                <div className="step-number">4</div>
                <h4>Get Water</h4>
                <p>Fresh water at your door</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Compare Table */}
      <section className="compare">
        <Container>
          <h2>Compare <span className="highlight">Water Types</span></h2>
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Features</th>
                  <th>Sweet Water</th>
                  <th>Construction Water</th>
                  <th>Domestic Water</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Best For</td><td>Drinking/Cooking</td><td>Concrete Mixing</td><td>Household Chores</td></tr>
                <tr><td>Quality Standard</td><td>RO + UV Filtered</td><td>Industrial Grade</td><td>Municipal Grade</td></tr>
                <tr><td>pH Level</td><td>7.0 - 7.5</td><td>6.8 - 7.2</td><td>6.5 - 7.0</td></tr>
                <tr><td>Min Order</td><td>500 Liters</td><td>5000 Liters</td><td>1000 Liters</td></tr>
                <tr><td>Delivery Time</td><td>2-4 Hours</td><td>Same Day</td><td>4-6 Hours</td></tr>
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <Container>
          <h2>Frequently Asked <span className="highlight">Questions</span></h2>
          <Row className="g-4">
            <Col md={6}>
              <div className="faq-item">
                <h4>❓ How do I place an order?</h4>
                <p>Call us directly or WhatsApp your requirement. We'll confirm delivery schedule.</p>
              </div>
            </Col>
            <Col md={6}>
              <div className="faq-item">
                <h4>❓ Is there free delivery?</h4>
                <p>Yes, free delivery on all orders above 1000 liters.</p>
              </div>
            </Col>
            <Col md={6}>
              <div className="faq-item">
                <h4>❓ Can I get emergency delivery?</h4>
                <p>24/7 emergency delivery available with minimal extra charges.</p>
              </div>
            </Col>
            <Col md={6}>
              <div className="faq-item">
                <h4>❓ How do you ensure water quality?</h4>
                <p>Regular lab testing and quality checks for all water types.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <style jsx>{`
        .hero {
          background: linear-gradient(135deg, #0B2B4A, #1A4A6F);
          padding: 60px 0;
          color: white;
        }
        .hero h1 {
          font-size: 42px;
          font-weight: 800;
          margin-bottom: 15px;
        }
        .highlight { color: #FFD700; }
        .hero-badges {
          display: flex;
          gap: 20px;
          margin-top: 25px;
          flex-wrap: wrap;
        }
        .hero-badges span {
          background: rgba(255,255,255,0.1);
          padding: 8px 16px;
          border-radius: 30px;
          font-size: 14px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .contact-card {
          background: white;
          padding: 25px;
          border-radius: 20px;
          text-align: center;
          color: #333;
        }
        .call-btn {
          display: inline-block;
          background: #25D366;
          color: white;
          padding: 12px 25px;
          border-radius: 40px;
          text-decoration: none;
          font-weight: bold;
          margin-top: 15px;
        }
        .tabs-section {
          background: #f8f9fa;
          padding: 30px 0;
        }
        .tabs-wrapper {
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
          justify-content: center;
        }
        .tab-btn {
          background: white;
          border: none;
          padding: 15px 25px;
          border-radius: 15px;
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s;
          border-bottom: 3px solid transparent;
        }
        .tab-btn.active {
          box-shadow: 0 5px 20px rgba(0,0,0,0.1);
        }
        .tab-btn small { display: block; font-size: 12px; color: #666; }
        .pricing { padding: 60px 0; background: #f8f9fa; }
        .pricing-card {
          background: white;
          border-radius: 20px;
          padding: 30px;
          position: relative;
          transition: all 0.3s;
          height: 100%;
        }
        .pricing-card:hover { transform: translateY(-8px); box-shadow: 0 15px 35px rgba(0,0,0,0.1); }
        .popular { border: 2px solid #FFD700; }
        .popular-badge {
          position: absolute;
          top: -12px;
          right: 20px;
          background: #FFD700;
          padding: 5px 15px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: bold;
        }
        .liters { font-size: 28px; font-weight: bold; color: #1E88E5; margin: 15px 0; }
        .price .amount { font-size: 42px; font-weight: 800; }
        .price .currency { font-size: 24px; }
        .price .period { font-size: 14px; color: #666; }
        .delivery { margin: 15px 0; padding: 8px; background: #f0f0f0; border-radius: 10px; font-size: 14px; }
        .features-list { list-style: none; padding: 0; margin: 20px 0; }
        .features-list li { padding: 8px 0; display: flex; align-items: center; gap: 10px; font-size: 14px; }
        .features-list svg { color: #4CAF50; }
        .order-btn {
          width: 100%;
          padding: 12px;
          border: none;
          border-radius: 12px;
          color: white;
          font-weight: bold;
        }
        .how-it-works, .compare, .faq { padding: 60px 0; }
        .how-it-works h2, .compare h2, .faq h2 { text-align: center; margin-bottom: 40px; font-size: 32px; font-weight: 700; }
        .steps { text-align: center; }
        .step-number {
          width: 50px;
          height: 50px;
          background: #1E88E5;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          font-weight: bold;
          margin: 0 auto 15px;
        }
        .table-wrapper { overflow-x: auto; }
        table {
          width: 100%;
          border-collapse: collapse;
          background: white;
          border-radius: 16px;
          overflow: hidden;
        }
        th, td { padding: 15px; text-align: left; border-bottom: 1px solid #eee; }
        th { background: #0B2B4A; color: white; }
        .faq-item { background: #f8f9fa; padding: 20px; border-radius: 16px; }
        .faq-item h4 { font-size: 18px; margin-bottom: 10px; }
        @media (max-width: 768px) {
          .hero h1 { font-size: 28px; }
          .tab-btn { padding: 10px 15px; font-size: 14px; }
          .pricing-card { padding: 20px; }
          .price .amount { font-size: 32px; }
        }
      `}</style>
    </>
  );
}

export default page
