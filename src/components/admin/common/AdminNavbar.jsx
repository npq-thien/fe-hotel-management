import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRightFromBracket, FaDiceD6 } from "react-icons/fa6";
import { useDispatch } from "react-redux";

import { adminNavbarLinks } from "constants"; // Adjust the import path as necessary
import { logout } from "store/userSlice";

const AdminNavbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [mobileNavbarOpen, setMobileNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileNavbarOpen(!mobileNavbarOpen);
  };

  const handleSignOut = () => {
    dispatch(logout());
    navigate('/admin/login');
  };

  return (
    <nav>
      {/* When small device, show button to open navbar */}
      <div className={`md:hidden fixed ${mobileNavbarOpen ? "ml-[25%]" : ""} `}>
        <FaDiceD6
          className={`h-16 w-16 p-4 m-2 bg-primary-1 rounded-full cursor-pointer ${mobileNavbarOpen ? "opacity-100" : "opacity-50"} `}
          onClick={toggleNavbar}
        />
      </div>

      <div
        className={`fixed top-0 md:left-0 z-20 bg-cream secondary border-r border-neutral-700 
          py-4 h-full ${mobileNavbarOpen ? "block" : "hidden"} md:block`}
        onClick={toggleNavbar}
      >
        <div className={`sm:flex md:px-4 flex-col items-center h-full w-full ${mobileNavbarOpen ? "flex" : "hidden"}`}>
          {/* Logo and name */}
          <div className="flex flex-col items-center select-none pb-2 mb-4 border-black border-b-2">
            <img src="/logo.png" alt="Logo hotel" className="w-12 h-12 m-2" />
            <p className="hidden md:block font-inter body-bold">The Cozy Nook</p>
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-col space-y-4 body-bold text-dark-3">
            {adminNavbarLinks.map((item, index) => (
              <Link to={item.route}>
                <li className="flex gap-4 items-center hover:bg-primary w-full py-4 px-6 rounded-md" key={index}>
                  {item.icon}
                  <span className="hidden md:block">{item.label}</span>
                </li>
              </Link>
            ))}
          </ul>

          {/* Logout Button */}
          <div className="mt-auto px-4 w-full">
            <button
              className="flex gap-4 w-full items-center mb-2 hover:bg-primary py-4 px-6 rounded-md body-bold text-dark-3"
              onClick={handleSignOut}
            >
              <FaArrowRightFromBracket />
              <span className="hidden md:block">Logout</span>
            </button>

            <div className="hidden md:block text-center tiny-medium w-full pt-2 border-t-2 border-black">
              <p>© 2024 The Cozy Nook</p>
              <p>All rights reserved</p>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
