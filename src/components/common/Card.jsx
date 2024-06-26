import React from "react";

const Card = ({ data, isReverse, children }) => {
  console.log("revs", isReverse);
  return (
    <div
      className={`flex w-1/2 text-center gap-5 transition md:gap-4 duration-400 group
        ease-in-out group ${isReverse ? "flex-col-reverse" : "flex-col"}`}
    >
      <img className="object-cover group-hover:opacity-80" src={data.img} alt="" />

      <div className="flex flex-col gap-2 p-4 justify-center 
      items-center bg-white group-hover:bg-dark-4 group-hover:text-white">
        {children}
        <h3 className="font-serif text-xl">{data.title}</h3>
        <p className="text-base text-dark-3 group-hover:text-dark-1">{data.description}</p>
        {/* Price and book */}
      </div>
    </div>
  );
};

export default Card;
