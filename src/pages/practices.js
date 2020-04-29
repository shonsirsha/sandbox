import React from "react"
import { Container } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { SearchFull } from "../components/Practice/SearchFull"

const Practices = () => (
  <Layout>
    <SEO title="Homepage" />
    <Container className="py-5">
      <h1>Practices</h1>
      <SearchFull />
    </Container>
  </Layout>
)

export default Practices
