import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageSlider = ({ slideImages }) => {
  return (
    <Carousel showThumbs={false} showStatus={false} showArrows={true} 
      infiniteLoop={true} useKeyboardArrows={true} >
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
