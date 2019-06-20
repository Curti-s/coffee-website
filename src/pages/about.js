import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NavBar from "../components/navbar"
import BackgroundSection from "../components/background"
import Info from "../components/info"

const AboutPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <NavBar />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="About Us"
      styleClass="about-background"
    />
    <Info />
  </Layout>
)

export default AboutPage

export const pageQuery = graphql`
  {
    img: file(relativePath: { eq: "about-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
