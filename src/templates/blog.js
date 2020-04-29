import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Container, Row, Col } from "react-bootstrap"
import SEO from "../components/seo"

export default function BlogPost({ data: { contentfulBlogPost } }) {
  console.log(contentfulBlogPost)
  const { title } = contentfulBlogPost

  return (
    <>
      <SEO title={`${title} | Blog`} />
      <Layout>
        <Container>
          <Row>
            <Col>
              <h1 className="display-1">{title}</h1>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  )
}

export const query = graphql`
  query BlogPost($id: String!) {
    contentfulBlogPost(id: { eq: $id }) {
      id
      title
    }
  }
`
