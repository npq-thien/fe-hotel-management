import React, { useEffect, useState } from "react";

import { ServiceCard } from "../services";
import { useGetAllServices } from "api/customer/serviceApi";
import CustomCircularProgress from "components/common/CustomCircularProgress";

const ServicesGrid = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { data: services } = useGetAllServices();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
  }, [windowWidth]);

  if (!services) {
    return (
      <div className="flex-center m-5">
        <CustomCircularProgress />
      </div>
    );
  }

  // Medium device++ will show services with left/right thumbnail
  if (windowWidth > 768)
    return (
      <div className="justify-center mx-auto m-5">
        {(services.items).map((item, index) => (
          <ServiceCard
            service={item.serviceName}
            title={item.title}
            introduction={item.introduction}
            imgUrl={item.thumbnail}
            isImgLeft={index % 2 === 0}
          />
        ))}
      </div>
    );
  else
    return (
      <div className="justify-center mx-auto m-5">
        {(services.items).map((item) => (
          <ServiceCard
            service={item.serviceName}
            title={item.title}
            introduction={item.introduction}
            imgUrl={item.thumbnail}
            isImgLeft={true}
          />
        ))}
      </div>
    );
};

export default ServicesGrid;
