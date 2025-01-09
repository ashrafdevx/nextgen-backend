import Banner from "./2-banner";
import Heading from "./1-Heading";
import CustomizedBuildingSolutions from "./3-CustomizedBuildingSolutions";
import PhotosAndConstructionUpdate from "./4-PhotosAndConstructionUpdate";
import HiddenCostAndDemands from "./5-HiddenCostAndDemands";
import QualityAndExcellence from "./6-QualityAndExcellence";
import EfficientProjectManagement from "./7-EfficientProjectManagement";
import ContactForm from "../../../utils/ContactForm";
const InvesterAndFundManagers = () => {
  return (
    <div className=" flex flex-col items-center  sm:pt-7">
      <Heading />
      <Banner />
      <CustomizedBuildingSolutions />
      <PhotosAndConstructionUpdate />
      <HiddenCostAndDemands />
      <QualityAndExcellence />
      <EfficientProjectManagement />
      <ContactForm />
    </div>
  );
};

export default InvesterAndFundManagers;
