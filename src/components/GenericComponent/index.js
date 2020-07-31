import React from 'react'
import { Button } from 'antd'
import './style.scss'

const GenericComponent = () => {
  return (
    <div className="generic-component">
      <div className="text-wrapper">
        <h1 className="title">Title Goes Here</h1>
        <p className="tagline">Tagline will go right here.</p>
        <Button className="cta">SHOP NOW</Button>
      </div>
    </div>
  )
}


export default GenericComponent