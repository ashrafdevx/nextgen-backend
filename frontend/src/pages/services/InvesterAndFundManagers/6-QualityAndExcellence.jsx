import ImageWithOverlay from "../../../utils/ImagePreview";

const QualityAndExcellence = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-8 md:px-16 bg-white py-4 md:py-16">
      {/* Left Section */}
      <div className="max-w-xl text-center md:text-left">
        <p className="hidden md:flex font-rubik rounded-full text-lg">
          {`${"Commitment"}`}
        </p>
        <div>
          <h1 className="text-xl sm:text-3xl font-rubik md:text-5xl md:py-5 font-medium  leading-tight">
            Quality and Excellence
          </h1>
        </div>
        <p className="md:hidden font-rubik py-1 rounded-full text-lg">
          {`${"Commitment"}`}
        </p>
        <p className="text-gray-600 font-quicksand md:mb-6 mb-0">
          Our commitment to excellence drives us to utilize only high-quality
          materials and skilled craftsmanship. We understand that your
          investment deserves the best, and we strive to ensure that every
          project meets the highest standards of durability and aesthetics.
        </p>
        <p className="text-gray-600 font-quicksand md:mb-6 mb-0">
          We prioritize clear communication and responsiveness throughout the
          construction process, providing personalized support to ensure a
          seamless experience and complete satisfaction for our clients. Our
          team is dedicated to addressing your concerns and making the
          construction journey as smooth as possible.
        </p>
      </div>
      {/* Right Section */}
      <div className="max-w-full">
        <ImageWithOverlay img="https://cdn.prod.website-files.com/6703f76c902df755b27afd5c/671f7ebb1894853479d75324_14.webp" />
      </div>
    </div>
  );
};

export default QualityAndExcellence;
