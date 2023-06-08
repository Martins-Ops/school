import React, { useState } from "react";

const ImageSlider = ({ images }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const showPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const showNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="flex items-center justify-center">
      <button
        className="mr-2 px-4 py-2 bg-gray-500 text-white rounded"
        onClick={showPrevious}
      >
        Previous
      </button>
      <div className="relative">
        {images.map((image: any, index: any) => (
          <img
            src={image}
            alt="good"
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      <button
        className="ml-2 px-4 py-2 bg-gray-500 text-white rounded"
        onClick={showNext}
      >
        Next
      </button>
    </div>
  );
};

export default ImageSlider;
