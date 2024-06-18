import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { LayoutPage } from "../components/layout"; // Adjust import as per your file structure
import { roomInfo } from "../constants/roomInformation"; // Adjust import path as per your file structure
import { ImageSliderRoom } from "../components/rooms";
import { FaBath, FaBed, FaChair, FaEye, FaRulerCombined, FaUsers } from "react-icons/fa6";

const RoomDetail = () => {
  const { roomId } = useParams();
  const [room, setRoom] = useState(null);

  useEffect(() => {
    // Simulated data fetching based on roomId
    const selectedRoom = roomInfo.find((room) => room.route === `/room/${roomId}`);
    setRoom(selectedRoom);
  }, [roomId]);

  if (!room) {
    return (
      <LayoutPage>
        <div>Loading...</div>
      </LayoutPage>
    );
  }

  const data = [
    {
      imgelink: "/img/single/1.jpg",
    },
    {
      imgelink: "/img/single/2.jpg",
    },
    {
      imgelink: "/img/single/3.jpg",
    },
    {
      imgelink: "/img/single/4.jpg",
    },
    {
      imgelink: "/img/single/5.jpg",
    },
  ];

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
            <p className="text-xl lg:text-3xl text-white">&gt; Single room</p>
          </div>
        </div>
      </div>

      {/* Room detail */}
      <div className="flex flex-col gap-4 m-4">
        <ImageSliderRoom data={data} />

        <div className="flex flex-col gap-2 justify-center mx-auto max-w-4xl">
          <h2 className="font-serif h3-semibold md:h1-semibold">Single room</h2>

          <p className="flex justify-center text-dark-2 tracking-wide">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, iusto nulla perspiciatis facilis
            atque, velit eaque nobis, magnam odit obcaecati eos ipsam dolorum explicabo quos totam a voluptatibus
            voluptas dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit non temporibus consectetur
            facilis magni similique neque, aut corrupti repudiandae aliquam quasi iste tenetur accusantium consequuntur
            ipsum, vel qui perferendis Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias rem quod fuga
            veniam nesciunt natus placeat cupiditate optio magni. Illo tempore nulla, iste reprehenderit quaerat
            consequuntur velit ducimus reiciendis sint.
          </p>

          {/* size, view, occupancy, beds, badroom, unique features */}
          <div className="max-w-4xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800 bg-gray-50 rounded-lg">
            <div className="flex items-start space-x-4">
              <FaRulerCombined className="text-green-700 text-2xl" />
              <div>
                <h3 className="text-lg font-medium">Size</h3>
                <p>70 sqm (750 sq ft)</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaUsers className="text-green-700 text-2xl" />
              <div>
                <h3 className="text-lg font-medium">Occupancy</h3>
                <p>Up to three adults or two adults and two children under 12 years</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaBed className="text-green-700 text-2xl" />
              <div>
                <h3 className="text-lg font-medium">Beds</h3>
                <p>King bed or two twin beds</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaBath className="text-green-700 text-2xl" />
              <div>
                <h3 className="text-lg font-medium">Bathrooms</h3>
                <p>Double vanities, rain shower, separate marble tub</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaEye className="text-green-700 text-2xl" />
              <div>
                <h3 className="text-lg font-medium">View</h3>
                <p>Sea and gardens</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaChair className="text-green-700 text-2xl" />
              <div>
                <h3 className="text-lg font-medium">Unique Features</h3>
                <p>Terrace with outdoor seating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </LayoutPage>
  );

  // return (
  //   <LayoutPage>
  //     <div className="container mx-auto px-4 py-8">hellothre</div>
  //     <ImageSlider slideImages={slideImages} />
  //   </LayoutPage>
  // );

  // return (
  //   <LayoutPage>
  //     <div className="container mx-auto px-4 py-8">
  //       <div className="md:flex md:space-x-6">
  //         <img src={room.imageUrl} alt={room.title} className="md:w-1/2 w-full h-auto object-cover rounded-lg" />
  //         <div className="md:w-1/2 w-full flex flex-col justify-between">
  //           <div>
  //             <h1 className="text-3xl font-bold text-primary mb-4">{room.title}</h1>
  //             <p className="text-lg text-dark-3 mb-4">{room.description}</p>
  //             <p className="text-2xl font-semibold text-primary mb-4">${room.price} per night</p>
  //           </div>
  //           <button className="text-white font-semibold bg-primary p-3 rounded-xl hover:bg-primary-1 transition-all duration-300">
  //             Book Now
  //           </button>
  //         </div>
  //       </div>
  //     </div>
  //   </LayoutPage>
  // );
};

export default RoomDetail;
