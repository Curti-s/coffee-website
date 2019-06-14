import React from "react"
import Img from "gatsby-image"

import Title from "./title"

const getCategories = items => {
  let tempItems = items.map(item => {
    return item.node.category
  })
  let categories = Array.from(new Set(tempItems))
  categories = ["all", ...categories]
  return categories
}
export default class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: props.items.edges,
      coffeeItems: props.items.edges,
      categories: getCategories(props.items.edges),
    }
  }

  handleItems = cat => {
    let tempItems = [...this.state.items]
    if (cat === "all") {
      this.setState(() => {
        return { coffeeItems: tempItems }
      })
    } else {
      let items = tempItems.filter(({ node }) => node.category === cat)
      this.setState(() => {
        return { coffeeItems: items }
      })
    }
  }
  render() {
    if (this.state.items.length > 0) {
      return (
        <section className="menu py-5">
          <div className="container">
            <Title title="Best of our menu" />
            <div className="row mb-5">
              <div className="col-10 mx-auto text-center">
                {this.state.categories.map((cat, index) => {
                  return (
                    <button
                      className="btn btn-yellow text-capitalize m-3"
                      key={index}
                      onClick={() => this.handleItems(cat)}
                    >
                      {cat}
                    </button>
                  )
                })}
              </div>
            </div>
            <div className="row">
              {this.state.coffeeItems.map(({ node }) => {
                return (
                  <div
                    className="col-11 col-md-6  my-3 d-flex mx-auto"
                    key={node.id}
                  >
                    <div>
                      <Img fixed={node.image.fixed} />
                    </div>
                    <div className="flex-grow-1 px-3">
                      <div className="d-flex justify-content-between">
                        <small className="mb-0">{node.title}</small>
                        <small className="mb=0 text-yellow">
                          ${node.price}
                        </small>
                      </div>
                      <p className="text-muted">
                        <small>{node.description.description}</small>
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      )
    } else {
      return (
        <section className="menu py-5">
          <div className="container">
            <Title title="Best of our menu" />
            <div className="row">
              <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
                <h1>There are no items to display</h1>
              </div>
            </div>
          </div>
        </section>
      )
    }
  }
}
