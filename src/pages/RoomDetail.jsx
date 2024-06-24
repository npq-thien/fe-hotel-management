import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { LayoutPage } from "../components/layout"; // Adjust import as per your file structure
import { roomDetailInfo } from "../constants/roomInformation"; // Adjust import path as per your file structure
import { ImageSliderRoom, RoomSpec, RoomAmenities } from "../components/rooms";

const RoomDetail = () => {
  const { roomId } = useParams();
  const [room, setRoom] = useState(null);

  useEffect(() => {
    // Simulated data fetching based on roomId
    const selectedRoom = roomDetailInfo.find((room) => room.route === `/room/${roomId}`);
    setRoom(selectedRoom);
    // console.log('room', selectedRoom);
  }, [roomId]);

  if (!room) {
    return (
      <LayoutPage>
        <div>Loading...</div>
      </LayoutPage>
    );
  }
  // console.log('room ne', room)
  return (
    <LayoutPage>
      {/* Banner */}
      <div className="relative">
        <img className="h-80 w-full object-cover block" src="/img/test.jpg" alt="hotel_background" />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-x-[15%] bottom-[30%] text-center">
          <div className="flex gap-2 items-center justify-center">
            <Link to="/rooms" className="text-primary-1 font-serif h3-bold lg:h1-bold hover:underline">
              Rooms
            </Link>
            <p className="text-xl lg:text-3xl text-white">&gt; {room.name}</p>
          </div>
        </div>
      </div>

      {/* Room detail */}
      <div className="flex flex-col gap-4 m-4">
        <ImageSliderRoom imageUrls={room.imageUrls} />

        <div className="flex flex-col gap-2 justify-center mx-auto max-w-4xl">
          <div className="flex sm:flex-row sm:justify-between sm:items-center flex-col ">
            <h2 className="font-serif h3-semibold md:h1-semibold">{room.name}</h2>
            <p className="text-gold md:text-[20px] font-semibold ">{room.price} VND / NIGHT</p>
          </div>

          <p className="text-dark-2 tracking-wide">{room.description}</p>
        </div>

        <RoomSpec roomData={room} />

        <RoomAmenities amenitiesData={room} />

        <button className="mx-auto text-white bg-primary p-4 base-medium rounded-md tracking-wider">
          Make a reservation
        </button>

        {/* Review and rating */}
      </div>
    </LayoutPage>
  );
};

export default RoomDetail;
