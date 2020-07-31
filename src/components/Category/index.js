import React from 'react'
import { Row, Col, Button } from 'antd'
import './style.scss'

const Category = () => {
  return (
    <>
      <Row 
        className="category"
        justify="center"
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32}}>
        <Col className="gutter-row" span={8} xs={12} sm={8}>
          <div className={`categoryImg categoryImg-1`}>
            <Button className="button">Womens</Button>
          </div>
        </Col>
        <Col className="gutter-row" span={8} xs={12} sm={8}>
          <div className={`categoryImg categoryImg-2`}>
            <Button className="button">Mens</Button>
          </div>
        </Col>
        <Col className="gutter-row" span={8} xs={24} sm={8}>
          <div className={`categoryImg categoryImg-3`}>
            <Button className="button">Accessories</Button>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default Category