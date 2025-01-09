import ImageWithOverlay from "../../../utils/ImagePreview";

const EfficientProjectManagement = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-8 md:px-16 bg-white py-4 md:py-16">
      {/* Right Section */}
      <div className="max-w-full">
        <ImageWithOverlay img="https://cdn.prod.website-files.com/6703f76c902df755b27afd5c/671f7f6cbb33c02b284d8ce4_Ultimate-Guide-to-Construction-Management-Procore-Blog-Hero.png" />
      </div>

      {/* Left Section */}
      <div className="max-w-xl text-center md:text-left">
        <div>
          <h1 className="text-xl sm:text-3xl font-rubik md:text-5xl md:py-5 font-medium  leading-tight">
            Efficient Project Management
          </h1>
        </div>

        <p className="text-gray-600 font-quicksand md:mb-6 mb-0">
          We are committed to efficient project management, ensuring that
          timelines are met without compromising quality. Our organized approach
          keeps your project on track from inception to completion, allowing you
          to focus on your core business activities while we handle the
          complexities of construction.
        </p>
      </div>
    </div>
  );
};

export default EfficientProjectManagement;
