import React from 'react'
import Link from 'gatsby-link'

import './style.scss'

const Header = () => (
  <header className="c-roundup-header">
    <Link className="logo" to="/"></Link>
    <div>
      <h1>Round Up</h1>
      <h2>from Elwood Technology</h2>
    </div>
  </header>
)

export default Header
