import React from 'react'
import { Carousel, Button } from "antd"
import './style.scss'


import slideOne from '../../images/Hero-Image-1.jpg'
import slideTwo from '../../images/Hero-Image-2.jpg'

const slides = [
  {
    slideNumber: 1,
    imgSrc: slideOne,
    title: 'Title Goes Here',
    tagline: 'Tagline will go right here.'
  },
  {
    slideNumber: 2,
    imgSrc: slideTwo,
    title: 'Slide 2',
    tagline: 'Slide 2 tagline'
  }
]

const Slider = () => {
  const onChange = (e) => {
    console.log(e)
  }
  const renderSlides = () => {
    console.log(slides)
    return slides.map(slide => {
      const { slideNumber, title, tagline, imgSrc } = slide
      console.log(slide.imgSrc)
      return (
        <div 
          key={slideNumber}
          className="slide">
          <div className={`slideImg slideImg-${slideNumber}`}>
            <h3 className="title">{title}</h3>
            <p className="tagline">{tagline}</p>
            <Button>SHOP NOW</Button>
          </div>
        </div>
      )
    })
  }
  return (
    <Carousel className="slider" afterChange={onChange}>
      {renderSlides()}
    </Carousel>
  )
}

export default Slider
