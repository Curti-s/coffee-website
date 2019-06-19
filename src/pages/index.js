import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import NavBar from "../components/navbar"
import BackgroundSection from "../components/background"
import Info from "../components/info"
import Menu from "../components/menu"
import ProductList from "../components/product-list"
import Contact from "../components/contact"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <NavBar />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Kirimi's Brew"
      styleClass="default-background"
    />
    <Info />
    <Menu items={data.menu} />
    <ProductList />
    <Contact />
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
    menu: allContentfulCoffeeItem {
      edges {
        node {
          id
          title
          description {
            description
          }
          price
          category
          image {
            fixed(width: 50, height: 50) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`
