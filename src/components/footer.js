import React from "react"

import { Container, Row, Col } from "react-bootstrap"

import styled from "styled-components"

const StyledFooter = styled.footer`
  padding-top: 4rem;
  padding-bottom: 2rem;
  background-color: #ccc;
`

export default function Footer() {
  return (
    <>
      <StyledFooter>
        <Container>
          <Row>
            <Col>Footer</Col>
          </Row>
        </Container>
      </StyledFooter>
    </>
  )
}
