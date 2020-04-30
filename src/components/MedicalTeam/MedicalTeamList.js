import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { MedicalTeamCard } from "./MedicalTeamCard"

export const MedicalTeamList = () => {
  return (
    <div className="bg-tan py-5">
      <Container>
        <Row>
          <Col>
            <h2 className="text-center">Your pet's new medical team</h2>
          </Col>
        </Row>
        <Row className="py-5">
          {[...Array(3)].map((_, i) => {
            return (
              <Col>
                <MedicalTeamCard key={i} />
              </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  )
}
