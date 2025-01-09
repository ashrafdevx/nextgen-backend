import Banner from "./2-banner";
import ComprehensiveInvestmentManagement from "./3-ComprehensiveInvestmentManagement";
import PhotosConstructionUpdates from "./4-PhotosConstructionUpdates";
import EfficientProjectManagement from "./5-EfficientProjectManagement";
import ProvenTrackRecord from "./6-ProvenTrackRecord";
import InvestmentResearchAnalysis from "./7-InvestmentResearchAnalysis";
import ContactForm from "../../../utils/ContactForm";
import Heading from "./Heading";

const EstateInvestmentAndManagement = () => {
  return (
    <div className=" flex flex-col items-center  sm:pt-7">
      <Heading />
      <Banner />
      <ComprehensiveInvestmentManagement />
      <PhotosConstructionUpdates />
      <EfficientProjectManagement />
      <ProvenTrackRecord />
      <InvestmentResearchAnalysis />
      <ContactForm />
    </div>
  );
};

export default EstateInvestmentAndManagement;
