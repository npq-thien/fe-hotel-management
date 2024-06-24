import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageSlider = ({ slideImages }) => {
  // custom arrow and indicators
  const customArrowPrev = (onClickHandler, hasPrev) =>
    hasPrev && (
      <button
        onClick={onClickHandler}
        className="absolute h1-bold z-10 h-full left-0 text-primary p-4 hover:opacity-50"
      >
        &lt;
      </button>
    );

  const customArrowNext = (onClickHandler, hasNext) =>
    hasNext && (
      <button
        onClick={onClickHandler}
        className="absolute h1-bold right-0 h-full bottom-[0%] text-primary p-4 hover:opacity-50"
      >
        &gt;
      </button>
    );

  const customIndicator = (onClickHandler, isSelected, index) => {
    return (
      <li
        key={index}
        className={`inline-block mx-1 w-4 h-1 md:w-6 md:h-3 rounded-full cursor-pointer select-none ${
          isSelected ? 'bg-primary' : 'bg-white'
        }`}
        onClick={onClickHandler}
      />
    );
  };

  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      showArrows={true}
      infiniteLoop={true}
      useKeyboardArrows={true}
      renderArrowNext={customArrowNext}
      renderArrowPrev={customArrowPrev}
      renderIndicator={customIndicator}
    >
      {slideImages.map((item) => (
        <div key={item.id} className="relative">
          <img src={item.url} alt={item.title} className="block w-full lg:h-[768px] object-cover" />

          <div className="absolute inset-0 bg-black opacity-40"></div>
          <div className="absolute inset-x-[15%] bottom-5 text-center text-white py-5">
            <h2 className="text-xl lg:text-3xl">{item.title}</h2>
            <p className="text-base mt-2 hidden md:block">{item.description}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default ImageSlider;
