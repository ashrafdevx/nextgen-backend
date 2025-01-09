import ImageWithOverlay from "../../../utils/ImagePreview";

const CustomizedBuildingSolutions = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-8 md:px-16 bg-white py-4 md:py-16">
      {/* Right Section */}
      <div className="max-w-full">
        <ImageWithOverlay img="https://cdn.prod.website-files.com/6703f76c902df755b27afd5c/671a51b01a7b6a5cf75e4693_pexels-lexovertoom-1109541.jpg" />
      </div>

      {/* Left Section */}
      <div className="max-w-xl text-center md:text-left">
        <div>
          <h1 className="text-xl sm:text-3xl font-rubik md:text-5xl md:py-5 font-medium  leading-tight">
            Customized Building Solutions
          </h1>
        </div>

        <p className="text-gray-600 font-quicksand md:mb-6 mb-0">
          Understanding that every client has uniqueneeds, we offer customized
          building solutions specifically designed to alignwith your goals and
          requirements. Our personalized approach guarantees atailored
          experience throughout the construction process, ensuring that we
          meetand exceed your expectations.
        </p>
      </div>
    </div>
  );
};

export default CustomizedBuildingSolutions;
