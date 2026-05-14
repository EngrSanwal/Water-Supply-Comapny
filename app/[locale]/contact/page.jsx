"use client"
import React from 'react'
import { Container, Card } from 'react-bootstrap'

const Page = () => {
  return (
    <Container>
      <div className='row' style={{marginTop: "3rem"}}>
        <div className='col-md-12'>
          <h3 style={{textAlign: "center"}}>
            Contact Support
          </h3>
          <h5 style={{textAlign: "center", marginTop: "1.5rem"}}>Contact the below helplines for Support</h5>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-2'></div>
        <div className='col-md-4' style={{justifyItems: "center", margin: "3rem 0 1rem 0"}}>
          <Card border="primary" style={{ width: '18rem' }}>
            <Card.Header>Complains & issues</Card.Header>
            <Card.Body>
              <Card.Title style={{textAlign: "center", fontSize: "3rem"}}>⚠️</Card.Title>
              <Card.Text>
                For any Complain, or if you have order issue then contact in below contact<br/>
                <span style={{fontWeight: "bold"}}>0310-7189909</span>
              </Card.Text>
               <Card.Text style={{textAlign: "center"}}>
                <a href="tel:+923107189909" className="btn btn-primary fw-bold px-4 py-2 rounded-3">📞 Call Now</a>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
         <div className='col-md-4' style={{justifyItems: "center", margin: "3rem 0 1rem 0"}}>
          <Card border="primary" style={{ width: '18rem' }}>
            <Card.Header>Order Guide</Card.Header>
            <Card.Body>
              <Card.Title style={{textAlign: "center", fontSize: "3rem"}}>✏️</Card.Title>
              <Card.Text>
                Contact us for order placement, or you can also fill the given form directly<br/>
                <span style={{fontWeight: "bold"}}>0325-6992358</span>
              </Card.Text>
              <Card.Text style={{textAlign: "center"}}>
                <a href="tel:+923256992358" className="btn btn-primary fw-bold px-4 py-2 rounded-3">📞 Call Now</a>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className='col-md-2'></div>
      </div>
      <div className='row'>
        <div className='col-md-2'></div>
        <div className='col-md-8' style={{textAlign: "center",margin: "2.5rem 0 1.5rem 0", border: "1px solid blue", borderRadius: "1rem"}}>
          <h5 style={{margin: "0.5rem 0 0.5rem 0"}}>You can also send us an email for your order:
          </h5>
          <h5>
            <a href="mailto:ceo.company@gmail.com" style={{textDecoration: "none"}}>
            ceo.company@gmail.com
          </a>
          </h5>

        </div>
      </div>
    </Container>
  )
}

export default Page
