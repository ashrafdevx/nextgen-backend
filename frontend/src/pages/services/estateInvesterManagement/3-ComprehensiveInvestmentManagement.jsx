import ImageWithOverlay from "../../../utils/ImagePreview";

const ComprehensiveInvestmentManagement = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-8 md:px-16 bg-white py-4 md:py-16">
      {/* Left Section */}
      <div className="max-w-xl text-center md:text-left">
        <div>
          <h1 className="text-xl sm:text-3xl font-rubik md:text-5xl md:py-5 font-medium  leading-tight">
            Comprehensive Investment Management
          </h1>
        </div>
        <p className="text-gray-600 font-quicksand md:mb-6 mb-0">
          In addition to custom home building, we provide a wide array of real
          estate investment management services. Specializing in residential
          real estate, we focus on group investments without relying on
          intermediaries like banks or mortgage lenders, ensuring you achieve
          optimal returns on your financial investments. Whether you are
          pursuing along-term strategy or quick-turn investments, NextGen
          Properties offers the expertise and resources necessary for your
          success in the ever-evolving real estate landscape.
        </p>{" "}
        <button className="bg-blue-600 text-white transition duration-300 px-9 py-2 rounded-full shadow-md hover:bg-blue-700">
          Consult Now
        </button>
        {/* Right Section */}
      </div>{" "}
      <div className="max-w-full">
        <ImageWithOverlay img="https://cdn.prod.website-files.com/6703f76c902df755b27afd5c/671f8363b8e1eb4f241cdfb8_64ca906595fe1f0019df1f19.webp" />
      </div>
    </div>
  );
};

export default ComprehensiveInvestmentManagement;
