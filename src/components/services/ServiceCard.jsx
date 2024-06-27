import React from "react";

const ServiceCard = ({ service, title, introduction, imgUrl, isImgLeft }) => {
  return (
    // If medium device
    <div className="md:flex max-w-5xl px-4 w-full mx-auto transition-transform duration-300 hover:scale-105">
      {isImgLeft && <img className="md:w-1/2 bg-cover hover:cursor-pointer" src={imgUrl} alt={title} />}
      <div className="flex flex-col justify-between bg-light-1 p-4">
        <div>
          <h3 className="h3 uppercase text-primary" style={{ letterSpacing: "4px" }}>
            {service}
          </h3>
          <h2 className="h2-bold hover:cursor-pointer">{title}</h2>
          <p className="text-dark-3 my-2">{introduction}</p>
        </div>

        <div className="flex">
          <button
            className={`text-white font-semibold bg-primary p-3 mt-2 transition-all transition-300 rounded-xl hover:bg-primary-1 ${isImgLeft ? "ml-auto" : ""}`}
          >
            View detail
          </button>
        </div>
      </div>

      {!isImgLeft && <img className="md:w-1/2 bg-cover hover:cursor-pointer" src={imgUrl} alt={title} />}
    </div>
  );
};

export default ServiceCard;
