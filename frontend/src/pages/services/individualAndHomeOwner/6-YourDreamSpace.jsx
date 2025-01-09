import ImageWithOverlay from "../../../utils/ImagePreview";

const YourDreamSpace = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-8 md:px-16 bg-white py-4 md:py-16">
      <div className="max-w-full flex md:hidden">
        <ImageWithOverlay img="https://cdn.prod.website-files.com/6703f76c902df755b27afd5c/671f736b6891a9e28f40422d_4x_USA-ECONOMY.jpg" />
      </div>
      {/* Left Section */}
      <div className="max-w-xl text-center md:text-left">
        <h2 className="hidden md:flex font-rubik  py-1 rounded-full text-2xl">
          {`${"Construction"}`}
        </h2>
        <div>
          <h1 className="text-xl sm:text-3xl font-rubik md:text-5xl md:py-5 font-medium  leading-tight">
            Building Your Dream Space
          </h1>
        </div>
        <p className="md:hidden font-rubik  py-1 rounded-full text-lg">
          {`${"Construction"}`}
        </p>
        <p className="text-gray-600 font-quicksand md:mb-6 mb-0">
          Once the design is finalized, we move in to the Construction Phase. We
          handle everything from securing necessary permits to managing
          day-to-day tasks with high-quality craftsmanship. Throughout the
          process, you’ll receive regular updates to keep you informed. We
          prioritize staying on schedule and minimizing disruptions, ensuring
          your dream space is delivered on time and exceeds your expectations.
        </p>
      </div>{" "}
      {/* Right Section */}
      <div className="max-w-full hidden md:flex">
        <ImageWithOverlay img="https://cdn.prod.website-files.com/6703f76c902df755b27afd5c/671f736b6891a9e28f40422d_4x_USA-ECONOMY.jpg" />
      </div>
    </div>
  );
};

export default YourDreamSpace;
