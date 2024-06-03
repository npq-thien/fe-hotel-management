import React from "react";
import RoomCard from "./RoomCard";
import { roomInfo } from "../constants";

const RoomsGrid = () => {
  return (
    <div className="rooms-container justify-center mx-auto m-5">
      {roomInfo.map((item) => (
        <RoomCard name={item.title} description={item.description} price={item.price} imgUrl={item.url} />
      ))}
    </div>
  );
};

export default RoomsGrid;
