import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRightFromBracket, FaDiceD6 } from "react-icons/fa6";

import { adminNavbarLinks } from "constants"; // Adjust the import path as necessary

const AdminNavbar = ({ setLogout }) => {
  const [mobileNavbarOpen, setMobileNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileNavbarOpen(!mobileNavbarOpen);
  };

  return (
    <nav>
      {/* When small device, show button to open navbar */}
      <div className={`md:hidden block ${mobileNavbarOpen ? "ml-[25%]" : ""} `}>
        <FaDiceD6 className="h-16 w-16 p-4 m-2 bg-primary-1 rounded-full cursor-pointer" onClick={toggleNavbar} />
      </div>

      <div
        className={`fixed top-0 left-0 z-20 bg-cream secondary border-r border-neutral-700 
          py-4 h-full ${mobileNavbarOpen ? "block" : "hidden"} md:block`}
        onClick={toggleNavbar}
      >
        <div className={`sm:flex md:px-4 flex-col items-center h-full w-full ${mobileNavbarOpen ? "flex" : "hidden"}`}>
          {/* Logo and name */}
          <div className="flex items-center select-none mb-4 border-black border-b-2">
            <img src="/logo.png" alt="Logo hotel" className="w-12 h-12 m-2" />
            <p className="hidden md:block font-inter body-bold">The Cozy Nook</p>
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-col space-y-4 body-bold text-dark-3">
            {adminNavbarLinks.map((item, index) => (
              <Link to={item.route}>
                <li 
                  className="flex gap-4 items-center hover:bg-primary w-full py-4 px-6 rounded-md" 
                  key={index}>
                    {item.icon}
                    <span className="hidden md:block">{item.label}</span>
                </li>
              </Link>
            ))}
          </ul>

          {/* Logout Button */}
          <div className="mt-auto px-4 mb-4 border-t-2 w-full border-black">
            <button
              className="flex gap-4 items-center mt-2 hover:bg-primary py-4 px-6 rounded-md body-bold text-dark-3"
              onClick={() => setLogout(true)}
            >
              <FaArrowRightFromBracket />
              <span className="hidden md:block">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;
