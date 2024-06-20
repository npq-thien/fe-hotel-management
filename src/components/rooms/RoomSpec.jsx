import React from "react";

import { FaBath, FaBed, FaRulerCombined, FaUsers } from "react-icons/fa6";

const RoomSpec = ({ roomData }) => {
  // console.log("specification", roomData);
  return (
    <div className="w-3/4 max-w-4xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800 bg-gray-100 rounded-lg">
      <div className="flex items-start space-x-4">
        <FaRulerCombined className="text-primary text-2xl" />
        <div>
          <h3 className="text-lg font-medium">Size</h3>
          <p className="text-dark-3">
            {roomData.size} m<sup>2</sup>
          </p>
        </div>
      </div>
      <div className="flex items-start space-x-4">
        <FaUsers className="text-primary text-2xl text-[28px]" />
        <div>
          <h3 className="text-lg font-medium">Occupancy</h3>
          <p className="text-dark-3">{roomData.occupancy}</p>
        </div>
      </div>
      <div className="flex items-start space-x-4">
        <FaBed className="text-primary text-2xl" />
        <div>
          <h3 className="text-lg font-medium">Beds</h3>
          <p className="text-dark-3">King bed or two twin beds</p>
        </div>
      </div>
      <div className="flex items-start space-x-4">
        <FaBath className="text-primary text-2xl" />
        <div>
          <h3 className="text-lg font-medium">Bathrooms</h3>
          <p className="text-dark-3">Rain shower, separate marble tub, hairdryer</p>
        </div>
      </div>
    </div>
  );
};

export default RoomSpec;
