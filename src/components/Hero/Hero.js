import React from "react"
import { Container, Row, Col, Button } from "react-bootstrap"

export const Hero = () => {
  return (
    <Container className="py-5">
      <Row>
        <Col className="py-5">
          <h1>Welcome to VetTrust</h1>
          <p className="lead">
            Home to some of Switzerlands top veterinarians and animal carers. We
            are you for you and your fury friend from the beginning.
          </p>

          <Button className="mr-3">Book Now</Button>
          <Button className="mr-3" variant="outline-dark">
            Tips &amp; Tricks
          </Button>
        </Col>
        <Col className="d-flex align-items-center justify-content-center bg-light">
          Image
        </Col>
      </Row>
    </Container>
  )
}
