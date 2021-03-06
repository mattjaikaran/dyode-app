import React from 'react'
import { Col } from 'antd'
import { Link } from 'gatsby'

const Company = () => {
  return (
      <Col className="customer-service-links">
        <h5 className="title">Company</h5>
        <Link to='#'>
          Accessibility
          </Link>
        <br />
        <Link to='#'>
          Contact Us
          </Link>
        <br />
        <Link to='#'>
          Return Policy
          </Link>
        <br />
        <Link to='#'>
          FAQ
          </Link>
        <br />
        <Link to='#'>
          Accessibility
          </Link>
        <br />
        <Link to='#'>
          Gift Certificates
          </Link>
        <br />
        <Link to='#'>
          Wishlist
          </Link>
        <br />
      </Col>
  )
}

export default Company