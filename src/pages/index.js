import React from "react"
import { Link } from "gatsby"
import { Container } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Hero } from "../components/Hero/Hero"
import { FeatureList } from "../components/Features/FeatureList"

const Index = () => (
  <Layout>
    <SEO title="Homepage" />
    <Hero variant="Home" />
    <FeatureList />
    <Container className="py-5">
      <h1>Home</h1>
      <p>Welcome to the Homepage</p>
      <Link to="/practices">View Practices</Link>
    </Container>
  </Layout>
)

export default Index
