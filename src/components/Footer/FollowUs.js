import React from 'react'
import { Col } from 'antd'
import { Link } from 'gatsby'

import facebook from '../../images/facebook.png'
import instagram from '../../images/instagram.png'
import twitter from '../../images/twitter.png'


const FollowUs = () => {
  const socialStyle = {
    padding: '10px'
  }
  return (
    <Col className="customer-service-links">
      <h5 className="title">Follow Us</h5>
      <div>
        <Link to='#'>
          <img src={facebook} style={socialStyle} alt="facebook" />
        </Link>
        <Link to='#'>
          <img src={instagram} style={socialStyle} alt="instagram" />
        </Link>
        <Link to='#'>
          <img src={twitter} style={socialStyle} alt="twitter" />
        </Link>
      </div>
    </Col>
  )
}

export default FollowUs