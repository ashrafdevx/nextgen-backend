import AboutUs from "./3-AboutUs.jsx";
import Banner from "./1-Banner.jsx";
import NextGenProperties from "./2-NextGenProperties.jsx";
import OurInvestmentPortfolio from "./5-OurInvestmentPortfolio.jsx";
import AskQuesdtion from "./6-AskQuesdtion.jsx";
import TestimonialCarousel from "./7-OurCustomerFeedback.jsx";

import ContactForm from "../../utils/ContactForm.jsx";
import OurBlogs from "../../utils/blogs.jsx";
import DevelopmentPortfolio from "./4-developmentPortfolio.jsx";
// import ContactForm from "../component/home/9-form.jsx";

const Home = () => {
  return (
    <>
      <Banner />
      <NextGenProperties />
      <AboutUs />
      <DevelopmentPortfolio />
      <OurInvestmentPortfolio />
      <AskQuesdtion />
      <TestimonialCarousel />
      <OurBlogs />
      <ContactForm />
    </>
  );
};

export default Home;
