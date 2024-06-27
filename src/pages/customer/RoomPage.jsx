import React from "react";

import { RoomsGrid, BookForm } from "../../components/rooms";
import { CustomerLayout } from "components/layout";

const BookingRoom = () => {
  return (
    <CustomerLayout>
      <BookForm />
      <RoomsGrid />
    </CustomerLayout>
  );
};

export default BookingRoom;
