import { useState, useEffect } from "react";

const NextGenProperties = () => {
  const data = [
    {
      title: "Real Estate Development Portfolio",
      items: [
        { value: "08", label: "Total Projects", numericValue: 8 },
        { value: "$3.8M", label: "Market Value", numericValue: 3.8 },
        { value: "04", label: "Completed", numericValue: 4 },
        { value: "04", label: "Under Construction", numericValue: 4 },
      ],
    },
    {
      title: "Real Estate Investment Portfolio",
      items: [
        { value: "09", label: "Total Projects", numericValue: 9 },
        { value: "$4.0M", label: "Market Value", numericValue: 4.0 },
        {
          value: "09",
          label: "Funding Secured - In Progress",
          numericValue: 9,
        },
        { value: "50+", label: "Total Investors", numericValue: 50 },
      ],
    },
  ];

  const AnimatedCounter = ({ endValue, value }) => {
    const [count, setCount] = useState(0);
    const duration = 2000; // Animation duration in milliseconds

    useEffect(() => {
      let startTime = null;
      let animationFrame;

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);

        if (typeof endValue === "number") {
          setCount(Math.floor(endValue * progress));
        }

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate);
        }
      };

      animationFrame = requestAnimationFrame(animate);

      return () => {
        if (animationFrame) {
          cancelAnimationFrame(animationFrame);
        }
      };
    }, [endValue]);

    // Format the display value based on the original format
    const formatValue = () => {
      if (value.startsWith("$")) {
        return `$${count.toFixed(1)}M`;
      } else if (value.endsWith("+")) {
        return `${count}+`;
      } else {
        return count.toString().padStart(2, "0");
      }
    };

    return formatValue();
  };

  return (
    <div className="bg-gray-100">
      <div className="p-16 container mx-auto">
        <h1 className="text-6xl font-bold font-rubik text-center mb-10 text-gray-800">
          NextGen Properties At a Glance
        </h1>

        {data.map((section, index) => (
          <div key={index} className="mb-6">
            <h2 className="text-xl font-quicksand font-semibold text-gray-700 mb-6 text-center">
              {section.title}
            </h2>
            <div className="grid grid-cols-1 font-rubik sm:grid-cols-2 md:grid-cols-4 gap-6">
              {section.items.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white shadow-xl h-36 rounded-lg p-6 text-center transition-transform transform hover:scale-105"
                >
                  <h3 className="text-3xl font-bold text-blue-600 mb-2">
                    <AnimatedCounter
                      endValue={item.numericValue}
                      value={item.value}
                    />
                  </h3>
                  <p className="text-gray-600 font-semibold text-md">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NextGenProperties;
