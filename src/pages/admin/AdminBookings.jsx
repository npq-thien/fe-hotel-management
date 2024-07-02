import { AdminLayout } from "components/layout";
import React from "react";


import BookingTable from "components/admin/bookings/BookingTable";


const AdminBookings = () => {
  return (
    <AdminLayout>
      <main>
        <h3 className="h3-semibold mb-4">Bookings</h3>
        <BookingTable />
      </main>
    </AdminLayout>
  );
};

export default AdminBookings;
