// ImageModal.jsx
import React, { useEffect, useState } from "react";
import Close from "../assets/icons/Close";

const ImageModal = ({ img, title, onClose, link }) => {
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => onClose(), 300); // Match transition duration
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4
      animate-modal-entrance transition-all duration-300 ${
        isClosing ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Backdrop */}
      <div className={`absolute inset-0 bg-background/30 backdrop-blur-3xl 
        transition-opacity duration-300 ${
          isClosing ? "opacity-0" : "opacity-75"
        }`}
      />

      {/* Content */}
      <div className={`relative z-50 max-w-full max-h-full 
        transition-transform duration-300 ${
          isClosing ? "scale-95" : "scale-100"
        }`}
      >
        <img
          src={img}
          alt={title}
          className="max-w-[90vw] max-h-[90vh] object-contain rounded-xl"
          onClick={(e) => e.stopPropagation()}
        />

        <button
          className="absolute top-2 right-2 p-2 text-white text-4xl transition-all duration-500 hover:text-red-600 hover:rotate-90"
          onClick={handleClose}
          aria-label="Close image modal"
        >
          <Close className="shadow-lg transition-all duration-300 inline-block" />
        </button>
      </div>

      <div className="absolute group z-50 top-20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500 rounded-full group-hover:blur-[0.55vw] duration-500"></div>

          <div className="relative">
            <a
              className="cursor-pointer hover:duration-500"
              title="Take a more closer look"
              rel="google.com"
              href={link}
            >
              <p className="text-primary font-primary text-sm border border-blue-400/70 group-hover:border-blue-300 px-4 py-1 rounded-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-700 via-blue-600 to-blue-500 duration-500 group-hover:shadow-xl">
                detailed view
              </p>
            </a>
          </div>
        </div>

    </div>
  );
};

export default ImageModal;
