import React from "react"
import Img from "gatsby-image"

export default function Product({ product }) {
  return (
    <div className="col-10 col-sm-8 col-md-6 col-lg-4 my-3 mx-auto">
      <div className="card" style={{ minHeight: "100%" }}>
        <Img fluid={product.image.fluid} className="card-img-top" />
        <div className="card-body text-center">
          <h6>{product.title}</h6>
          <h6 className="text-yellow">${product.price}</h6>
          <button
            className="snipcart-add-item btn btn-yellow text-capitalize mt-3"
            data-item-id={product.id}
            data-item-name={product.title}
            data-item-price={product.price}
            data-item-url="https://coffee-website-gatsby.netlify.com/"
            data-item-image={product.image.fluid.src}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  )
}
