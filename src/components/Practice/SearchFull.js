import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Row, Col, Card, Button } from "react-bootstrap"
const urlSlug = require("url-slug")

export const SearchFull = () => {
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
    <div>
      <h2>Find the closest practice to you</h2>

      <h3>Map Section</h3>
      <hr />
      <h3>List / Grid Section</h3>
      <Row>
        {practices.map(({ node: practice }) => {
          // Create slug from name
          const slug = urlSlug(practice.name)
          return (
            <Col key={practice.id}>
              <Card>
                <Card.Body>
                  <Card.Title>{practice.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {practice.address}
                  </Card.Subtitle>

                  <pre>{JSON.stringify(practice, null, 4)}</pre>

                  <Button variant="primary" as={Link} to={`/practices/${slug}`}>
                    Practice Page
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          )
        })}
      </Row>
    </div>
  )
}
