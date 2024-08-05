import React, { useState } from "react";
import Dropdown from "../Dropdown";
import { FaWindowClose } from "react-icons/fa";

const dropdownRooms = [
  { label: "Single bedroom", href: "#" },
  { label: "Double bedroom", href: "#" },
  { label: "Deluxe Room", href: "#" },
  { label: "Family Room", href: "#" },
  { label: "Suite", href: "#" },
  { label: "Penthouse", href: "#" },
];

const BookingPopupModal = ({ toggleBookingPopup }) => {
  const [roomType, setRoomType] = useState("Single bedroom");

  return (
    <div className="modal px-4">
      <div className="bg-white rounded-lg shadow-lg flex flex-col p-4 gap-5 w-full max-w-md">
        <button
          type="button"
          onClick={() => toggleBookingPopup(true)}
          className="ml-auto text-2xl text-gray-400 hover:text-gray-500"
        >
          <FaWindowClose size={24} />
        </button>
        <h2 className="h3-semibold mx-auto">Hotel Booking</h2>
        <div className="flex">
          {/* Name */}
          <div>
            <p className="mb-2">Name</p>
            <div className="flex gap-2">
              <div>
                <input type="text" className="w-full border rounded-sm p-2" />
                <p className="text-sm text-dark-1 mt-2">First name</p>
              </div>

              <div>
                <input type="text" className="w-full border rounded-sm p-2" />
                <p className="text-sm text-dark-1 mt-2">Last name</p>
              </div>
            </div>
          </div>
        </div>
        {/* Email */}
        <div>
          <p className="mb-2">Email</p>
          <input type="text" placeholder="example@gmail.com" className="w-full border rounded-sm p-2" />
        </div>

        <div>
          <p className="mb-2">Phone number</p>
          <input type="text" placeholder="0123456789" className="w-full border rounded-sm p-2" />
        </div>

        <div>
          <p className="mb-2">Room type</p>
          <Dropdown
            title={roomType}
            items={dropdownRooms}
            onChange={(event) => setRoomType(event.target.value)}
            width={44}
          />
        </div>
      </div>
    </div>
  );
};

export default BookingPopupModal;
