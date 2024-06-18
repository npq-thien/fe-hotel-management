import React from "react";

import RoomsGrid from "../components/RoomsGrid";
import BookForm from "../components/BookForm";
import { LayoutPage } from "../components";

const BookingRoom = () => {
  return (
    <LayoutPage>
      <BookForm />
      <RoomsGrid />
    </LayoutPage>
  );
};

export default BookingRoom;
