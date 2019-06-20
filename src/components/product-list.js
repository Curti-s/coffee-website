import React from "react"
import { StaticQuery, graphql } from "gatsby"

import Title from "./title"
import Product from "./product"

export default function ProductList() {
  return (
    <StaticQuery
      query={graphql`
        {
          product: allContentfulCoffeeProduct {
            edges {
              node {
                id
                title
                price
                image {
                  fluid(maxHeight: 426) {
                    src
                    ...GatsbyContentfulFluid_tracedSVG
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        return (
          <section className="py-5">
            <div className="container">
              <Title title="Our Products" />
              <div className="row">
                {data.product.edges.map(({ node: product }) => {
                  return <Product key={product.id} product={product} />
                })}
              </div>
            </div>
          </section>
        )
      }}
    />
  )
}
