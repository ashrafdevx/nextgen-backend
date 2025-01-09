import ImageWithOverlay from "../../../utils/ImagePreview";

const ProvenTrackRecord = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-8 md:px-16 bg-white py-4 md:py-16">
      <div className="max-w-full">
        <ImageWithOverlay img="https://cdn.prod.website-files.com/6703f76c902df755b27afd5c/671f7c423d27dc48dc44eb0e_greyson-joralemon-A1g0oeX29ec-unsplash.webp" />
      </div>{" "}
      {/* Left Section */}
      <div className="max-w-xl text-center md:text-left">
        <div>
          <h1 className="text-xl sm:text-3xl font-rubik md:text-5xl md:py-5 font-medium  leading-tight">
            Proven Track Record
          </h1>
        </div>
        <p className="text-gray-600 font-quicksand md:mb-6 mb-0">
          NextGen Properties has a rich history of successfully completing
          high-quality real estate projects in the Dallas-Fort Worth area. Our
          portfolio, featuring custom homes and residential developments,
          reflects our unwavering commitment to excellence. Each project is
          executed with meticulous attention to detail, ensuring that our
          clients are not just satisfied but genuinely delighted with the final
          result.
        </p>{" "}
        {/* Right Section */}
      </div>{" "}
    </div>
  );
};

export default ProvenTrackRecord;
