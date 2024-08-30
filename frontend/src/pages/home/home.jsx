import HeroBanner from '../../components/heroBanner/heroBanner'
import Features from "../../components/features/features";
import styled from './home.module.scss'
export  function Home() {
  
  return (

      <main className={styled.homeLayout}>
        <HeroBanner />
        <Features />
      </main>
  );
}
