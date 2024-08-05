import { AdminLayout } from "components/layout";
import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token || (role !== "ADMIN" && role !== "RECEPTIONIST")) {
      navigate("/admin/login");
    }
  }, [token, role, navigate]);

  return (
    <AdminLayout>
      <main>Dashboard</main>
    </AdminLayout>
  );
};

export default AdminDashboard;
