import { AdminLayout } from "components/layout";
import React from "react";

const AdminDashboard = () => {
  const token = localStorage.getItem('token');
  console.log('token admin', token)

  return (
    <AdminLayout>
      <main>
        Dashboard
      </main>
    </AdminLayout>
  );
};

export default AdminDashboard;
