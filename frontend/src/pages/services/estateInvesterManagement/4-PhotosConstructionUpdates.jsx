import ImageWithOverlay from "../../../utils/ImagePreview";

const PhotosConstructionUpdates = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-8 md:px-16 bg-white py-4 md:py-16">
      {/* Right Section */}
      <div className="max-w-full">
        <ImageWithOverlay img="https://cdn.prod.website-files.com/6703f76c902df755b27afd5c/671f85b7df64e4891ff92f61_residential-home-construction-workers-keyimage2.jpg" />
      </div>

      {/* Left Section */}
      <div className="max-w-xl text-center md:text-left">
        <p className="hidden md:flex font-rubik rounded-full text-xl">
          {`${"Track Your Investment's Progress"}`}
        </p>
        <div>
          <h1 className="text-xl sm:text-3xl font-rubik md:text-5xl md:py-5 font-medium  leading-tight">
            Photos and Construction Updates
          </h1>
        </div>
        <p className="md:hidden font-rubik py-1 rounded-full text-lg">
          {`${"Track Your Investment's Progress"}`}
        </p>
        <p className="text-gray-600 font-quicksand md:mb-6 mb-0">
          {`Unlike many builders in the industry, we prioritize transparency by
          offering our investors complete visibility throughout the construction
          process. We provide regular updates and real-time photos, allowing you
          to monitor your investment's progress and stay informed as your
          project takes shape. This level of communication fosters trust and
          confidence in our partnership, assuring you that your project is in
          capable hands.`}
        </p>
        <p className="text-gray-600 font-quicksand md:mb-6 mb-0">
          We prioritize clear communication and responsiveness throughout the
          construction process, providing personalized support to ensure a
          seamless experience and complete satisfaction for our clients. Our
          team is dedicated to addressing your concerns and making the
          construction journey as smooth as possible.
        </p>
      </div>
    </div>
  );
};

export default PhotosConstructionUpdates;
