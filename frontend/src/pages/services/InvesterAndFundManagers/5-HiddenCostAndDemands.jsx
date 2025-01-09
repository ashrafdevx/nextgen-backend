import ImageWithOverlay from "../../../utils/ImagePreview";

const HiddenCostAndDemands = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-8 md:px-16 bg-white py-4 md:py-16">
      {/* Right Section */}
      <div className="max-w-full">
        <ImageWithOverlay img="https://cdn.prod.website-files.com/6703f76c902df755b27afd5c/671a5221a7c905f174d2ffa1_pexels-tima-miroshnichenko-6693655.jpg" />
      </div>

      {/* Left Section */}
      <div className="max-w-xl text-center md:text-left">
        <p className="hidden md:flex font-rubik rounded-full text-lg">
          {`${"Budget-Friendly Flat-Fee Development"}`}
        </p>
        <div>
          <h1 className="text-xl sm:text-3xl font-rubik md:text-5xl md:py-5 font-medium  leading-tight">
            No Hidden Costs, No Extra Demands
          </h1>
        </div>
        <p className="md:hidden font-rubik py-1 rounded-full text-lg">
          {`${"Budget-Friendly Flat-Fee Development"}`}
        </p>
        <p className="text-gray-600 font-quicksand md:mb-6 mb-0">
          Our flat-fee development service is designed with your budget in mind,
          providing a transparent and straight for ward approach to project
          oversight. You can expect comprehensive development at a fixed cost,
          eliminating hidden fees and unexpected expenses that can arise with
          traditional billing methods. Our commitment is to focus solely on
          delivering exceptional results without added demands, ensuring a
          smooth and hassle-free experience from start to finish.
        </p>
      </div>
    </div>
  );
};

export default HiddenCostAndDemands;
