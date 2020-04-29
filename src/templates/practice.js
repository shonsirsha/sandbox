import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Container, Row, Col } from "react-bootstrap"
import SEO from "../components/seo"

export default function Practice({ data: { contentfulPractice } }) {
  console.log(contentfulPractice)
  const { name } = contentfulPractice

  return (
    <>
      <SEO title={`${name} | Practice`} />
      <Layout>
        <Container>
          <Row>
            <Col>
              <div className="m-5">
                <h1 className="display-1">{name}</h1>
              </div>
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
    }
  }
`
