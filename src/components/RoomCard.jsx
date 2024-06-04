import React from "react";

const RoomCard = ({ name, description, price, imgUrl }) => {
  return (
    <div className="room-card transition duration-400 ease-in-out group">
      <a href="#!" className="relative block">
        <img className="rounded-t-lg w-full group-hover:opacity-80" src={imgUrl} alt="" />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition duration-300 ease-in-out"></div>
      </a>

      <div className="p-6 group-hover:text-white">
        <a href="#!" className="mb-2 text-2xl font-semibold font-serif text-stone-800 group-hover:text-white">
          {name}
        </a>
        <p className="my-4 text-base text-stone-400">{description}</p>

        {/* Price and book */}
        <div className="flex justify-between items-center font-semibold">
          <p className="text-gold">{price} VND / DAY</p>
            <button type="button" className="font-medium px-4 py-2 rounded-md bg-primary text-black active:animate-click-ease-out">
              Book now
            </button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
