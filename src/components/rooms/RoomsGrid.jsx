import React from "react";
import { RoomCard } from "../rooms";
import { roomInfo } from "constants/roomInformation";

const RoomsGrid = () => {
  return (
    <div className="rooms-container justify-center mx-auto m-5">
      {roomInfo.map((item) => (
        <RoomCard route={item.route} name={item.title} description={item.description} price={item.price} imgUrl={item.imageUrl} />
      ))}
  </div>
  );
};

export default RoomsGrid;
