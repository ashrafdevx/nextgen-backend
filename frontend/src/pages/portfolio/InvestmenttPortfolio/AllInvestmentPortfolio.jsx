import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const projects = [
  {
    id: 1,
    title: "5808 Black Pine Circle, Granbury, TX 76048",
    status: "sold",
    builtIn: "2024",
    price: null,
    LotArea: "0.09",
    LivingArea: "1,627",
    coverdArea: "2,700",
    bedRoom: 4,
    bethRoom: 3,
    Garage: 2,
    floor: 2,
    Community: "Canyon Creek, Granbury, TX",
    elevations:
      "Front Elevation: stained wood – Back & Side Elevations: Hardy Plank",
    description:
      "Designed to minimize environmental impact while maximizing comfort, it’s the...",
    category: "sell",
    image:
      "https://cdn.prod.website-files.com/67067fdc2c280a5f9b9112c8/67588ae972784d8cae5ceafa_WhatsApp%20Image%202024-12-09%20at%203.08.10%20AM.jpeg", // Replace with your image URL
  },
  {
    id: 2,
    title: "5634 Barkridge Dr, Granbury, TX 76048",
    status: "Early January 2025",
    price: "$400k-$425k",
    builtIn: "January 2025",
    LotArea: "0.09",
    LivingArea: "2,228",
    coverdArea: "1,950",
    bedRoom: 3,
    bethRoom: 2,
    Garage: 1,
    floor: 1,
    Community: "Canyon Creek, Granbury, TX",
    elevations: "Front Elevation: Brick – Back & Side Elevations: Hardy Plank",
    description:
      "Designed to minimize environmental impact while maximizing comfort, it’s the...",
    category: "Under Construction",
    image:
      "https://cdn.prod.website-files.com/67067fdc2c280a5f9b9112c8/6710ff96015e583036141d64_5dee77c5147f6f7e78616f970f8068e5-p_e.webp", // Replace with your image URL
  },
  {
    id: 4,
    title: "56345702 Barkridge Dr, Granbury, TX 76048",
    status: "Under Construction",
    price: "$400k-$425k",
    builtIn: "January 2025",
    LotArea: "0.09",
    LivingArea: "2,228",
    coverdArea: "1,950",
    bedRoom: 3,
    bethRoom: 2,
    Garage: 1,
    floor: 1,
    Community: "Canyon Creek, Granbury, TX",
    elevations:
      "Front Elevation: stained wood – Back & Side Elevations: Hardy Plank",
    description:
      "Set against a stunning natural backdrop, this custom villa offers...",
    category: "Completed",
    image:
      "https://cdn.prod.website-files.com/67067fdc2c280a5f9b9112c8/6710fe877277163f12697c53_18d18e1084142ff99195fdf002913241-p_e.png", // Replace with your image URL
  },
  {
    id: 3,
    title: "5503 Northview Ct, Granbury, TX 76048",
    status: "Under Construction",
    price: "$390k-$410k",
    builtIn: "April 2025",
    lotArea: "0.09 acre",
    livingArea: "2,200 sq ft",
    coveredArea: "2,700 sq ft",
    bedRoom: 4,
    bathRoom: 3,
    garage: "2 cars",
    floor: 2,
    community: "Canyon Creek, Granbury, TX",
    elevations: "Front Elevation: Brick – Back & Side Elevations: Hardy Plank",
  },
  {
    id: 4,
    title: "5505 Northview Ct, Granbury, TX 76048",
    status: "Under Construction",
    price: "$400k-$430k",
    builtIn: "April 2025",
    lotArea: "0.09 acre",
    livingArea: "2,338 sq ft",
    coveredArea: "2,900 sq ft",
    bedRoom: 4,
    bathRoom: 3,
    garage: "2 cars",
    floor: 2,
    community: "Canyon Creek, Granbury, TX",
    elevations: "Front Elevation: Brick – Back & Side Elevations: Hardy Plank",
    image:
      "https://cdn.prod.website-files.com/67067fdc2c280a5f9b9112c8/6710fe877277163f12697c53_18d18e1084142ff99195fdf002913241-p_e.png", // Replace with your image URL
  },
  {
    id: 5,
    title: "2300 Candlestick Dr, Granbury, TX 76049",
    status: "Under Construction",
    price: "$725k",
    builtIn: "March 2025",
    lotArea: "0.7 acre",
    livingArea: "3,200 sq ft",
    coveredArea: "4,501 sq ft",
    bedRoom: 4,
    bathRoom: 3.5,
    garage: "3 cars",
    floor: 1,
    community: "Pecan Plantation, Granbury, TX",
    elevations:
      "Front Elevation: Brick & Stones – Back & Side Elevations: All Brick",
    image:
      "https://cdn.prod.website-files.com/67067fdc2c280a5f9b9112c8/6710fe877277163f12697c53_18d18e1084142ff99195fdf002913241-p_e.png", // Replace with your image URL
  },
  {
    id: 6,
    title: "2416 Candlestick Dr, Granbury, TX 76049",
    status: "Under Construction",
    price: "$725k",
    builtIn: "March 2025",
    lotArea: "0.67 acre",
    livingArea: "3,200 sq ft",
    coveredArea: "4,501 sq ft",
    bedRoom: 4,
    bathRoom: 3.5,
    garage: "3 cars",
    image:
      "https://cdn.prod.website-files.com/67067fdc2c280a5f9b9112c8/6710fe877277163f12697c53_18d18e1084142ff99195fdf002913241-p_e.png", // Replace with your image URL

    floor: 1,
    community: "Pecan Plantation, Granbury, TX",
    elevations:
      "Front Elevation: Brick & Stones – Back & Side Elevations: All Brick",
  },
];

const AllInvestmentPortfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const { pathname } = useLocation();
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
                    navigate(`/portfolio/investment-portfolio/${project.id}`)
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
    </div>
  );
};

export default AllInvestmentPortfolio;
