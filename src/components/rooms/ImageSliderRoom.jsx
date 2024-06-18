import React, { useState } from "react";

const ImageSliderRoom = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const setActive = (index) => {
    setActiveIndex(index);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="relative">
        <img
          className="h-auto w-full max-w-full rounded-lg object-fill md:h-[500px]"
          src={data[activeIndex].imgelink}
          alt=""
        />
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2 opacity-45 hover:opacity-80"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2 opacity-45 hover:opacity-80"
        >
          &gt;
        </button>
      </div>

      <div className="flex grid-cols-5 gap-4 max-w-4xl justify-center mt-4">
        {data.map(({ imgelink }, index) => (
          <div key={index}>
            <img
              onClick={() => setActive(index)}
              src={imgelink}
              className={`h-20 max-w-full cursor-pointer rounded-lg object-cover object-center ${index === activeIndex ? "ring-4 ring-primary" : ""}`}
              alt="gallery"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSliderRoom;
