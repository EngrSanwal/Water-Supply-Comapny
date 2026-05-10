// pages/index.js or components/WhyChooseUs.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { 
  FaShippingFast, 
  FaGift, 
  FaHeadset, 
  FaDollarSign, 
  FaLock,
  FaUserCheck,
  FaRegRegistered,
  FaTruck,
  FaIdCard
} from 'react-icons/fa';

const WhyChooseUs = () => {
  // const features = [
  //   { icon: <FaShippingFast size={32} />, title: 'Fast Shipping', description: 'Quick delivery service' },
  //   { icon: <FaDollarSign size={32} />, title: 'Affordable Prices', description: 'Best rates guaranteed' },
  //   { icon: <FaRegRegistered size={32} />, title: 'Registered', description: 'Verified & trusted' },
  //   { icon: <FaIdCard size={32} />, title: 'Professional Drivers', description: 'Experienced staff' }
  // ];

  return (
    <section className="why-choose-us py-5">
      <Container>
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
      </Container>



      {/* <Container>
        <h2 className="text-center mb-5">Why Choose Us?</h2>
        <Row className="g-4">
          {features.map((feature, idx) => (
            <Col key={idx} xs={6} md={4} lg={3}>
              <div className="feature-card text-center p-3">
                <div className="feature-icon mb-3">{feature.icon}</div>
                <h5 className="fw-bold">{feature.title}</h5>
                <p className="text-muted mb-0">{feature.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container> */}

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
       
      `}</style>
    </section>
  );
};

export default WhyChooseUs;