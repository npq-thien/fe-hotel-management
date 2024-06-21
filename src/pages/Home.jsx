import React from "react";
import { GiNightSleep } from "react-icons/gi";
import { FaGift } from "react-icons/fa";

import { LayoutPage } from "../components/layout";
import { ImageSlider } from "../components/";
import { Card } from "components/common";
import { slideImages, homeCard } from "../constants";


const BookingRoom = () => {
  // console.log(homeCard[0])
  return (
    <LayoutPage>
      <div className="z-10">
        <ImageSlider slideImages={slideImages} />
      </div>

      <main class="flex z-10 bg-light-1">
        <div className="max-w-6xl p-4 gap-6 mx-auto grid grid-cols-1 md:grid-cols-2">
          <div className="w-full max-w-3xl flex gap-4">
            <Card 
              data={homeCard[0]} 
              isReverse={true} 
              children={<GiNightSleep className="text-6xl text-primary-1"/>}
            />
            <Card 
              data={homeCard[1]} 
              isReverse={false} 
              children={<FaGift className="text-6xl text-primary-1"/>}
            />
          </div>

        
          <div className="flex justify-center flex-col gap-4">
            <p className="font-semibold text-primary">About us</p>
            <h3 className="font-serif text-5xl leading-normal">Unwind A Hotel Booking Agency</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam aut nesciunt repudiandae. At, nostrum. Tenetur nesciunt illo harum quibusdam sit quisquam? Eligendi corporis voluptates sint officia et consectetur doloremque iure!</p>

            <button className="mr-auto p-2 rounded-md bg-primary text-white">Book your room now</button>
          </div>
        </div>
      </main>
    </LayoutPage>
  );
};

export default BookingRoom;
