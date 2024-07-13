import React from "react";

const EditableField = ({ isEditable, value, onChange }) => {
  return isEditable ? (
    <input className="p-2 border rounded-lg" type="text" value={value} onChange={(e) => onChange(e.target.value)} />
  ) : (
    <span className="p-2 border rounded-lg bg-gray-100 text-dark-2 select-none">{value}</span>
  );
};

export default EditableField;
