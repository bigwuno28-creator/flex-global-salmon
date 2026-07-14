import MainLayout from "../layouts/MainLayout";
import ContactHero from "../components/contact/ContactHero";
import ContactSummary from "../components/contact/ContactSummary";
import TradeInquiryForm from "../components/contact/TradeInquiryForm";
import LocationSection from "../components/contact/LocationSection";
import ServiceCoverage from "../components/contact/ServiceCoverage";
import TrustCenter from "../components/contact/TrustCenter";

function Contact() {
  return (
    <MainLayout>

      <ContactHero />

      <ContactSummary />

      <TradeInquiryForm />

      <LocationSection />

      <ServiceCoverage />

      <TrustCenter />

    </MainLayout>
  );
}

export default Contact;