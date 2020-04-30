import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { Container, Row, Col } from "react-bootstrap"
import SEO from "../components/seo"
const urlSlug = require("url-slug")

export default function PracticeService({ data: { contentfulPractice } }) {
  console.log(contentfulPractice)
  const { name, address, services, vets, blogPosts } = contentfulPractice
  const service = services[0].name

  return (
    <>
      <SEO title={`${name} | Practice`} />
      <Layout>
        <Container>
          <Row>
            <Col>
              <h1 className="display-1">
                {service} Service page for {name}
              </h1>

              <h2>Services</h2>
              {services &&
                services.map(service => {
                  return <p>{service.name}</p>
                })}
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  )
}

export const query = graphql`
  query PracticeService($id: String!) {
    contentfulPractice(services: { elemMatch: { id: { eq: $id } } }) {
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
`
