import MainLayout from "../layouts/MainLayout";
import AboutHero from "../components/about/AboutHero";
import CompanyHistory from "../components/about/CompanyHistory";
import MissionVision from "../components/about/MissionVision";
import ImportPartners from "../components/about/ImportPartners";
import WhyChooseUs from "../components/about/WhyChooseUs";
import AboutCTA from "../components/about/AboutCTA";

function About() {
  return (
    <MainLayout>

      <AboutHero />

      <CompanyHistory />

      <MissionVision />

      <ImportPartners />

      <WhyChooseUs />

      <AboutCTA />

    </MainLayout>
  );
}

export default About;