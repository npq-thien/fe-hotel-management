import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { Dropdown } from "components/common";
import { CustomerLayout } from "components/layout";
import { serviceInfo } from "constants/serviceInformation";

const dropdownRooms = [
  { label: "Single bedroom", href: "#" },
  { label: "Double bedroom", href: "#" },
  { label: "Deluxe Room", href: "#" },
  { label: "Family Room", href: "#" },
  { label: "Suite", href: "#" },
  { label: "Penthouse", href: "#" },
];

const BookingPage = () => {
  const [roomType, setRoomType] = useState("Single bedroom");

  const customStyles = {
    input: {
      width: "100%",
      borderRadius: "4px",
      border: "1px solid #eff0f2",
      paddingTop: "2px",
      paddingBottom: "2px",
      fontSize: "16px",
    },
    button: {
      borderRadius: "4px 0 0 4px",
    },
  };

  return (
    <CustomerLayout>
      <div className="bg-light-1 py-10 px-4">
        <div className="bg-white rounded-lg shadow-lg flex flex-col p-6 gap-5 w-full max-w-2xl mx-auto">
          <h2 className="h3-semibold mx-auto">Book room</h2>
          {/* Name */}
          <div>
            <h3 className="mb-2 font-semibold">
              Name <span className="text-red-500">*</span>
            </h3>
            <div className="flex grid-cols-2 gap-2">
              <div className="w-1/2">
                <input type="text" className="w-full border rounded-md p-2" />
                <p className="text-sm text-dark-1 mt-2">First name</p>
              </div>

              <div className="w-1/2">
                <input type="text" className="w-full border rounded-md p-2" />
                <p className="text-sm text-dark-1 mt-2">Last name</p>
              </div>
            </div>
          </div>

          {/* Email */}
          <div>
            <h3 className="mb-2 font-semibold">
              Email <span className="text-red-500">*</span>
            </h3>
            <input type="text" placeholder="example@gmail.com" className="w-full border rounded-md p-2" />
          </div>

          <div>
            <h3 className="mb-2 font-semibold">
              Phone number <span className="text-red-500">*</span>
            </h3>
            <PhoneInput
              inputStyle={customStyles.input}
              buttonStyle={customStyles.button}
              inputClass="focus:ring-2 focus:ring-black focus:border-black"
              country={"vn"}
            />
          </div>

          {/* Roomtype and guest */}
          <div className="flex gap-2 grid-cols-2 z-20">
            <div className="w-1/2">
              <h3 className="mb-2 font-semibold">
                Room type <span className="text-red-500">*</span>
              </h3>
              <Dropdown title={roomType} items={dropdownRooms} onChange={(event) => setRoomType(event.target.value)} />
            </div>
            <div className="w-1/2">
              <h3 className="mb-2 font-semibold">
                Number of guests <span className="text-red-500">*</span>
              </h3>
              <input type="number" placeholder="2" className="w-full border rounded-md p-2" />
            </div>
          </div>

          {/* Check in && check out */}
          <div className="flex gap-2 grid-cols-2">
            <div className="w-1/2">
              <h3 className="mb-2 font-semibold">
                Check-in date <span className="text-red-500">*</span>
              </h3>
              <input type="date" placeholder="2" className="w-full border rounded-md p-2 cursor-pointer" />
            </div>
            <div className="w-1/2">
              <h3 className="mb-2 font-semibold">
                Check-out date <span className="text-red-500">*</span>
              </h3>
              <input type="date" placeholder="2" className="w-full border rounded-md p-2 cursor-pointer" />
            </div>
          </div>

          {/* Choose services (optional) */}
          <div>
            <h3 className="mb-2 font-semibold">Services</h3>
            <div className="grid grid-cols-2 ml-6 gap-x-6 gap-y-4">
              {serviceInfo.map((item, i) => (
                <div className="flex items-center min-h-6" key={i}>
                  <input className="check-box form-checkbox text-primary" type="checkbox" id={`cb-${i}`} />
                  <label className="inline-block ml-2 hover:cursor-pointer" htmlFor={`cb-${i}`}>
                    {item.service}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* Special note */}
          <div>
            <h3 className="font-semibold">Do you have any special requests?</h3>
            <textarea className="w-full border rounded-md p-2" name="request" cols="40" rows="5"></textarea>
          </div>

          {/* Voucher */}
          <div>
            <h3 className="mb-2 font-semibold">Promotion code</h3>
            <input type="text" className="w-full border rounded-md p-2" />
          </div>
          <button className="uppercase btn-primary p-3">Book now</button>
        </div>
      </div>
    </CustomerLayout>
  );
};

export default BookingPage;
