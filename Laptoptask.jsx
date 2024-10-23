import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import laptopImage from './Img/aizen.jpeg';
import feature1Image from './Img/aizen.jpeg';
import feature2Image from './Img/aizen.jpeg';
import feature3Image from './Img/aizen.jpeg';

const LandingPage = () => {
  return (
    <div>
      
      <div className="bg-primary text-white text-center py-5">
        <Container>
          <Row>
            <Col md={6} className="my-auto">
              <h1>HP VICTUS GAMING LAPTOP</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                placerat, ipsum ac auctor ornare, nunc ligula scelerisque eros.
              </p>
              <Button variant="light" className="me-2">
                Get Started
              </Button>
              <Button variant="outline-light">Learn More</Button>
            </Col>
            <Col md={6}>
              <img
                src={laptopImage}
                
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </div>

      
      <Container className="py-5">
        <Row className="text-center">
          <Col md={4}>
            <img
              src={feature1Image}
              
              className="mb-3 img-fluid"
            />
            <h3>INTEL CORE I5</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Ratione
              fugiat atque libero.
            </p>
          </Col>

          <Col md={4}>
            <img
              src={feature2Image}
             
              className="mb-3 img-fluid"
            />
            <h3>12th GENERATION</h3>
            <p>Lorem ipsum dolor sit amet.</p>
          </Col>

          <Col md={4}>
            <img
              src={feature3Image}
              
              className="mb-3 img-fluid"
            />
            <h3>NVIDIA GeForce RTX 2050</h3>
            <p>
              Excepturi ipsa quasi dolor sit amet consectetur adipisicing elit.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
