"use client";
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import companyimg from '@/public/assets/organizationpic.png'; // Adjust your import path
import { FaCheckCircle, FaTint, FaClock } from 'react-icons/fa';


const Topsecond = () => {
  return (
   <Container fluid>
        <div className='row'>
                <div className='col-md-6' style={{margin: "3rem 0 3rem 0"}}>
                         <div className="hero-content">
               <span className="badge bg-primary mb-3 px-3 py-2">
                 Hail's Trusted Water Provider
               </span>
               <h1 className="display-4 fw-bold mb-4">
                 Pure Water. <br />
                 <span className="text-primary">Sustainable Flow.</span>
               </h1>
               <p className="lead text-muted mb-4">
                 Delivering reliable, high-quality water supply to Hail's families,
                 farms, and industries—24/7, 365 days a year.
               </p>
              
               <div className="features-list mb-4">
                 <div className="d-flex align-items-center mb-2">
                   <FaCheckCircle className="text-primary me-2" />
                   <span>100% Localized Network Coverage</span>
                 </div>
                 <div className="d-flex align-items-center mb-2">
                   <FaTint className="text-primary me-2" />
                   <span>Zero Rain Dependency - Guaranteed Reserves</span>
                 </div>
                 <div className="d-flex align-items-center mb-2">
                   <FaClock className="text-primary me-2" />
                   <span>24hr Emergency Leak Response</span>
                 </div>
               </div>
             
               <div className="button-group" style={{display: "flex"}}>
                 <button className="btn btn-primary me-3">
                   Order Now
                 </button>
                 <button className="btn btn-outline-secondary " >
                   Emergency Support
                 </button>
               </div>
             </div>


                </div>
                <div className='col-md-6' style={{margin: "3rem 0 3rem 0"}}>
                <Image 
                src={companyimg} 
                alt="Hail Water Supply Company - Pure water facility"
                style={{ objectFit: "contain" }}
                className="responsive-image img-fluid"
                width={800}
                height={600}
                priority
                  />

                </div>

        </div>

   </Container>
  );
};

export default Topsecond;





// "use client"
// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import Image from 'next/image';
// import companyimg from '@/public/assets/organizationpic.png'; // Adjust your import path
// import { FaCheckCircle, FaTint, FaClock } from 'react-icons/fa';

// const HeroSection = () => {
//   return (
//     <section className="water-hero-section py-5">
//       <Container fluid>
//         <Row className="align-items-center g-5">
          
//           {/* Text Column - Left Side (on desktop) */}
//          
          
//           {/* YOUR ORIGINAL COLUMN - Right Side (on desktop) */}
//           <Col xs={12} md={6} className="order-2 order-md-2">
//             <div className="image-wrapper text-center">
//               <Image 
//                 src={companyimg} 
//                 alt="Hail Water Supply Company - Clean water facility"
//                 style={{ objectFit: "contain" }}
//                 className="img-fluid"
//                 width={600}
//                 height={500}
//                 priority
//               />
//             </div>
//           </Col>
          
//         </Row>
//       </Container>
      
//       {/* Custom CSS for responsiveness */}
//       <style jsx>{`
//         .water-hero-section {
//           background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
//           min-height: 100vh;
//           display: flex;
//           align-items: center;
//         }
        
//         .badge {
//           background-color: #0d6efd;
//           font-size: 0.9rem;
//           letter-spacing: 1px;
//           display: inline-block;
//         }
        
//         .btn-primary {
//           background-color: #0d6efd;
//           border: none;
//           padding: 12px 28px;
//           transition: all 0.3s ease;
//         }
        
//         .btn-primary:hover {
//           background-color: #0b5ed7;
//           transform: translateY(-2px);
//           box-shadow: 0 10px 20px rgba(13, 110, 253, 0.2);
//         }
        
//         .btn-outline-secondary {
//           padding: 12px 28px;
//           transition: all 0.3s ease;
//         }
        
//         .btn-outline-secondary:hover {
//           transform: translateY(-2px);
//         }
        
//         .image-wrapper {
//           position: relative;
//           animation: float 3s ease-in-out infinite;
//         }
        
//         @keyframes float {
//           0% { transform: translateY(0px); }
//           50% { transform: translateY(-15px); }
//           100% { transform: translateY(0px); }
//         }
        
//         /* Mobile adjustments */
//         @media (max-width: 768px) {
//           .display-4 {
//             font-size: 2rem;
//           }
          
//           .hero-content {
//             text-align: center;
//           }
          
//           .features-list {
//             text-align: left;
//             display: inline-block;
//             margin-left: auto;
//             margin-right: auto;
//           }
          
//           .button-group {
//             display: flex;
//             flex-direction: column;
//             gap: 12px;
//           }
          
//           .button-group .btn {
//             width: 100%;
//             margin-right: 0 !important;
//             margin-bottom: 10px;
//           }
//         }
        
//         /* Tablet adjustments */
//         @media (min-width: 769px) and (max-width: 992px) {
//           .display-4 {
//             font-size: 2.5rem;
//           }
//         }
//       `}</style>
//     </section>
//   );
// };

// export default HeroSection;



// import React from 'react';
// import { Container } from 'react-bootstrap';
// import Image from 'next/image';
// import companyimg from "@/public/assets/organizationpic.png";

// const Topsecond = () => {
//   return (
//     <Container fluid>
//         <div className='row'>
//                 <div className='col-md-6'>
//                         <h2>Our Introduction</h2>
//                         <p>Unlike coastal regions, Hail relies on a strategic mix of advanced groundwater management and reserve storage. We are not just a water company; we are the backbone of Hail’s vision to become a sustainable agricultural and logistics hub.</p>

//                 </div>
//                  <div className='col-md-6'>
//                         <Image src={companyimg} style={{objectFit: "contain"}}/>

//                 </div>

//         </div>
      
//     </Container>
//   )
// }

// export default Topsecond
