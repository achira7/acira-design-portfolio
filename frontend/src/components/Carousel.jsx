import React, { useState } from "react";
import ArrowLeft from "../assets/icons/ArrowLeft";

import CarouselModal from "./CarouselModal";

const Carousel = ({ images = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  // Open modal when clicking main image
  const handleImageClick = (index) => {
    setSelectedIndex(index);
    setModalOpen(true);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const getAdjacentIndex = (offset) =>
    (currentIndex + offset + images.length) % images.length;

  return (
    <div className="relative w-full flex items-center justify-center">
      {images.length > 0 ? (
        <div className="relative flex items-center justify-center w-full md:w-[70%] lg:w-[50%]">
          {/* Left Preview*/}
          {images.length > 1 && (
            <div className="absolute left-0 w-[45%] aspect-video overflow-hidden rounded-xl opacity-50 hover:opacity-75 transition-opacity duration-300 z-0 -translate-x-1/2 hidden md:block">
              <img
                src={images[getAdjacentIndex(-1)]}
                alt="Previous Slide"
                className="h-full w-full object-cover"
                onClick={prevSlide}
              />
            </div>
          )}

          

          {/* Right Preview */}
          {images.length > 1 && (
            <div className="absolute right-0 w-[45%] aspect-video overflow-hidden rounded-xl opacity-50 hover:opacity-75 transition-opacity duration-300 z-0 translate-x-1/2 hidden md:block">
              <img
                src={images[getAdjacentIndex(1)]}
                alt="Next Slide"
                className="h-full w-full object-cover"
                onClick={nextSlide}
              />
            </div>
          )}

          {/* Main Image*/}
          <div className="z-10 relative aspect-video w-full overflow-hidden rounded-3xl border border-white/30 shadow-2xl shadow-black">
            <img
              key={currentIndex}
              src={images[currentIndex]}
              alt={`Slide ${currentIndex}`}
              className="absolute h-full w-full object-cover animate-fade-in"
            />

            {/* Navigation Controls */}
            <div className="absolute inset-0 flex items-center justify-between px-2 md:px-4 z-20">
              <button
                onClick={prevSlide}
                className="bg-black/50 p-2 rounded-full hover:bg-black/80 transition-all duration-300 md:p-3 hover:scale-110"
              >
                <ArrowLeft className="h-6 w-6 md:h-8 md:w-8 text-white" />
              </button>
              <button
                onClick={nextSlide}
                className="bg-black/50 p-2 rounded-full hover:bg-black/80 transition-all duration-300 md:p-3 rotate-180  hover:scale-110"
              >
                <ArrowLeft className="h-6 w-6 md:h-8 md:w-8 text-white" />
              </button>
            </div>

            
          </div>

          <span
            href=""
            onClick={() => handleImageClick(currentIndex)}
            className="cursor-zoom-in ... z-50"
          >
            {" "}
            Click Me
          </span>

          {modalOpen && (
            <CarouselModal
              images={images}
              currentIndex={selectedIndex}
              onClose={() => setModalOpen(false)}
            />
          )}
        </div>
      ) : null}
    </div>
  );
};

export default Carousel;
