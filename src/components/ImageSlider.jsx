import React from "react";
import { TECarousel, TECarouselItem } from "tw-elements-react";
import { slideImages } from "../constants";

const ImageSlider = () => {
  return (
    <>
      <TECarousel showControls showIndicators ride="carousel">
        <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
          {slideImages.map((item) => (
            <TECarouselItem
              itemID={item.id}
              className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
            >
              <div>
                <img
                  src={item.url}
                  className="block w-full lg:h-[768px] object-cover lg:object-contain"
                  alt={item.title}
                />
                <div class="absolute inset-0 overflow-hidden bg-black opacity-40"></div>
              </div>
              {/* Description img */}
              <div className="absolute inset-x-[15%] bottom-5 hidden py-5 text-center text-white md:block">
                <h2 className="text-3xl">{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </TECarouselItem>
          ))}
        </div>
      </TECarousel>
    </>
  );
};

export default ImageSlider;
