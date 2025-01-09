const OurBlogs = () => {
  return (
    <>
      <div className="  container mx-auto  p-16">
        <div className="container flex-col items-center flex pb-6 pt-10 bg-gray-100">
          <h1 className="text-5xl font-bold text-gray-800 mt-2">Our Blogs</h1>
          <div className="pt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-6 gap-6 p-4">
            {/* 1st Card */}
            <div className="card card-compact bg-base-100 w-full shadow-xl p-2">
              <figure className="p-2">
                <img
                  src="https://cdn.prod.website-files.com/67067fdc2c280a5f9b9112c8/671367d3b8e666f9944bed28_rodeo-project-management-software-b2L3f7ednYE-unsplash.png"
                  alt="Shoes"
                  className="w-full rounded-lg object-cover h-72"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">The Construction Process</h2>
                <p>
                  At NextGen Properties, we handle every detail of your
                  custom...
                </p>
                <div className="card-actions justify-start">
                  <button className="px-4 py-3 rounded-lg text-white bg-blue-600">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>

            {/* 2nd Card */}
            <div className="card card-compact bg-base-100 w-full shadow-xl p-2">
              <figure className="p-2">
                <img
                  src="https://cdn.prod.website-files.com/67067fdc2c280a5f9b9112c8/67135ea47f4e2d671ac3a52b_pexels-steffen-coonan-1005786-2098624.webp"
                  alt="Shoes"
                  className="w-full object-cover  rounded-lg  h-72"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">The Construction Process</h2>
                <p>
                  At NextGen Properties, we handle every detail of your
                  custom...
                </p>
                <div className="card-actions justify-start">
                  <button className="px-4 py-3 rounded-lg text-white bg-blue-600">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>

            {/* 3rd Card */}
            <div className="card card-compact bg-base-100 w-full p-2 shadow-xl">
              <figure className="p-2">
                <img
                  src="https://cdn.prod.website-files.com/67067fdc2c280a5f9b9112c8/6713633a8d504582646c3c32_seo-galaxy-zZ7J5qri6qY-unsplash.webp"
                  alt="Shoes"
                  className="w-full object-cover  rounded-lg  h-72"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">The Construction Process</h2>
                <p>
                  At NextGen Properties, we handle every detail of your
                  custom...
                </p>
                <div className="card-actions justify-start">
                  <button className="px-4 py-3 rounded-lg text-white bg-blue-600">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="container mt-3 flex items-center justify-center">
            {" "}
            <button
              onClick={() => alert("View All For Our Project has Cliked!!!")}
              className=" border text-center transition bg-blue-600  text-white border-blue-600 hover:text-blue-600 duration-300 px-16 py-2 rounded-full shadow-md hover:bg-white"
            >
              View all
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurBlogs;
