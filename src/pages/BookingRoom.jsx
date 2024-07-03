import React from "react";

import { RoomsGrid, BookForm } from "../components/rooms";
import { LayoutPage } from "components/layout";

const BookingRoom = () => {
  return (
    <LayoutPage>
      <BookForm />
      <RoomsGrid />
    </LayoutPage>
  );
};

export default BookingRoom;
