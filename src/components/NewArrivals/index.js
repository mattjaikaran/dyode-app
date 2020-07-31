import React from 'react'
import { Carousel, Row, Col, Button } from 'antd'
import './style.scss'

import newArrivalsImg from '../../images/Product-Image-1.jpg'

const ProductDetails = () => (
  <div className="product-wrapper">
    <img 
      src={newArrivalsImg} 
      className="product-img"
      alt="new-arrivals" />
    <p className="product-title">Product Title</p>
    <small className="product-category">Womens T-Shirt</small>
    <h5 className="product-price">$19.99</h5>
  </div>
)

const NewArrivals = () => {
  function onChange(a, b, c) {
    console.log(a, b, c)
  }
  return (
    <>
      {/* <Carousel className="new-arrivals" afterChange={onChange}> */}
        <Row className="new-arrivals" justify="space-between">
          <Col className="gutter-row" xs={12} sm={8} md={6}>
            <ProductDetails />
          </Col>
          <Col className="gutter-row" xs={12} sm={8} md={6}>
            <ProductDetails />
          </Col>
          <Col className="gutter-row" xs={0} sm={8} md={6}>
            <ProductDetails />
          </Col>
          <Col className="gutter-row" xs={0} sm={0} md={6}>
            <ProductDetails />
          </Col>
        </Row>
      {/* </Carousel> */}
    </>
  )
}

export default NewArrivals