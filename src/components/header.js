import React from "react"
import styled from "styled-components"
import { Container, Row } from "react-bootstrap"

const StyledHeader = styled.header`
  background: red;
  padding-bottom: 10px;
`

const Header = ({ siteTitle }) => (
  <StyledHeader>
    <Container>
      <Row>{siteTitle}</Row>
    </Container>
  </StyledHeader>
)

export default Header
