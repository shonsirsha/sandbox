import React from "react"
import styled from "styled-components"
import { Container, Row, Col, Button } from "react-bootstrap"
import { Link } from "gatsby"

const StyledHeader = styled.header`
  a {
    color: #fff;
  }
`

const Header = ({ siteTitle }) => (
  <StyledHeader className="bg-primary text-white py-5">
    <Container>
      <Row>
        <Col>{siteTitle} - Logo</Col>
        <Col className="text-center">
          <span className="mr-3">
            <Link to="/">home</Link>
          </span>
          <span className="mr-3">
            <Link to="/practices">practices</Link>
          </span>
          <span className="mr-3">
            <Link to="/services">services</Link>
          </span>
          <span className="mr-3">
            <Link to="/blog">blog</Link>
          </span>
          <span className="mr-3">
            <Link to="/for-vets">for vets</Link>
          </span>
        </Col>
        <Col>
          <Row>
            <Col>Lang. Switcher</Col>
            <Col>
              <Button variant="secondary">Book Now</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </StyledHeader>
)

export default Header
