import React from "react"
import { Link } from "gatsby"
import { Container } from "react-bootstrap"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Hero } from "../components/Hero/Hero"
import { FeatureList } from "../components/Features/FeatureList"
import { InfoImage } from "../components/Info/InfoImage"
import { TestimonialSlider } from "../components/Testimonials/TestimonialSlider"
import { SearchMini } from "../components/Practice/SearchMini"
import { MedicalTeamList } from "../components/MedicalTeam/MedicalTeamList"

const Index = () => (
  <Layout>
    <SEO title="Homepage" />
    <Hero variant="Home" />
    <FeatureList />
    <InfoImage textCenter />
    <InfoImage textCenter reversed />
    <TestimonialSlider />
    <InfoImage />
    <InfoImage reversed />
    <SearchMini />
    <MedicalTeamList />

    <Container className="py-5">
      <h1>Home</h1>
      <p>Welcome to the Homepage</p>
      <Link to="/practices">View Practices</Link>
    </Container>
  </Layout>
)

export default Index
