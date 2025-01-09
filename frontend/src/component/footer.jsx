import { LinkedinIcon, InstagramIcon, FacebookIcon } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#1a1f36] text-white py-12 px-4">
      <div className="sm:max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">NextGen Properties</h3>
          <p className="text-xl text-gray-300">
            Builders & Group
            <br />
            Investment Managers
          </p>
          <div className="flex pt-2 space-x-4">
            <a href="#" className="hover:text-gray-300 ">
              <LinkedinIcon size={20} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <InstagramIcon size={20} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FacebookIcon size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="space-y-6">
            <li>
              <a href="#" className="hover:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Terms and Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Portfolio
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold">Contact</h3>
          <p className="text-sm">
            812 W McDermott Dr,
            <br />
            #1032,Allen, TX 75013
          </p>
          <p className="text-sm">919-249-8450</p>
          <p className="text-sm">support@nextgenproperties.us</p>
        </div>

        {/* Newsletter */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Subscribe to Newsletter</h3>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 w-full rounded-l focus:outline-none text-black"
            />
            <button className="bg-blue-600 px-4 py-2 rounded-r hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
        © Copyright 2024. All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
