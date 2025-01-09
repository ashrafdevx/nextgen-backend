import { Route, Routes } from "react-router-dom";
import "./App.css";

import About from "./pages/about/about";
import PrivacyPolicy from "./pages/privacyPolicy";
import Blogs from "./pages/blogs";
import Header from "./component/header";
import Footer from "./component/footer";
import Services from "./pages/services/services";
import IndividualAndHomeOwner from "./pages/services/individualAndHomeOwner/index";
import InvesterAndFundManagers from "./pages/services/InvesterAndFundManagers";
import EstateInvestmentAndManagement from "./pages/services/estateInvesterManagement";
import Portfolio from "./pages/portfolio";
import PortfolioDevelopmentMain from "./pages/portfolio/DevelopmentPortfolio/RealEstatePortfolioDevelopment";
import InvestmentPortfolioMain from "./pages/portfolio/InvestmenttPortfolio/RealEstatePortfolioInvestment";
import Home from "./pages/home/home";
import LoginPage from "./pages/login/login";
import PropertyListing from "./pages/portfolio/DevelopmentPortfolio/developPortfolioById";
import InvestmentPortfolioById from "./pages/portfolio/InvestmenttPortfolio/investmentPortfolioById";
import ContactUs from "./pages/contactUs/contactUs";
import TawkToWidget from "./utils/tawk";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

function App() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Header />

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />}>
          <Route
            path="individuals-homeowners"
            element={<IndividualAndHomeOwner />}
          />
          <Route
            path="investment-management"
            element={<EstateInvestmentAndManagement />}
          />
          <Route
            path="investors-fund-manager"
            element={<InvesterAndFundManagers />}
          />
        </Route>
        <Route path="/portfolio" element={<Portfolio />}>
          <Route
            path="development-portfolio"
            element={<PortfolioDevelopmentMain />}
          />
          <Route
            path="development-portfolio/:id"
            element={<PropertyListing />}
          />

          <Route
            path="investment-portfolio"
            element={<InvestmentPortfolioMain />}
          />
          <Route
            path="investment-portfolio/:id"
            element={<InvestmentPortfolioById />}
          />
        </Route>
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/blog" element={<Blogs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <TawkToWidget />
      {/* Scroll to Top Button */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-32 right-6 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} />
        </button>
      )}
      <Footer />
    </>
  );
}

export default App;
