import React from "react";

import AdminNavbar from "components/admin/common/AdminNavbar";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex">
      <div className="z-20">
        <AdminNavbar />
      </div>

      <div className="z-10 flex-1 h-screen ml-0 p-4 mt-[60px] md:mt-[0px] md:ml-[240px]">{children}</div>
    </div>
  );
};

export default AdminLayout;
