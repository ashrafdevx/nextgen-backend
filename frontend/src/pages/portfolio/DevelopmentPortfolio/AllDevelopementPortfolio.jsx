import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "Black Pine",
    description:
      "Designed to minimize environmental impact while maximizing comfort, it’s the...",
    category: "Completed",
    image:
      "https://cdn.prod.website-files.com/67067fdc2c280a5f9b9112c8/67588ae972784d8cae5ceafa_WhatsApp%20Image%202024-12-09%20at%203.08.10%20AM.jpeg",
  },
  {
    id: 2,
    title: "Contemporary Family Home",
    description:
      "Designed to minimize environmental impact while maximizing comfort, it’s the...",
    category: "Under Construction",
    image:
      "https://cdn.prod.website-files.com/67067fdc2c280a5f9b9112c8/6710ff96015e583036141d64_5dee77c5147f6f7e78616f970f8068e5-p_e.webp",
  },
  {
    id: 3,
    title: "Hillside Retreat Villa",
    description:
      "Set against a stunning natural backdrop, this custom villa offers...",
    category: "Completed",
    image:
      "https://cdn.prod.website-files.com/67067fdc2c280a5f9b9112c8/6710fe877277163f12697c53_18d18e1084142ff99195fdf002913241-p_e.png",
  },
  {
    id: 4,
    title: "Contemporary Family Home",
    description:
      "Designed to minimize environmental impact while maximizing comfort, it’s the...",
    category: "Under Construction",
    image:
      "https://cdn.prod.website-files.com/67067fdc2c280a5f9b9112c8/6710ff96015e583036141d64_5dee77c5147f6f7e78616f970f8068e5-p_e.webp",
  },
  {
    id: 5,
    title: "Hillside Retreat Villa",
    description:
      "Set against a stunning natural backdrop, this custom villa offers...",
    category: "Completed",
    image:
      "https://cdn.prod.website-files.com/67067fdc2c280a5f9b9112c8/6710fe877277163f12697c53_18d18e1084142ff99195fdf002913241-p_e.png", // Replace with your image URL
  },
];

const AllDevelopmentPortfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const { pathname } = useLocation();
  console.log("pathname", pathname);
  const navigate = useNavigate();
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="container flex flex-col mx-auto">
      <div className="py-10 md:px-16">
        {/* Header */}
        <div className="py-2">
          {pathname === "/" && (
            <button
              onClick={() => navigate("/portfolio")}
              className="border-blue-600 text-blue-600 border transition hover:text-white duration-300 px-9 py-2 rounded-full shadow-md hover:bg-blue-700"
            >
              Our Projects
            </button>
          )}
        </div>
        <h2 className="text-4xl font-bold mt-2 py-4">
          Our Development Portfolio
        </h2>

        {/* Filters */}
        <div className="flex justify-center gap-4 mb-8">
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
        </div>

        {/* Projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="shadow-lg overflow-hidden bg-white"
            >
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
                    navigate(`/portfolio/development-portfolio/${project.id}`)
                  }
                  className="border-blue-600 text-blue-600 border transition hover:text-white duration-300 px-9 py-2 rounded-full shadow-md hover:bg-blue-700"
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container  flex items-center justify-center">
        {" "}
        <button
          onClick={() => navigate("/")}
          className=" border text-center transition bg-blue-600  text-white border-blue-600 hover:text-blue-600 duration-300 px-16 py-2 rounded-full shadow-md hover:bg-white"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default AllDevelopmentPortfolio;
