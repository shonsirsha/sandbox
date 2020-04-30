import React from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import { BlogPostCard } from "./BlogPostCard"
import { Link } from "gatsby"

export const BlogPostListGrid = ({
  title = "Featured Posts",
  buttonText,
  buttonURL,
}) => {
  return (
    <div className="bg-iceblue py-5">
      <Container>
        <Row>
          <Col>
            <h2 className="text-center">{title}</h2>
          </Col>
        </Row>
        <Row className="py-5">
          {[...Array(3)].map((_, i) => {
            return (
              <Col key={i}>
                <BlogPostCard />
              </Col>
            )
          })}
        </Row>

        {buttonText && buttonURL && (
          <Row>
            <Col className="text-center">
              <Button as={Link} to={buttonURL}>
                {buttonText}
              </Button>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  )
}
