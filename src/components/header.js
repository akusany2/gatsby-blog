import { Link } from "gatsby"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div className="logo-container">
      <Link to="/">{siteTitle}</Link>
    </div>

    <div>
      <Link to="/">Services</Link>
      <Link to="/">Works</Link>
      <Link to="/">Blogs</Link>
    </div>
  </header>
)


export default Header
