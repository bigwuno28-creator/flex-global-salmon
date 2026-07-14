import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FloatingContact from "../components/common/FloatingContact";

function MainLayout({ children }) {
  return (
    <>
      <Navbar />

      <main>{children}</main>

      <Footer />

      <FloatingContact />
    </>
  );
}

export default MainLayout;