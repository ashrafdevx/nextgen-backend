import { useState } from "react";
import { X, Expand } from "lucide-react";

const ImageWithOverlay = ({ img }) => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  return (
    <>
      <div className="mt-8 md:mt-0 max-w-2xl relative group">
        <img
          src={img}
          alt="Real Estate"
          className="md:h-[500px] h-300 shadow-lg max-w-full object-cover"
        />
        <div
          className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center cursor-pointer"
          onClick={() => setIsPreviewOpen(true)}
        >
          <span className="text-white text-xl font-semibold">
            <Expand size={36} />
          </span>
        </div>
      </div>

      {/* Preview Modal */}
      {isPreviewOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-7xl w-full">
            <button
              onClick={() => setIsPreviewOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300"
            >
              <X size={32} />
            </button>
            <img
              src={img}
              alt="Real Estate Preview"
              className="w-full h-auto max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ImageWithOverlay;
