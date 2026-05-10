import React from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import bgImage from "@/public/assets/waterraybg.png"; // 🔁 Replace with your actual image filename

const Bgfix = () => {
  return (
    <>
      <style>{`
        .bg-fixed-section {
          background-image: url(${bgImage.src});
          background-attachment: fixed;
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
        }

        .bg-overlay {
          background-color: rgba(0, 0, 0, 0.09); /* dark overlay for text readability */
          padding: 5rem 1rem;
          text-align: center;
          color: white;
        }
      `}</style>

      <Container fluid className="bg-fixed-section p-0">
        <div className="bg-overlay">
          <div className="row">
            <div className="col-12">
              <div>
                <h2>Why CompanyName</h2><br />
                <p>CompanyName water desalination is the leading supplier of un-bottled potable water for people and businesses in Saudi Arabia.</p><br />
                <Button variant="light">Read More</Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}

export default Bgfix