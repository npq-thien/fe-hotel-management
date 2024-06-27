import React, { useState } from "react";
import { Dropdown } from ".."; // Ensure you have imported the Dropdown component correctly

const dropdownRooms = [
  { label: "Single bedroom", href: "#" },
  { label: "Double bedroom", href: "#" },
  { label: "Deluxe Room", href: "#" },
  { label: "Family Room", href: "#" },
  { label: "Suite", href: "#" },
  { label: "Penthouse", href: "#" },
];

const dropdownGuests = [
  { label: "1", href: "#" },
  { label: "2", href: "#" },
  { label: "3", href: "#" },
  { label: "4", href: "#" },
  { label: "5+", href: "#" },
];

const BookForm = () => {
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [roomType, setRoomType] = useState("Single bedroom");
  const [selectedGuest, setSelectedGuest] = useState(1);

  // useEffect(() => {
  //   console.log("log here ", selectedGuest, roomType);
  // }, [selectedGuest, roomType]);

  return (
    <div className="flex justify-center">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 max-w-7xl gap-2 bg-gray-800 text-white p-4">
        <div className="flex flex-col rounded-xl items-center justify-center border border-stone-700 gap-2 p-5">
          CHECK-IN
          <input
            value={checkInDate}
            onChange={(event) => setCheckInDate(event.target.value)}
            type="date"
            className="text-black p-1 rounded-md "
          />
        </div>
        <div className="flex flex-col rounded-md items-center justify-center border border-stone-700 gap-2 p-5">
          CHECK-OUT
          <input
            value={checkOutDate}
            onChange={(event) => setCheckOutDate(event.target.value)}
            type="date"
            className="text-black p-1 rounded-md"
          />
        </div>
        <div className="z-20 flex flex-col rounded-md items-center justify-center border border-stone-700 gap-2 p-5">
          ROOM TYPE
          <Dropdown
            title={roomType}
            items={dropdownRooms}
            onChange={(event) => setRoomType(event.target.value)}
            width={44}
          />
        </div>
        <div className="z-10 flex flex-col rounded-md items-center justify-center border border-stone-700 gap-2 p-5">
          GUESTS
          <Dropdown
            title={selectedGuest}
            items={dropdownGuests}
            onChange={(event) => setSelectedGuest(event.target.value)}
            // width={32}
          />
        </div>
        <div className="flex flex-col rounded-md items-center justify-center bg-secondary gap-2 p-4 md:col-span-2 lg:p-5 lg:col-span-1 hover:cursor-pointer">
          <button className="text-2xl font-semibold p-2 rounded">CHECK AVAILABILITY</button>
        </div>
      </div>
    </div>
  );
};

export default BookForm;
