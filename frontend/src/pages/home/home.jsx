import HeroBanner from '../../components/heroBanner/heroBanner'
import Header from "../../components/header/header";
import Features from "../../components/features/features";
import Footer from "../../components/footer/footer";

export  function Home() {
  
  return (
       <>
      <Header />
      <main>
        <HeroBanner />
        <Features />
      </main>
      <Footer />
    </>
  );
}
