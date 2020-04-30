import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Row, Col, Card, Button, Container, Form } from "react-bootstrap"
const urlSlug = require("url-slug")

export const SearchMini = () => {
  const data = useStaticQuery(graphql`
    {
      allContentfulPractice {
        edges {
          node {
            id
            name
            address
            email
            phone
            location {
              lon
              lat
            }
            services {
              name
            }
            vets {
              name
            }
            blogPosts {
              title
            }
          }
        }
      }
    }
  `)

  const practices = data.allContentfulPractice.edges

  return (
    <div className="bg-light py-5">
      <Container>
        <Row>
          <Col>
            <h2>Find the closest practice</h2>
          </Col>
        </Row>
        <Form>
          <Row>
            <Col>
              <Form.Control placeholder="Search" />
            </Col>
            <Col>
              <Form.Control as="select" custom>
                <option>Select City</option>
              </Form.Control>
            </Col>
            <Col>
              <Form.Control as="select" custom>
                <option>Type of Care</option>
              </Form.Control>
            </Col>
          </Row>
          <Row>
            <Col className="my-4">
              <Button className="mr-3">Search</Button>
              <Button className="mr-3" variant="outline-dark">
                All Practices
              </Button>
            </Col>
          </Row>
        </Form>

        <Row>
          {practices.map(({ node: practice }) => {
            // Create slug from name
            const slug = urlSlug(practice.name)
            return (
              <Col key={practice.id}>
                <Card>
                  <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted text-uppercase">
                      Small Animal Practice
                    </Card.Subtitle>
                    <Card.Title>{practice.name}</Card.Title>
                    <br />
                    <Card.Title className="text-tan">
                      {practice.phone}
                    </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {practice.address}
                    </Card.Subtitle>

                    <Button
                      variant="primary"
                      as={Link}
                      to={`/practices/${slug}`}
                      className="mr-3"
                    >
                      Book Now
                    </Button>
                    <Button
                      variant="outline-dark"
                      as={Link}
                      to={`/practices/${slug}`}
                      className="mr-3"
                    >
                      Practice Page
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            )
          })}
        </Row>
      </Container>
    </div>
  )
}
