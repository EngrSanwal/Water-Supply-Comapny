import React from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image from 'next/image';

import pic1 from '@/public/assets/sweetwater.png';
import pic2 from '@/public/assets/constructwater.png';
import pic3 from '@/public/assets/domestwat.jpeg';

const Services = () => {
  return (
    <Container>
      <div className= "row">
        <div className="col-md-1">

        </div>
        <div className="col-md-10" style={{textAlign: "center", marginTop: "2rem"}}>
          <h2>Your Trusted Partner for <br/> Clearn & Reliable WAter Supply</h2>
          <p>Providing premium quality water solutions for homes, business, and construction sites. Swift delivery with unmatched service excellence.</p>
        </div>
        <div className="col-md-1">

        </div>

      </div>
      <div className='row'>

        {/* First Card */}
        <div className="col-md-4 d-flex justify-content-center mb-4">
          <Card style={{ width: '95%' }}>

            <div className="text-center pt-3">
              <Image
                src={pic1}
                alt="Sweet Water"
                width={100}
                height={100}
              />
            </div>

            <Card.Body className="text-center">
              <Card.Title>Sweet Water</Card.Title>

              <Card.Text>
                Pure and hygienic sweet water supply service for homes,
                offices, schools, and commercial use.
              </Card.Text>

              <Button variant="primary">
                Learn More
              </Button>
            </Card.Body>

          </Card>
        </div>

        {/* Second Card */}
        <div className="col-md-4 d-flex justify-content-center mb-4">
          <Card style={{ width: '95%' }}>

            <div className="text-center pt-3">
              <Image
                src={pic2}
                alt="Construction Water"
                width={100}
                height={100}
              />
            </div>

            <Card.Body className="text-center">
              <Card.Title>Construction Water</Card.Title>

              <Card.Text>
                Reliable water tanker supply for construction sites,
                buildings, factories, and industrial projects.
              </Card.Text>

              <Button variant="primary">
                Learn More
              </Button>
            </Card.Body>

          </Card>
        </div>

        {/* Third Card */}
        <div className="col-md-4 d-flex justify-content-center mb-4">
          <Card style={{ width: '95%' }}>

            <div className="text-center pt-3">
              <Image
                src={pic3}
                alt="Domestic Water"
                width={100}
                height={100}
              />
            </div>

            <Card.Body className="text-center">
              <Card.Title>Domestic Water</Card.Title>

              <Card.Text>
                Water for domestic use in daily life activitiesFast 
                for residential and commercial needs.
              </Card.Text>

              <Button variant="primary">
                Learn More
              </Button>
            </Card.Body>

          </Card>
        </div>

      </div>
    </Container>
  )
}

export default Services