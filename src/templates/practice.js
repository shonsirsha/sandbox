import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import { Container, Row, Col } from "react-bootstrap"
import SEO from "../components/seo"
const urlSlug = require("url-slug")

export default function Practice({ data: { contentfulPractice } }) {
  console.log(contentfulPractice)
  const { name, address, services, vets, blogPosts } = contentfulPractice

  const slugPractice = urlSlug(name)
  return (
    <>
      <SEO title={`${name} | Practice`} />
      <Layout>
        <Container>
          <Row>
            <Col>
              <h1 className="display-1">{name}</h1>
              <p>{address}</p>

              <h2>Services</h2>
              {services &&
                services.map(service => {
                  const slugService = urlSlug(service.name)
                  return (
                    <Link
                      to={`/practices/${slugPractice}/services/${slugService}`}
                    >
                      <p>{service.name}</p>
                    </Link>
                  )
                })}
              <h2>Vets</h2>
              {vets &&
                vets.map(vet => {
                  return <p>{vet.name}</p>
                })}
              <h2>Blog Posts</h2>
              {blogPosts &&
                blogPosts.map(post => {
                  const slug = urlSlug(post.title)
                  return (
                    <p>
                      <Link to={`/blog/${slug}`}>{post.title}</Link>
                    </p>
                  )
                })}
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  )
}

export const query = graphql`
  query Practice($id: String!) {
    contentfulPractice(id: { eq: $id }) {
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
