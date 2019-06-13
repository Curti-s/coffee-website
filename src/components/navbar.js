import React from "react"
import { Link } from "gatsby"
import { FaCartArrowDown } from "react-icons/fa"
import logo from "../images/logo.svg"

export default class NavBar extends React.Component {
  state = {
    navbarToggle: false,
    css: "collapse navbar-collapse",
    links: [{ id: 1, path: "/" }],
  }
  render() {
    return <div>Navbar Content</div>
  }
}
