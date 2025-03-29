// ImageModal.jsx
import React, { useEffect, useState } from "react";
import Close from "../assets/icons/Close";

const ImageModal = ({ img, title, onClose }) => {
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
        transition-all duration-300 ${
          isClosing ? 'opacity-0' : 'opacity-100'
        }`}
      onClick={handleClose}
    >
      {/* Backdrop */}
      <div className={`absolute inset-0 bg-background/30 backdrop-blur-3xl 
        transition-opacity duration-300 ${
          isClosing ? 'opacity-0' : 'opacity-75'
        }`}
      />
      
      {/* Content */}
      <div className={`relative z-50 max-w-full max-h-full 
        transition-transform duration-300 ${
          isClosing ? 'scale-95' : 'scale-100'
        }`}
      >
        <img
          src={img}
          alt={title}
          className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
          onClick={(e) => e.stopPropagation()}
        />
        
        <button
          className="absolute top-2 right-2 p-2 text-white hover:text-gray-300 
            hover:rotate-180 transition-colors duration-200"
          onClick={handleClose}
          aria-label="Close image modal"
        >
          <Close />
        </button>
      </div>
    </div>
  );
};

export default ImageModal;