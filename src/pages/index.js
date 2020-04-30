import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Hero } from "../components/Hero/Hero"
import { FeatureList } from "../components/Features/FeatureList"
import { InfoImage } from "../components/Info/InfoImage"
import { TestimonialSlider } from "../components/Testimonials/TestimonialSlider"
import { SearchMini } from "../components/Practice/SearchMini"
import { MedicalTeamList } from "../components/MedicalTeam/MedicalTeamList"
import { BlogPostListGrid } from "../components/BlogPost/BlogPostListGrid"

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
    <BlogPostListGrid buttonText="Visit Our Blog" buttonURL="/blog" />
  </Layout>
)

export default Index
