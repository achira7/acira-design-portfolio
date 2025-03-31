import React, { useState } from "react";
import ArrowLeft from "../assets/icons/ArrowLeft";

const Carousel = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  // Calculate indices for adjacent images with wrapping
  const getAdjacentIndex = (offset) => 
    (currentIndex + offset + images.length) % images.length;

  return (
    <div className="relative w-full">
      {images.length > 0 ? (
        <div className="flex flex-col items-center gap-4 md:gap-8">
          {/* Main Image Container */}
          <div className="relative w-full md:w-[70%] lg:w-[50%] transition-all duration-300">
            <div className="relative aspect-video overflow-hidden rounded-3xl border border-zinc-600/50 shadow-2xl shadow-black">
              <img
                key={currentIndex}
                src={images[currentIndex]}
                alt={`Slide ${currentIndex}`}
                className="absolute h-full w-full object-cover animate-fade-in"
              />

              {/* Navigation Controls */}
              <div className="absolute inset-0 flex items-center justify-between px-2 md:px-4">
                <button
                  onClick={prevSlide}
                  className="bg-black/50 p-2 rounded-full hover:bg-black/80 transition-all duration-300 md:p-3"
                >
                  <ArrowLeft className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </button>
                <button
                  onClick={nextSlide}
                  className="bg-black/50 p-2 rounded-full hover:bg-black/80 transition-all duration-300 md:p-3 rotate-180"
                >
                  <ArrowLeft className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </button>
              </div>
            </div>
          </div>

          {/* Adjacent Images */}
          {images.length > 1 && (
            <div className="hidden md:flex w-full max-w-4xl justify-center gap-4 px-4">
              {[1, 2].map((offset) => (
                images.length > offset && (
                  <div
                    key={offset}
                    className="aspect-video w-[30%] overflow-hidden rounded-2xl opacity-50 transition-opacity duration-300 hover:opacity-75"
                  >
                    <img
                      src={images[getAdjacentIndex(offset)]}
                      alt={`Adjacent slide ${offset}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )
              ))}
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default Carousel;

// Add this CSS for fade-in animation
// In your global CSS file or component-specific styles:
// @keyframes fade-in {
//   from { opacity: 0; }
//   to { opacity: 1; }
// }
// .animate-fade-in {
//   animation: fade-in 0.5s ease-in-out;
// }