import MainLayout from "../layouts/MainLayout";
import Hero from "../components/home/Hero";
import Metrics from "../components/home/Metrics";
import ValuePillars from "../components/home/ValuePillars";
import FeaturedProducts from "../components/home/FeaturedProducts";
import GlobalNetwork from "../components/home/GlobalNetwork";
import CallToAction from "../components/home/CallToAction";

function Home() {
  return (
    <MainLayout>

      <Hero />

      <Metrics />
      
      <ValuePillars />

      <FeaturedProducts />

      <GlobalNetwork />

      <CallToAction />

    </MainLayout>
  );
}

export default Home;