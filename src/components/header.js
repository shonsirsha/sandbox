import React from "react"
import styled from "styled-components"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "gatsby"

const StyledHeader = styled.header`
  background: navy;
  color: #fff;
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Container>
      <Row>
        <Col>{siteTitle}</Col>
        <Col className="text-right">
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
      </Row>
    </Container>
  </StyledHeader>
)

export default Header
