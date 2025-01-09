import { useState } from "react";
import Slider from "react-slick";
import { MapPin, Phone, Home, Bath, ArrowLeft, ArrowRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

const InvestmentPortfolioById = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [
    "https://cdn.prod.website-files.com/67067fdc2c280a5f9b9112c8/67588ae972784d8cae5ceafa_WhatsApp%20Image%202024-12-09%20at%203.08.10%20AM.jpeg",
    "https://cdn.prod.website-files.com/67067fdc2c280a5f9b9112c8/6710ff96015e583036141d64_5dee77c5147f6f7e78616f970f8068e5-p_e.webp",
    "https://cdn.prod.website-files.com/67067fdc2c280a5f9b9112c8/6710fe877277163f12697c53_18d18e1084142ff99195fdf002913241-p_e.png",
    "https://cdn.prod.website-files.com/67067fdc2c280a5f9b9112c8/6710ff96015e583036141d64_5dee77c5147f6f7e78616f970f8068e5-p_e.webp",
    "https://cdn.prod.website-files.com/67067fdc2c280a5f9b9112c8/6710fe877277163f12697c53_18d18e1084142ff99195fdf002913241-p_e.png",
  ];

  const NextArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute right-4 top-1/2 z-10 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
    >
      <ArrowRight className="h-6 w-6 text-gray-800" />
    </button>
  );

  const PrevArrow = ({ onClick }) => (
    <button
      onClick={onClick}
      className="absolute left-4 top-1/2 z-10 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-md hover:bg-white"
    >
      <ArrowLeft className="h-6 w-6 text-gray-800" />
    </button>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setCurrentSlide(next),
  };
  const navigate = useNavigate();

  return (
    <div className="container mx-auto p-4">
      {/* Back button */}
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:bg-blue-600"
        onClick={() => navigate("/portfolio/development-portfolio")}
      >
        ← All Listings
      </button>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Image carousel section */}
          <div className="relative">
            <div className="absolute top-4 left-4 z-10 bg-black/50 text-white px-2 py-1 rounded">
              {currentSlide + 1} / {images.length}
            </div>
            <Slider {...settings} className="property-slider">
              {images.map((img, index) => (
                <div key={index} className="relative h-[400px]">
                  <img
                    src={img}
                    alt={`Property view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </Slider>

            {/* Thumbnail strip */}
            <div className="flex gap-2 mt-2 px-2">
              {images.map((img, index) => (
                <div
                  key={index}
                  className="w-24 h-16 cursor-pointer"
                  onClick={() => setCurrentSlide(index)}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover rounded"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Property details section */}
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-2xl font-semibold">125 1st Street, 2</h1>
                  <MapPin className="h-6 w-6 text-gray-500" />
                </div>
                <p className="text-gray-600">Boone, IA 50036</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-orange-500">$850 /mo</p>
                <span className="text-green-500 text-sm">Available Now</span>
              </div>
            </div>

            <div className="flex gap-4 mb-6">
              <div className="flex items-center gap-1">
                <Home className="h-5 w-5 text-gray-600" />
                <span>2 Bed</span>
              </div>
              <div className="flex items-center gap-1">
                <Bath className="h-5 w-5 text-gray-600" />
                <span>1 Bath</span>
              </div>
              <div className="flex items-center gap-1">
                <span>900 Sq. Ft.</span>
              </div>
            </div>

            <h2 className="font-semibold text-lg mb-2">
              Country View 125-2 Renovated
            </h2>

            <div className="space-y-4 text-gray-700">
              <p>
                {` We're excited to offer an exclusive special! Sign a 6-month
                lease and enjoy $100 off your rent each month. Additionally, if
                you're approved and sign a lease with us, we'll reimburse your
                application fee and apply it toward your first month's rent.`}
              </p>

              <p>
                Welcome to Country View, your new home in Boone, IA! This newly
                renovated, large, and spacious 2 bed 1 bath apartment is
                currently available.
              </p>

              <p>
                This property is located in a quiet area of Boone with local
                wildlife right outside your door near Little League Park.
              </p>

              <p>
                We pride ourselves on being pet-friendly, so your furry friends
                are more than welcome here (subject to approval on a
                case-by-case basis). We do require a $25/month pet fee per pet
                and an additional refundable $500 per pet, pet deposit, with a
                maximum of two.
              </p>
            </div>

            <div className="mt-6 space-y-2">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold">Rent:</p>
                  <p className="font-semibold">Security Deposit:</p>
                  <p className="font-semibold">Bedroom(s):</p>
                  <p className="font-semibold">Bathroom(s):</p>
                  <p className="font-semibold">Laundry:</p>
                </div>
                <div>
                  <p>$850</p>
                  <p>$850</p>
                  <p>2</p>
                  <p>1</p>
                  <p>
                    On Site with option for coin-operated or the tech friendly
                    app.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold mb-2">Utilities & Features:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Utilities included in rent: Garbage, Lawn Care, Snow Removal
                </li>
                <li>
                  Utilities Tenant is responsible for: Electricity/Gas,
                  Cable/Internet, Water/Sewer
                </li>
                <li>
                  Flat Rate Service Fee: $60 per month added to the rent to
                  cover water and sewer expenses.
                </li>
                <li>Parking: Off-Street Parking</li>
                <li>Garage: Available for rent</li>
                <li>Smoking: No Smoking on-premise</li>
                <li>Pets: Yes</li>
              </ul>
            </div>

            <div className="mt-6">
              <h3 className="font-semibold mb-2">Additional Fees:</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  Dwell Management Group Administrative Fee: $16/month
                  (non-negotiable)
                </li>
                <li>
                  Liability to Landlord Insurance is required: $10.50/month
                  (non-negotiable)
                </li>
                <li>
                  One-Time Rental Referral Program Fee: $5 (non-negotiable)
                </li>
              </ul>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
                Apply Now
              </button>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-gray-600" />
                <span className="text-gray-700">(515) 203-3559 Ext. 4</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentPortfolioById;
