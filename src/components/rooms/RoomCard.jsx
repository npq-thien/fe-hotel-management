import React from "react";
import { Link } from "react-router-dom";

const RoomCard = ({ route, name, description, price, imgUrl }) => {
  return (
    <div className="room-card transition duration-400 ease-in-out group">
      <Link to={route} className="relative block">
        <img className="rounded-t-lg w-full group-hover:opacity-80" src={imgUrl} alt="" />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition duration-300 ease-in-out"></div>
      </Link>

      <div className="p-6 group-hover:text-white">
        <Link to={route} className="mb-2 text-2xl font-semibold font-serif text-dark-4 group-hover:text-white">
          {name}
        </Link>
        <p className="my-4 text-dark-2">{description}</p>

        {/* Price and book */}
        <div className="flex-between font-semibold">
          <p className="text-gold">{price} VND / NIGHT</p>
          <Link to={route}>
            <button
              type="button"
              className="font-medium px-4 py-2 rounded-md bg-primary text-white active:animate-click-ease-out transition-all duration-300 hover:bg-primary-1"
            >
              Book now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
