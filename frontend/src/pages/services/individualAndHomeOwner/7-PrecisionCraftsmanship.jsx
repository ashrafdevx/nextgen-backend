import ImageWithOverlay from "../../../utils/ImagePreview";

const PrecisionCraftsmanship = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-8 md:px-16 bg-white py-4 md:py-16">
      {/* Right Section */}
      <div className="max-w-full">
        <ImageWithOverlay img="https://cdn.prod.website-files.com/6703f76c902df755b27afd5c/671a42b2dc5e571361bcc41e_pexels-life-of-pix-8092-p-800.jpg" />
      </div>

      {/* Left Section */}
      <div className="max-w-xl text-center md:text-left">
        <div>
          <h1 className="text-xl sm:text-3xl font-rubik md:text-5xl md:py-5 font-medium  leading-tight">
            Precision Craftsmanship
          </h1>
        </div>

        <p className="text-gray-600 font-quicksand md:mb-6 mb-0">
          At NextGen Properties, the journey ofconstructing your dream home
          begins with our skilled team taking charge.Precision is our
          cornerstone, ensuring every detail surpasses expectations.Building a
          house is not just about structure; it’s about
          transformingarchitectural blueprints into a masterpiece. Every
          element, from the foundationto the finishing touches, reflects our
          commitment to craftsmanship and quality.
        </p>
      </div>
    </div>
  );
};

export default PrecisionCraftsmanship;
