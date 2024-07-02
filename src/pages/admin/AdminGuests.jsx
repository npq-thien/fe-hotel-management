import GuestTable from "components/admin/guests/GuestTable";
import { AdminLayout } from "components/layout";
import React from "react";

const AdminGuests = () => {
  return (
    <AdminLayout>
      <main>
        <h3 className="h3-semibold mb-4">Booking</h3>
        <GuestTable />
      </main>
    </AdminLayout>
  );
};

export default AdminGuests;
