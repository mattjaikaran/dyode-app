import React from 'react'
import { Col, Row } from 'antd'
import './style.scss'

import social1 from '../../images/Social-1.jpg'
import social2 from '../../images/Social-2.jpg'
import social3 from '../../images/Social-3.jpg'
import social4 from '../../images/Social-4.jpg'
import social5 from '../../images/Social-5.jpg'

const Instagram = () => {
  return (
    <div className="instagram">
      <h3 className="title">Follow us on Instagram!</h3>
      <div className="img-wrapper">
        <Row justify="space-around" gutter={16}>
          <Col span={1} xs={8} sm={8} md={4}>
            <img src={social1} alt="social" />
          </Col>
          <Col span={1} xs={8} sm={8} md={4}>
            <img src={social2} alt="social" />
          </Col>
          <Col span={1} xs={8} sm={8} md={4}>
            <img src={social3} alt="social" />
          </Col>
          <Col span={1} xs={0} sm={8} md={4}>
            <img src={social4} alt="social" />
          </Col>
          <Col span={1} xs={0} sm={8} md={4}>
            <img src={social5} alt="social" />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Instagram