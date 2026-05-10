"use client";
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { 
  FaTruck, FaDollarSign, FaRegRegistered, FaIdCard, 
  FaShippingFast, FaGift, FaHeadset, FaLock, FaCheckCircle,
  FaUsers, FaGlobe, FaClock, FaStar, FaAward, FaShieldAlt
} from 'react-icons/fa';


const page = () => {

  return (
    <Container fluid>
      <div className='row'>
        <div className='col-md-12'>
          <section className="hero-section py-5" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        
          <Row className="align-items-center">
            <Col lg={8} className="mx-auto text-center text-white">
              <h1 className="display-4 fw-bold mb-3">About <span style={{color: '#FFD700'}}>Us</span></h1>
              <p className="lead mb-0">Your Trusted Partner in Logistics & Delivery Services Since 2020</p>
            </Col>
          </Row>
        
      </section>
          </div> 

      </div>
      <div className='row'>
        <div className='col-11'>
          <section className="py-5">
       <Row className="align-items-center g-5">
            <Col lg={6}>
              <h2 className="fw-bold mb-3">Our <span style={{color: '#e67e22'}}>Story</span></h2>
              <div style={{width: '60px', height: '4px', background: '#e67e22', marginBottom: '20px'}}></div>
              <p className="text-muted" style={{fontSize: '1.1rem', lineHeight: '1.8'}}>
                Founded in 2020, <strong>FastTrack Logistics</strong> started with a simple mission: 
                to revolutionize the delivery industry by combining speed, reliability, and affordability. 
                What began as a small team of 5 passionate drivers has now grown into a nationwide 
                network of over 200+ professional drivers serving thousands of satisfied customers daily.
              </p>
              <p className="text-muted" style={{fontSize: '1.1rem', lineHeight: '1.8'}}>
                We believe that every package tells a story, and we treat each delivery with the same care 
                and attention as if it were our own. Our commitment to excellence has made us the preferred 
                choice for businesses and individuals alike.
              </p>
              <div className="mt-4">
                <div className="d-flex align-items-center mb-2">
                  <FaCheckCircle className="text-success me-2" />
                  <span>100% Customer Satisfaction Rate</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <FaCheckCircle className="text-success me-2" />
                  <span>24/7 Real-time Order Tracking</span>
                </div>
                <div className="d-flex align-items-center">
                  <FaCheckCircle className="text-success me-2" />
                  <span>Money-back Guarantee on Delays</span>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="bg-light p-4 rounded-4 shadow-sm">
                <div className="row g-3">
                  <div className="col-6">
                    <div className="text-center p-3 bg-white rounded-3">
                      <h2 className="display-4 fw-bold text-primary">98%</h2>
                      <p className="text-muted mb-0">On-time Delivery</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="text-center p-3 bg-white rounded-3">
                      <h2 className="display-4 fw-bold text-primary">500K+</h2>
                      <p className="text-muted mb-0">Packages Delivered</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="text-center p-3 bg-white rounded-3">
                      <h2 className="display-4 fw-bold text-primary">200+</h2>
                      <p className="text-muted mb-0">Expert Drivers</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="text-center p-3 bg-white rounded-3">
                      <h2 className="display-4 fw-bold text-primary">50+</h2>
                      <p className="text-muted mb-0">Areas of Hail Covered</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
      </section>

        </div>

      </div>
      <div className='row'>
        <div className='col-md-12'>
           <section className="py-5" style={{ background: '#f8f9fa' }}>
        <Container>
          <Row className="g-4">
            <Col md={6}>
              <div className="p-4 bg-white rounded-4 shadow-sm h-100 text-center">
                <div className="icon-wrapper mx-auto mb-3" style={{background: '#e67e22', width: '70px', height: '70px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <FaGlobe size={32} color="white" />
                </div>
                <h3 className="fw-bold mb-3">Our Mission</h3>
                <p className="text-muted" style={{lineHeight: '1.8'}}>
                  To provide seamless, fast, and reliable delivery solutions that empower businesses 
                  and bring smiles to customers' faces. We strive to make logistics simple, transparent, 
                  and accessible for everyone.
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div className="p-4 bg-white rounded-4 shadow-sm h-100 text-center">
                <div className="icon-wrapper mx-auto mb-3" style={{background: '#e67e22', width: '70px', height: '70px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <FaAward size={32} color="white" />
                </div>
                <h3 className="fw-bold mb-3">Our Vision</h3>
                <p className="text-muted" style={{lineHeight: '1.8'}}>
                  To become the most trusted and innovative logistics company, setting new standards 
                  in delivery speed, customer service, and technological excellence across the nation.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>


        </div>

      </div>
      <div className='row'>
        <div className='col-md-12'>
          <section className="py-5">
        <Container>
          <h2 className="text-center fw-bold mb-2">Why Choose <span style={{color: '#e67e22'}}>Us?</span></h2>
          <p className="text-center text-muted mb-5">Discover what makes us different from the rest</p>
          <Row className="g-4">
            {[
              { icon: FaRegRegistered, title: 'Registered Company', desc: 'Fully licensed & government approved', color: '#4CAF50' },
              { icon: FaDollarSign, title: 'Affordable Price', desc: 'Best rates with no hidden charges', color: '#FF9800' },
              { icon: FaShippingFast, title: 'Fast Shipping', desc: 'Same-day & express delivery options', color: '#2196F3' },
              { icon: FaIdCard, title: 'Professional Drivers', desc: 'Background verified & trained', color: '#9C27B0' },
             ].map((item, i) => (
              <Col key={i} xs={6} md={4} lg={3}>
                <div className="card h-100 text-center p-3 border-0 shadow-sm hover-card">
                  <div className="mx-auto mb-3" style={{backgroundColor: `${item.color}15`, width: '70px', height: '70px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <item.icon size={32} color={item.color} />
                  </div>
                  <h5 className="fw-bold fs-6">{item.title}</h5>
                  <small className="text-muted">{item.desc}</small>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
        </div>

      </div>
      <div className='row'>
        <div className='col-md-12'>
                 <section className="py-5">
        <Container>
          <div className="bg-warning bg-opacity-10 p-5 rounded-4 text-center">
            <h3 className="fw-bold mb-3">Ready to experience the best delivery service?</h3>
            <p className="text-muted mb-4">Join thousands of satisfied customers who trust us with their deliveries</p>
            <button className="btn btn-primary btn-lg px-5" style={{background: '#e67e22', border: 'none'}}>
              Get Started Today
            </button>
          </div>
        </Container>
      </section>


        </div>

      </div>

<style jsx>{`
        .hover-card {
          transition: all 0.3s ease;
          cursor: pointer;
          background: white;
          border-radius: 16px;
        }
        .hover-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.12) !important;
        }
        @media (max-width: 768px) {
          .display-4 {
            font-size: 2rem;
          }
          .hover-card {
            padding: 1rem !important;
          }
          .hover-card h5 {
            font-size: 0.85rem;
          }
          .hover-card small {
            font-size: 0.7rem;
          }
        }
        @media (max-width: 576px) {
          .hero-section h1 {
            font-size: 1.8rem;
          }
          .bg-warning {
            padding: 2rem !important;
          }
        }
      `}</style>
    </Container>
    
  )
}

export default page
