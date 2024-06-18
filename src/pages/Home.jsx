import React from "react";
import { ImageSlider, LayoutPage } from "../components";
import { slideImages } from "../constants";

const BookingRoom = () => {
  return (
    <LayoutPage>
      <div className="z-10">
        <ImageSlider slideImages={slideImages} />
      </div>
        
      <main class="mb-auto h-10 bg-green-500">Content</main>
    </LayoutPage>
  );
};

export default BookingRoom;
