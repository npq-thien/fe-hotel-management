import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import Button from "@mui/material/Button";
import { FaSync, FaEdit, FaCheckCircle, FaTimesCircle, FaEye, FaTrash } from "react-icons/fa";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  { field: "phone", headerName: "Phone", type: "number", width: 120 },
  { field: "email", headerName: "Email", width: 250 },
  {
    field: "checkInDate",
    headerName: "Check-in date",
    type: "date",
    width: 130,
  },
  {
    field: "checkOutDate",
    headerName: "Check-out date",
    type: "date",
    width: 130,
  },
  { field: "roomType", headerName: "Room type", width: 120 },
  { field: "guests", headerName: "Guests", width: 70 },
  {
    field: "status",
    headerName: "Status",
    width: 150,
    renderCell: (params) => {
      return params.row.status === "Confirmed" ? (
        <div className="flex items-center gap-2">
          <FaCheckCircle className="text-green-500" />
          {params.row.status}
        </div>
      ) : params.row.status === "Canceled" ? (
        <div className="flex items-center gap-2">
          <FaTimesCircle className="text-red-500" />
          {params.row.status}
        </div>
      ) : (
        <div className="flex items-center gap-2">
          <FaSync className="text-yellow-500" />
          {params.row.status}
        </div>
      );
    },
  },
  {
    field: "actions",
    headerName: "Actions",
    width: 150,
    renderCell: () => (
      <div className="flex justify-center items-center gap-5 h-full">
        <FaEye className="cursor-pointer text-green-500 w-5 h-5" />
        <FaEdit className="cursor-pointer text-blue-500 w-5 h-5" />
        <FaTrash className="cursor-pointer text-red-500 w-5 h-5" />
      </div>
    ),
  },
];

const initialRows = [
  {
    id: 1,
    lastName: "Snow",
    firstName: "Jon",
    phone: "1234567890",
    email: "jon.snow@example.com",
    checkInDate: new Date(2023, 5, 1),
    checkOutDate: new Date(2023, 5, 5),
    roomType: "Deluxe",
    guests: 2,
    status: "Confirmed",
  },
  {
    id: 2,
    lastName: "Stark",
    firstName: "Arya",
    phone: "2345678901",
    email: "arya.stark@example.com",
    checkInDate: new Date(2023, 5, 2),
    checkOutDate: new Date(2023, 5, 6),
    roomType: "Standard",
    guests: 1,
    status: "Pending",
  },
  {
    id: 3,
    lastName: "Lannister",
    firstName: "Tyrion",
    phone: "3456789012",
    email: "tyrion.lannister@example.com",
    checkInDate: new Date(2023, 5, 3),
    checkOutDate: new Date(2023, 5, 7),
    roomType: "Suite",
    guests: 3,
    status: "Canceled",
  },
  {
    id: 4,
    lastName: "Baratheon",
    firstName: "Robert",
    phone: "4567890123",
    email: "robert.baratheon@example.com",
    checkInDate: new Date(2023, 5, 4),
    checkOutDate: new Date(2023, 5, 8),
    roomType: "Deluxe",
    guests: 2,
    status: "Pending",
  },
  {
    id: 5,
    lastName: "Targaryen",
    firstName: "Daenerys",
    phone: "5678901234",
    email: "daenerys.targaryen@example.com",
    checkInDate: new Date(2023, 5, 5),
    checkOutDate: new Date(2023, 5, 9),
    roomType: "Suite",
    guests: 4,
    status: "Pending",
  },
  {
    id: 6,
    lastName: "Greyjoy",
    firstName: "Theon",
    phone: "6789012345",
    email: "theon.greyjoy@example.com",
    checkInDate: new Date(2023, 5, 6),
    checkOutDate: new Date(2023, 5, 10),
    roomType: "Standard",
    guests: 1,
    status: "Pending",
  },
  {
    id: 7,
    lastName: "Mormont",
    firstName: "Jorah",
    phone: "7890123456",
    email: "jorah.mormont@example.com",
    checkInDate: new Date(2023, 5, 7),
    checkOutDate: new Date(2023, 5, 11),
    roomType: "Deluxe",
    guests: 2,
    status: "Canceled",
  },
  {
    id: 8,
    lastName: "Tyrell",
    firstName: "Margaery",
    phone: "8901234567",
    email: "margaery.tyrell@example.com",
    checkInDate: new Date(2023, 5, 8),
    checkOutDate: new Date(2023, 5, 12),
    roomType: "Suite",
    guests: 3,
    status: "Pending",
  },
  {
    id: 9,
    lastName: "Martell",
    firstName: "Oberyn",
    phone: "9012345678",
    email: "oberyn.martell@example.com",
    checkInDate: new Date(2023, 5, 9),
    checkOutDate: new Date(2023, 5, 13),
    roomType: "Standard",
    guests: 2,
    status: "Pending",
  },
  {
    id: 10,
    lastName: "Bolton",
    firstName: "Ramsay",
    phone: "0123456789",
    email: "ramsay.bolton@example.com",
    checkInDate: new Date(2023, 5, 10),
    checkOutDate: new Date(2023, 5, 14),
    roomType: "Deluxe",
    guests: 1,
    status: "Confirmed",
  },
];

const UserTable = () => {
  const [selectedRow, setSelectedRow] = React.useState(null); // Track selected row ID
  const [rows, setRows] = useState(initialRows);
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleStatusChange = (id, status) => {
    setRows((prevRows) => prevRows.map((row) => (row.id === id ? { ...row, status } : row)));
  };

  const handleRowClick = (row) => {
    setButtonDisabled(false);
    setSelectedRow(row.id === selectedRow ? null : row.id); // Toggle selected row ID
  };

  const handleConfirm = () => {
    handleStatusChange(selectedRow, "Confirmed");
  };

  const handleCancel = () => {
    handleStatusChange(selectedRow, "Canceled");
  };

  const handleSelectionChange = (selection) => {
    setSelectedRow(selection.selectionModel);
  };

  const handleMainClick = () => {
    setSelectedRow([]);
  };


  return (
    <div style={{ height: "100%", width: "1600px" }}>
      <div className="flex-start mb-2">
        <div className="flex gap-2">
          <Button disabled={buttonDisabled} variant="outlined" color="success" onClick={handleConfirm}>
            Confirm
          </Button>
          <Button disabled={buttonDisabled} variant="outlined" color="error" onClick={handleCancel}>
            Cancel
          </Button>
        </div>
      </div>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        onRowClick={(params) => handleRowClick(params.row)}
        onSelectionModelChange={handleSelectionChange}
      />
    </div>
  );
};

export default UserTable;
