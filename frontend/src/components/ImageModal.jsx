// ImageModal.jsx
import React, { useEffect } from "react";

const ImageModal = ({ img, title, onClose }) => {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, []);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-75"></div>
      
      {/* Image container */}
      <div className="relative z-50 max-w-full max-h-full">
        <img
          src={img}
          alt={title}
          className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
          onClick={(e) => e.stopPropagation()} // Prevent click propagation to overlay
        />
        
        {/* Close button */}
        <button
          className="absolute top-2 right-2 p-2 text-white hover:text-gray-300 transition-colors"
          onClick={onClose}
          aria-label="Close image modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ImageModal;