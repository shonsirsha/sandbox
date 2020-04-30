import React from "react"
import { Button, Row, Col, Container } from "react-bootstrap"
import classNames from "classnames"

export const InfoImage = ({ reversed, textCenter }) => {
  const infoClasses = classNames({
    "flex-row-reverse": reversed,
    "text-center": textCenter,
  })
  return (
    <Container fluid>
      <Row className={infoClasses}>
        <Col>
          <div className="p-5 m-5">
            <p className="text-uppercase">Welcome</p>
            <h3>Two line long header example for web</h3>
            <p>
              To us, every animal is unique. That is why personal relationships
              with our customers and their animals mean the world to us. We
              respond to the peculiarities and needs of your animal - and we do
              everything to ensure that you and your animal feel comfortable
              with us. We are looking forward to your visit!
            </p>
            <Button>Book Now</Button>
          </div>
        </Col>
        <Col className="d-flex align-items-center justify-content-center bg-light">
          Image
        </Col>
      </Row>
    </Container>
  )
}
