import React from 'react'
import './style.scss'
import { Row, Col, Input, Button } from 'antd'
import EmailIcon from '../../images/Email-Icon.png'


const StayConnected = () => {
  return (
    <div className="stay-connected">
      <h3 className="title">
        <span className="img-wrapper">
          <img src={EmailIcon} />
        </span>
        Sign up &amp; Stay Connected!
      </h3>
      <Row justify="space-around" className="newsletter-wrapper">
        <Col className="newsletter-text" span={12} xs={24} sm={12}>
          <p className="signup-text">
            Sign up for the newsletter and get 20% off! Gain access to exclusive offers and be the first to know when new stuff drops!
          </p>
        </Col>
        <Col className="newsletter-inputs" span={12} xs={24} sm={12}>
          <Row>
            <Col span={12}>
              <Input className="input" placeholder="Your Email Address" />
            </Col>
            <Col span={12}>
              <Button className="button">Subscribe</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default StayConnected