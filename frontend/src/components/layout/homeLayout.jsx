import React from 'react'
import styled from './homeLayout.module.scss'
import HeroBanner from '../heroBanner/heroBanner'
import Header from '../header/header'
import Footer from '../footer/footer'
import Features from '../features/features'

export default function HomeLayout() {
  return (
<div className="layoutWrapper">
      <Header />
      <HeroBanner />
      <Features></Features>
      <Footer />
    </div>  )
}
