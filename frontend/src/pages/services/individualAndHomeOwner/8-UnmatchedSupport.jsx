const UnmatchedSupport = () => {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 mx-auto py-2 justify-center px-8 gap-8 mb-4">
      <div className="flex flex-col max-w-full max-h-96 ">
        <div className="aspect-w-4 aspect-h-3 w-full">
          <img
            src="https://cdn.prod.website-files.com/6703f76c902df755b27afd5c/671f7c423d27dc48dc44eb0e_greyson-joralemon-A1g0oeX29ec-unsplash.webp"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center  sm:p-4">
          <h3 className="text-lg sm:text-2xl font-semibold">
            Unmatched Support
          </h3>
          <p>
            Our commitment to superior craftsmanship doesn’t end when your
            project is completed. We offer a comprehensive one-year warranty to
            ensure the lasting quality and excellence of your home. At NextGen
            Properties, your satisfaction is our top priority, long after the
            final nail is in place.
          </p>
        </div>
      </div>
      <div className="flex flex-col max-w-full h-full ">
        <div className="aspect-w-4 aspect-h-3 w-full">
          <img
            src="https://cdn.prod.website-files.com/6703f76c902df755b27afd5c/671f7c423d27dc48dc44eb0e_greyson-joralemon-A1g0oeX29ec-unsplash.webp"
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center sm:p-4">
          <h3 className="text-lg sm:text-2xl font-semibold">
            Experience the NextGen Difference
          </h3>
          <p>
            Our clients are at the heart of everything we do. Explore our
            process firsthand through the testimonials of satisfied customers
            who have experienced smooth, successful projects with us. Let’s
            bring your dream home to life!
          </p>
        </div>
      </div>
    </div>
  );
};

export default UnmatchedSupport;
