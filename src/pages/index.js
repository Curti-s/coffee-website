import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NavBar from "../components/navbar"
import BackgroundSection from "../components/background"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <NavBar />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Kirimi's Brew"
      styleClass="default-background"
    />
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  {
    img: file(relativePath: { eq: "default-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
