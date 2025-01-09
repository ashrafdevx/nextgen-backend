import ContactForm from "../../utils/ContactForm";
import NextGenproperties from "./NextGenproperties";
import AboutBanner from "./banner";
import OurFounder from "./founder";
const About = () => {
  return (
    <>
      <div className=" flex flex-col pt-6">
        <h1 className="flex font-medium font-sans text-5xl justify-center ">
          About Us
        </h1>
        <AboutBanner />
        <OurFounder />
        <NextGenproperties />
        <ContactForm />
      </div>
      ;
    </>
  );
};

export default About;
