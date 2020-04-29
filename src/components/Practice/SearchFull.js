import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Row, Col } from "react-bootstrap"

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
  console.log(practices.length)

  return (
    <div>
      <h2>Find the closest practice to you</h2>

      <h3>Map Section</h3>

      <h3>List / Grid Section</h3>
      <Row>
        {practices.map(({ node: practice }) => (
          <Col>
            <h4>{practice.name}</h4>
          </Col>
        ))}
      </Row>
      <pre>{JSON.stringify(data, null, 4)}</pre>
    </div>
  )
}
