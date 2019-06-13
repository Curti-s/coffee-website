import React from "react"
import { Link } from "gatsby"

import Title from "./title"

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <Title title="Our Story"></Title>
            <p className="lead text-muted mb-5">
              Voluptate nostrud ad excepteur minim voluptate ex tempor nulla
              duis consectetur. Qui aliquip aute magna dolor adipisicing aliquip
              occaecat dolore nisi aliqua ea proident. Do in enim deserunt irure
              et nostrud cillum aute. Officia sunt quis dolore nostrud laboris
              Lorem pariatur deserunt aliquip culpa consectetur. Cupidatat sint
              Lorem magna qui occaecat aute laborum eu consectetur. Nisi commodo
              excepteur veniam sint.
            </p>
            <Link to="/about">
              <button className="btn btn-yellow text-uppercase">
                About Page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
