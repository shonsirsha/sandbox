import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { FeatureItem } from "./FeatureItem"
import styled from "styled-components"

const FeatureListWrapper = styled.div`
  /* Might need custom styles here */
`

export const FeatureList = () => {
  return (
    <FeatureListWrapper className="py-5 text-center bg-tan">
      <Container>
        <Row>
          {[...Array(4)].map((_, i) => {
            return (
              <Col>
                <FeatureItem key={i} />
              </Col>
            )
          })}
        </Row>
      </Container>
    </FeatureListWrapper>
  )
}
