import React from "react";
import { RoomCard } from "../rooms";
import { roomDetailInfo } from "constants/roomInformation";

const RoomsGrid = () => {
  return (
    <div className="rooms-container justify-center mx-auto m-5">
      {roomDetailInfo.map((item) => (
        <RoomCard route={item.route} name={item.name} description={item.introduction} price={item.price} imgUrl={item.thumbnail} />
      ))}
  </div>
  );
};

export default RoomsGrid;
