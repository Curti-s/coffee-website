import React from "react"

import Title from "./title"

export default function Contact() {
  return (
    <section className="contact py-5">
      <Title title="contact us" />
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form
            action="https://formspree.io/wondercrust122@gmail.com"
            method="POST"
          >
            {/* name */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                name="name"
                placeholder="John Smith"
                className="form-control"
                id="name"
              />
            </div>
            {/* email */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="example@example.com"
                className="form-control"
                id="email"
              />
            </div>
            {/* description */}
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                className="form-control"
                rows="5"
                placeholder="Your description here..."
              ></textarea>
            </div>
            {/* submit*/}
            <button
              type="submit"
              className="btn btn-yellow btn-block text-capitalize mt-3"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
