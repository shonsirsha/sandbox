import React from "react"
import { Card, Button } from "react-bootstrap"
import { FaAngleDown } from "react-icons/fa"

export const MedicalTeamCard = () => {
  return (
    <Card>
      <Card.Img variant="top" src="https://dummyimage.com/350x200/000/fff" />
      <Card.Body>
        <Card.Subtitle className="text-uppercase text-muted">
          Head Surgeon
        </Card.Subtitle>
        <Card.Title>Pete Goodvet</Card.Title>
        <Card.Text>
          Jonas Kulpe studied in Giessen and completed a 3-year assistant period
          in the surgical clinic.
        </Card.Text>
        <Button variant="link" block>
          <FaAngleDown />
        </Button>
      </Card.Body>
    </Card>
  )
}
