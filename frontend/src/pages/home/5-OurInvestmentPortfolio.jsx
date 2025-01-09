import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/slider.css";
import { useNavigate } from "react-router-dom";
const projects = [
  {
    id: 1,
    title: "Black Pine",
    description:
      "Designed to minimize environmental impact while maximizing comfort, it’s the...",
    category: "Completed",
    image:
      "https://cdn.prod.website-files.com/67067fdc2c280a5f9b9112c8/671110ef0de9fe5f6c30fb8b_6710f3638fb66abd51c8d6de_5db09f65d4feb64b2366d9f39954f16f-cc_ft_960%2520(2).png", // Replace with your image URL
  },
  {
    id: 2,
    title: "Contemporary Family Home",
    description:
      "Designed to minimize environmental impact while maximizing comfort, it’s the...",
    category: "Under Construction",
    image:
      "https://cdn.prod.website-files.com/67067fdc2c280a5f9b9112c8/671110ef21f3567e28046b48_6710ff96015e583036141d64_5dee77c5147f6f7e78616f970f8068e5-p_e.webp", // Replace with your image URL
  },
  {
    id: 3,
    title: "Hillside Retreat Villa",
    description:
      "Set against a stunning natural backdrop, this custom villa offers...",
    category: "Completed",
    image:
      "https://cdn.prod.website-files.com/67067fdc2c280a5f9b9112c8/671110ef065703b55ba57ca0_6710f5ad53dd2e5bb2bf8a7e_43430264c8373db9ea00f9ac0fbd954e-p_e.png", // Replace with your image URL
  },
];
const CustomPrevArrow = ({ className, style, onClick }) => (
  <div
    className={`${className}  `}
    style={{
      ...style,
      display: "block",
      left: "-50px",
      zIndex: 10,
      fontSize: "0px", // Increase the icon size
      color: "#000", // Set icon color
    }}
    onClick={onClick}
  ></div>
);

const CustomNextArrow = ({ className, style, onClick }) => (
  <div
    className={`${className}`}
    style={{
      ...style,
      display: "block",
      right: "-30px",
      zIndex: 10,
      color: "#000", // Set icon color
    }}
    onClick={onClick}
  ></div>
);

const OurInvestmentPortfolio = () => {
  const navigate = useNavigate();
  const [activeFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);
  const settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container flex flex-col mx-auto mb-2">
      <div className="py-10 md:px-16">
        <h2 className="text-4xl font-bold mt-2 py-4">
          Our Investment Portfolio
        </h2>

        {/* Filters */}
        {/* <div className="flex justify-center gap-4 mb-8">
          {["All", "Completed", "Under Construction"].map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full text-sm ${
                activeFilter === category
                  ? "bg-blue-600 text-white"
                  : "border border-blue-600 text-blue-600 hover:bg-blue-100"
              }`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div> */}

        {/* Projects */}
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> */}
        <Slider {...settings}>
          {filteredProjects.map((project) => (
            <div key={project.id} className="p-4">
              {" "}
              <div className="shadow-lg overflow-hidden bg-white">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-80 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <button
                    onClick={() =>
                      navigate(`/portfolio/investment-portfolio/${project.id}`)
                    }
                    className="border-blue-600 text-blue-600 border transition hover:text-white duration-300 px-9 py-2 rounded-full shadow-md hover:bg-blue-700"
                  >
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {/* </div> */}

      <div className="container  flex items-center justify-center">
        {" "}
        <button
          onClick={() => navigate("/portfolio/investment-portfolio")}
          className=" border text-center transition bg-blue-600  text-white border-blue-600 hover:text-blue-600 duration-300 px-16 py-2 rounded-full shadow-md hover:bg-white"
        >
          View all
        </button>
      </div>
    </div>
  );
};

export default OurInvestmentPortfolio;
