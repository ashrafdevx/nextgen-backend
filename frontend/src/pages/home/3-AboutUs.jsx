import ImageWithOverlay from "../../utils/ImagePreview";
import { useNavigate } from "react-router-dom";
const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-8 md:px-16 bg-white py-10 md:py-8">
        {/* Left Section */}
        <div className="max-w-xl text-center md:text-left">
          <button
            className="border font-quicksand transition duration-300 border-black hover:border-black px-8 py-2 rounded-full text-md mb-5 hover:bg-black hover:text-white ease-in-out delay-75"
            onClick={() => navigate("/about")}
          >
            About Us
          </button>
          <div>
            <h1 className="text-3xl font-rubik md:text-4xl leading-tight ">
              Your Trusted Partner in Real Estate Development and{" "}
            </h1>
            <h1 className="text-6xl font-rubik py-5 pt-0 font-bold leading-tight">
              Investments
            </h1>
          </div>
          <p className="text-gray-600 font-quicksand mb-6">
            At NextGen Properties, we specialize in creating stunning custom
            home management. Our dual commitment to craftsmanship and financial
            growth ensures your home and financial future.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <button className="bg-blue-600 font-quicksand text-white transition duration-300 px-9 py-2 rounded-full shadow-md hover:bg-blue-700">
              Consult Now
            </button>
            <button className="border transition font-quicksand duration-300 border-blue-600 text-blue-600 hover:bg-blue-900 py-2 px-9  rounded-full hover:text-white">
              Read More
            </button>
          </div>
        </div>

        {/* Right Section */}
        <ImageWithOverlay img="https://cdn.prod.website-files.com/6703f76c902df755b27afd5c/671a568f31e8a98567c19008_pexels-rdne-8292895.jpg?w=800&format=webp" />
      </div>
      {/* Build for Individual HomeTown Div */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-8 md:px-16 bg-white py-10 md:py-8">
        {/* Right Section */}
        <div className="max-w-full">
          <ImageWithOverlay img="https://cdn.prod.website-files.com/6703f76c902df755b27afd5c/671a56fa59f4cc3345d4cd60_pexels-dropshado-2251247.jpg" />
        </div>

        {/* Left Section */}
        <div className="max-w-xl text-center md:text-left">
          <button
            onClick={() => navigate("/services")}
            className="border duration-300 font-quicksand border-black hover:border-black px-8 py-2 rounded-full text-md mb-5 hover:bg-black hover:text-white transition ease-in-out delay-75"
          >
            Service
          </button>
          <div>
            <h1 className="text-3xl font-rubik md:text-5xl md:py-5 font-medium  leading-tight">
              Build for Individuals & Homeowners
            </h1>
          </div>
          <p className="text-gray-600 font-quicksand mb-6">
            At NextGen Properties, we bring your dream home to life with expert
            craftsmanship and personalized designs. From concept to completion,
            our dedicated team ensures every detail reflects your unique vision,
            delivering a home that combines quality, style, and lasting value.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <button className="bg-blue-600 text-white font-quicksand transition duration-300 px-9 py-2 rounded-full shadow-md hover:bg-blue-700">
              Consult Now
            </button>
            <button className="border transition font-quicksand  duration-300 border-blue-600 text-blue-600 hover:bg-blue-900 py-2 px-9 rounded-full hover:text-white">
              Read More
            </button>
          </div>
        </div>
      </div>

      {/* Build for Investment and Manager */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-8 md:px-16 bg-white py-10 md:py-8">
        {/* Left Section */}
        <div className="max-w-xl text-center md:text-left">
          <div>
            <h1 className="text-3xl w-full md:text-5xl font-medium font-rubik leading-tight ">
              Build for Investors and Investment Managers
            </h1>
          </div>
          <p className="text-gray-600 font-quicksand mb-6 py-6">
            At NextGen Properties , we bring your dream home to life with expert
            craftsmanship and personalized designs. From concept to completion,
            our dedicated team ensures every detail reflects your unique vision,
            delivering a home that combines quality, style, and lasting value.
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <button className="bg-blue-600 text-white transition duration-300 px-9 py-2 rounded-full shadow-md hover:bg-blue-700">
              Consult Now
            </button>
            <button className="border transition duration-300 border-blue-600 text-blue-600 hover:bg-blue-900 py-2 px-9  rounded-full hover:text-white">
              Read More
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="mt-8 md:mt-0 max-w-2xl">
          <ImageWithOverlay img="https://cdn.prod.website-files.com/6703f76c902df755b27afd5c/671a57606194fcd30b191155_pexels-enric-cruz-lopez-6039188.jpg" />
        </div>
      </div>

      {/* Real State Investment Manangement */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-8 md:px-16 bg-white py-10 md:py-8">
        {/* Right Section */}
        <div className="mt-8 md:mt-0 max-w-2xl">
          <ImageWithOverlay img="https://cdn.prod.website-files.com/6703f76c902df755b27afd5c/671a575f050f09d0cde7a510_pexels-vividcafe-681333.jpg" />
        </div>

        {/* Left Section */}
        <div className="max-w-xl text-center md:text-left">
          <div>
            <h1 className="text-3xl w-full md:text-5xl font-medium leading-tight ">
              Real Estate Investment Management
            </h1>
          </div>
          <p className="text-gray-600 mb-6 py-6">
            Discover your dream custom single-family home, designed to reflect
            your unique style and needs. Enjoy spacious layouts, premium
            finishes, and eco-friendly features, all in a community that
            prioritizes comfort and convenience. Build your perfect sanctuary
            today!
          </p>
          <div className="flex flex-col md:flex-row gap-4">
            <button className="bg-blue-600 text-white transition duration-300 px-9 py-2 rounded-full shadow-md hover:bg-blue-700">
              Consult Now
            </button>
            <button className="border transition duration-300 border-blue-600 text-blue-600 hover:bg-blue-900 py-2 px-9  rounded-full hover:text-white">
              Read More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
