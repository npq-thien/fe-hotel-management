import { NOTIFICATION_TYPES } from "constants/type";
import React, { useEffect, useState } from "react";

const Notification = ({ message, onClose, type }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    const timer = setTimeout(() => {
      setShow(false);
      onClose();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  if (type === NOTIFICATION_TYPES.SUCCESS) {
    return (
      <div
        className={`fixed bottom-4 right-4 p-4 bg-green-500 text-white rounded shadow-lg z-10 transition duration-500 ease-in-out transform ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="flex justify-between items-center">
          <span>{message}</span>
          <button onClick={onClose} className="ml-4 h-6 w-6 text-white rounded-full bg-green-700">
            X
          </button>
        </div>
      </div>
    );
  }
  else if (type === NOTIFICATION_TYPES.FAILED) {
    return (
      <div
        className={`fixed bottom-4 right-4 p-4 bg-red-500 text-white rounded shadow-lg z-10 transition duration-500 ease-in-out transform ${
          show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <div className="flex justify-between items-center">
          <span>{message}</span>
          <button onClick={onClose} className="ml-4 h-6 w-6 text-white rounded-full bg-red-700">
            X
          </button>
        </div>
      </div>
    );
  }
};

export default Notification;
