import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";

const columns = [
  { field: "id", headerName: "ID", width: 70, headerClassName: "table-header" },
  { field: "firstName", headerName: "First name", width: 130, headerClassName: "table-header" },
  { field: "lastName", headerName: "Last name", width: 130, headerClassName: "table-header" },
  { field: "phone", headerName: "Phone", type: "number", width: 120, headerClassName: "table-header" },
  { field: "email", headerName: "Email", width: 250, headerClassName: "table-header" },
  { field: "bookings", headerName: "Bookings", width: 70, headerClassName: "table-header" },
  { field: "spent", headerName: "Amount spent", width: 150, headerClassName: "table-header" },
  {
    field: "actions",
    headerName: "Actions",
    width: 150,
    headerClassName: "table-header",
    renderCell: (params) => (
      //   <div style={{ display: 'flex', gap: '10px' }}>
      <div className="flex-center gap-5 h-full">
        <FaEye className="cursor-pointer text-green-500 w-5 h-5" />
        <FaEdit className="cursor-pointer text-blue-500 w-5 h-5" />
        <FaTrash className="cursor-pointer text-red-500 w-5 h-5" />
      </div>
    ),
  },
];

const rows = [
  { id: 1, firstName: 'John', lastName: 'Doe', phone: '1234567890', email: 'john.doe@example.com', bookings: 5, spent: 1500 },
  { id: 2, firstName: 'Jane', lastName: 'Smith', phone: '2345678901', email: 'jane.smith@example.com', bookings: 3, spent: 1200 },
  { id: 3, firstName: 'Alice', lastName: 'Johnson', phone: '3456789012', email: 'alice.johnson@example.com', bookings: 7, spent: 2100 },
  { id: 4, firstName: 'Bob', lastName: 'Brown', phone: '4567890123', email: 'bob.brown@example.com', bookings: 2, spent: 800 },
  { id: 5, firstName: 'Charlie', lastName: 'Davis', phone: '5678901234', email: 'charlie.davis@example.com', bookings: 4, spent: 1600 },
  { id: 6, firstName: 'Diana', lastName: 'Clark', phone: '6789012345', email: 'diana.clark@example.com', bookings: 6, spent: 2000 },
  { id: 7, firstName: 'Edward', lastName: 'Martinez', phone: '7890123456', email: 'edward.martinez@example.com', bookings: 8, spent: 2500 },
  { id: 8, firstName: 'Fiona', lastName: 'Garcia', phone: '8901234567', email: 'fiona.garcia@example.com', bookings: 1, spent: 500 },
  { id: 9, firstName: 'George', lastName: 'Wilson', phone: '9012345678', email: 'george.wilson@example.com', bookings: 9, spent: 3000 },
  { id: 10, firstName: 'Hannah', lastName: 'Moore', phone: '0123456789', email: 'hannah.moore@example.com', bookings: 5, spent: 1500 },
];

const customStyles = {
  "--unstable_DataGrid-headWeight": "bold", // Override font-weight
};

const GuestTable = () => {
  return (
    <div style={{ height: "100%", width: "50%"}}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      
      />
    </div>
  );
};

export default GuestTable;
