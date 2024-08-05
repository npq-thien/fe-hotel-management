import React from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
}

function SamplePrevArrow(props) {
}

const SlickSlider = ({ images }) => {


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3, // This allows multiple images to be scrolled at once
    focusOnSelect: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 640, // Small screens
        settings: {
          vertical: true,
          verticalSwiping: true,
          slidesToShow: 3,
          slidesToScroll: 3, // Ensure this is consistent with the slidesToShow
        },
      },
      {
        breakpoint: 1024, // Large screens
        settings: {
          vertical: false,
          verticalSwiping: false,
          slidesToShow: 3,
          slidesToScroll: 3, // Ensure this is consistent with the slidesToShow
        },
      },
    ],
  };

  return (
    <div className="max-w-full mx-auto p-6">
      <Slider className="" {...settings}>
        {images.map((img, index) => (
          <div key={index} className="p-2">
            <img src={img.url} alt={`Slide ${index}`} className="rounded-lg object-cover" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SlickSlider;
