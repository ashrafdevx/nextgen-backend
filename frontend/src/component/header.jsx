import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState(location.pathname);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setActiveItem(location.pathname);
  }, [location.pathname]);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    {
      name: "Services",
      path: "/services",
      dropdownItems: [
        {
          name: "Build for Individuals & Homeowners",
          path: "/services/individuals-homeowners",
        },
        {
          name: "Home Build for Investors & Fund Managers",
          path: "/services/investors-fund-manager",
        },
        {
          name: "Real Estate Investment Management",
          path: "/services/investment-management",
        },
      ],
    },
    {
      name: "Portfolio",
      path: "/portfolio",
      dropdownItems: [
        {
          name: "Real Estate Development Portfolio",
          path: "/portfolio/development-portfolio",
        },
        {
          name: "Real Estate Investment Portfolio",
          path: "/portfolio/investment-portfolio",
        },
      ],
    },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Blogs", path: "/blog" },
  ];

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = (path) => {
    setActiveItem(path);
    setMenuOpen(false);
    navigate(path);
  };

  return (
    <div className="container mx-auto py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="lg:hidden">
            <button onClick={handleMenuToggle} className="p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <Link to="/" className="ml-2">
            <img
              src="https://cdn.prod.website-files.com/6703f76c902df755b27afd5c/6736c94fd7a302e4ac8ed8f3_NextGen%20Properties%20Logo.jpg"
              alt="NextGen Properties Logo"
              className="h-12 w-20 object-cover"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          {menuItems.map((item) => (
            <div key={item.path} className="relative group">
              <Link
                to={item.path}
                className={`py-2 px-3 relative rounded-md transition font-quicksand text-lg duration-300 ${
                  activeItem === item.path
                    ? "text-white bg-blue-700"
                    : " group-hover:text-white group-hover:bg-blue-700"
                }`}
              >
                {item.name}
              </Link>
              {item.dropdownItems ? (
                <div className="absolute left-0 mt-2 w-80 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    {item.dropdownItems.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.path}
                        to={dropdownItem.path}
                        onClick={() => handleMenuItemClick(dropdownItem.path)}
                        className="block px-4 py-3 text-gray-800 hover:bg-blue-700 hover:text-white transition-colors duration-300"
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <button
            onClick={() => navigate("/login")}
            className="rounded-full bg-blue-700 px-6 py-2 text-white font-quicksand text-lg hover:bg-blue-800 transition-colors duration-300"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/contact-us")}
            className="rounded-full bg-blue-700 px-6 py-2 text-white font-quicksand text-lg hover:bg-blue-800 transition-colors duration-300"
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-20 transition-opacity duration-300 lg:hidden ${
            menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div
            className={`fixed inset-y-0 right-0 w-full bg-red-500 transform transition-transform duration-300 ${
              menuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="p-4">
              {menuItems.map((item) => (
                <div key={item.path} className="py-2">
                  <Link
                    to={item.path}
                    onClick={() => handleMenuItemClick(item.path)}
                    className="block py-2 text-gray-800 hover:text-blue-700"
                  >
                    {item.name}
                  </Link>
                  {item.dropdownItems && (
                    <div className="ml-4 mt-2">
                      {item.dropdownItems.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.path}
                          to={dropdownItem.path}
                          onClick={() => handleMenuItemClick(dropdownItem.path)}
                          className="block py-2 text-gray-600 hover:text-blue-700"
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="mt-4 space-y-2">
                <button className="w-full rounded-full bg-blue-700 px-4 py-2 text-white font-quicksand text-lg hover:bg-blue-800">
                  Login
                </button>
                <button className="w-full rounded-full bg-blue-700 px-4 py-2 text-white font-quicksand text-lg hover:bg-blue-800">
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
