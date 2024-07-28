import React from "react";

const EditableField = ({ isEditable, value, onChange }) => {
  return isEditable ? (
    <input className="p-2 border rounded-lg min-h-10" type="text" value={value ? value : ''} onChange={(e) => onChange(e.target.value)} />
  ) : (
    <span className="p-2 border rounded-lg bg-gray-100 text-dark-2 select-none min-h-10">{value}</span>
  );
};

export default EditableField;
