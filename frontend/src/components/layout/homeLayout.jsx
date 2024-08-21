import styled from './homeLayout.module.scss'
import HeroBanner from '../heroBanner/heroBanner'
import Header from '../header/header'
import Footer from '../footer/footer'
import Features from '../features/features'

export default function HomeLayout() {
  return (
<div className={styled.homeLayout}>
      <Header></Header>
      <HeroBanner></HeroBanner>
      <Features></Features>
      <Footer></Footer>
    </div>  )
}
