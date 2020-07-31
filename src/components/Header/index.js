import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import './style.scss'

const logo = require('../../images/Logo.png')

const Header = ({ siteTitle }) => (
  <header className="header">
      <Link className="nav-link" to="/">
        {/* <img
          src={logo}
          className="logo"
          alt="logo"
        /> */}
        Logo
      </Link>
      <Link className="nav-link" to="/">Womens</Link>
      <Link className="nav-link" to="/">Mens</Link>
      <Link className="nav-link" to="/">Accessories</Link>
      <Link className="nav-link" to="/">Sale!</Link>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
