import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout" 
import SEO from "../components/seo"
import Slider from '../components/Slider'
import Category from "../components/Category"
import NewArrivals from "../components/NewArrivals"
import GenericComponent from "../components/GenericComponent"
import Instagram from "../components/Instagram"
import StayConnected from "../components/StayConnected"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Slider />
    <Category />
    <NewArrivals />
    <GenericComponent />
    <Instagram />
    <StayConnected />
  </Layout>
)

export default IndexPage
