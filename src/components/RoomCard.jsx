import React from "react";
import { TERipple } from "tw-elements-react";

const RoomCard = ({ name, description, price, imgUrl }) => {
  return (
    <div className="block rounded-lg border text-center border-stone-400 m-4 bg-white hover:bg-neutral-800 group transition duration-400 ease-in-out">
      <a href="#!" className="relative block">
        <img className="rounded-t-lg w-full group-hover:opacity-75" src={imgUrl} alt="" />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition duration-300 ease-in-out"></div>
      </a>

      <div className="p-6 group-hover:text-white">
        <a href="#!" className="mb-2 text-2xl font-semibold font-serif text-stone-800 group-hover:text-white">
          {name}
        </a>
        <p className="my-4 text-base text-stone-400">{description}</p>

        {/* Price and book */}
        <div className="flex justify-between items-center font-semibold font-inter origin-bottom">
          <p className="text-gold">{price} VND / DAY</p>
          <TERipple className="bg-primary-default rounded-sm">
            <button type="button" className="log-in-btn text-black text-sm">
              Book now
            </button>
          </TERipple>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
