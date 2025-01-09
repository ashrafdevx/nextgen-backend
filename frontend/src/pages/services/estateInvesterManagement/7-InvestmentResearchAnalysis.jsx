import ImageWithOverlay from "../../../utils/ImagePreview";

const InvestmentResearchAnalysis = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-8 md:px-16 bg-white py-4 md:py-16">
      {/* Left Section */}
      <div className="max-w-xl text-center md:text-left">
        <div>
          <div>
            <p className="hidden md:flex font-rubik rounded-full text-xl">
              {`${"Track Your Investment's Progress"}`}
            </p>
          </div>
          <p className="text-gray-600 font-quicksand md:mb-6 mb-0">
            We provide expert market insights to help identify promising
            investment opportunities, maximizing your potential returns.
          </p>{" "}
        </div>
        <div>
          <div>
            <p className="hidden md:flex font-rubik rounded-full text-xl">
              {`${"Risk Management"}`}
            </p>
          </div>
          <p className="text-gray-600 font-quicksand md:mb-6 mb-0">
            Our team conducts comprehensive risk assessments to ensure every
            decision safeguards your assets.
          </p>{" "}
        </div>{" "}
        <div>
          <div>
            <p className="hidden md:flex font-rubik rounded-full text-xl">
              {`${"Financial Planning"}`}
            </p>
          </div>
          <p className="text-gray-600 font-quicksand md:mb-6 mb-0">
            We develop custom financial strategies focused on achieving
            long-term stability and growth.
          </p>{" "}
        </div>
        <div>
          <div>
            <p className="hidden md:flex font-rubik rounded-full text-xl">
              {`${"Performance Reporting"}`}
            </p>
          </div>
          <p className="text-gray-600 font-quicksand md:mb-6 mb-0">
            Transparent reporting keeps you updated and enables strategic
            adjustments as needed.
          </p>{" "}
        </div>
      </div>{" "}
      <div className="max-w-full">
        <ImageWithOverlay img="https://cdn.prod.website-files.com/6703f76c902df755b27afd5c/671f871c3774ae2003dc7e7e_DJI_0500-HDR-Edit.webp" />
      </div>
    </div>
  );
};

export default InvestmentResearchAnalysis;
