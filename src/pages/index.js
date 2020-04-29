import React from "react"
import { Link } from "gatsby"
import { Container } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Index = () => (
  <Layout>
    <SEO title="Homepage" />
    <Container className="py-5">
      <h1>Home</h1>
      <p>Welcome to Home</p>
      <Link to="/page-2">Go back to 2nd page</Link>
    </Container>
  </Layout>
)

export default Index
