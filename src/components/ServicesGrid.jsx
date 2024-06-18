import React, { useEffect, useState } from "react";
import { serviceInfo } from "../constants/serviceInformation";
import ServiceCard from "./ServiceCard";

const ServicesGrid = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
  }, [windowWidth]);

  // This is medium device
  if (windowWidth > 768)
    return (
      <div className="justify-center mx-auto m-5">
        {serviceInfo.map((item, index) => (
          <ServiceCard
            service={item.service}
            title={item.title}
            introduction={item.introduction}
            imgUrl={item.url}
            isImgLeft={index % 2 === 0}
          />
        ))}
      </div>
    );
  else 
    return (
      <div className="justify-center mx-auto m-5">
        {serviceInfo.map((item) => (
          <ServiceCard
            service={item.service}
            title={item.title}
            introduction={item.introduction}
            imgUrl={item.url}
            isImgLeft={true}
          />
        ))}
      </div>
    );
};

export default ServicesGrid;
