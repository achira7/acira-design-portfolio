// CarouselModal.jsx
import React, { useEffect, useState } from "react";
import ArrowLeft from "../assets/icons/ArrowLeft";
import Close from "../assets/icons/Close";

const CarouselModal = ({ images = [], currentIndex = 0, onClose }) => {
  const [index, setIndex] = useState(currentIndex);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "unset");
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => onClose(), 300);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center p-4
        animate-modal-entrance transition-all duration-300
        ${isClosing ? "opacity-0" : "opacity-100"}`}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-background/30 backdrop-blur-3xl
          transition-opacity duration-300
          ${isClosing ? "opacity-0" : "opacity-75"}`}
        onClick={handleClose}
      />

      {/* Carousel Content */}
      <div
        className={`relative z-50 w-full max-w-6xl aspect-video
          transition-transform duration-300
          ${isClosing ? "scale-95" : "scale-100"}`}
      >
        {/* Image Container */}
        <div className="z-10 relative aspect-video w-full overflow-hidden rounded-3xl border border-zinc-600/50 shadow-2xl shadow-black">
          <img
            key={index}
            src={images[index]}
            alt={`Slide ${index}`}
            className="absolute h-full w-full object-cover animate-fade-in"
          />

          {/* Navigation Controls */}
          <div className="absolute inset-0 flex items-center justify-between px-4 z-20">
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
              }}
              className="bg-black/50 p-2 rounded-full hover:bg-black/80 transition-all duration-300 md:p-3"
            >
              <ArrowLeft className="h-6 w-6 md:h-8 md:w-8 text-white" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
              }}
              className="bg-black/50 p-2 rounded-full hover:bg-black/80 transition-all duration-300 md:p-3 rotate-180"
            >
              <ArrowLeft className="h-6 w-6 md:h-8 md:w-8 text-white" />
            </button>
          </div>

          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 p-2 text-white text-4xl transition-all duration-500 hover:text-red-600 hover:rotate-90 z-30"
          >
            <Close className="shadow-lg transition-all duration-300 inline-block" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarouselModal;
