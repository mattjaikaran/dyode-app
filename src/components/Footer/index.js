import React from 'react'
import './style.scss'
import { Row, Col } from 'antd'
import CustomerService from './CustomerService'
import Company from './Company'
import FollowUs from './FollowUs'

const Footer = () => {
  return (
    <div className="footer">
      <Row>
        <Col xs={24} sm={4}>
          <CustomerService />
        </Col>
        <Col  xs={24} sm={16}>
          <Company />
        </Col>
        <Col xs={24} sm={4}>
          <FollowUs />
        </Col>
      </Row>
    
      {/* <Row>
        <Col className="customer-service-links">
          <h5 className="title">Customer Service</h5>
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
      </Row> */}
    </div>
  )
}

export default Footer