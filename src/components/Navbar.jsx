import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

import { navbarLinks } from "../constants";

const Navbar = ({ loginPopup, registerPopup, setLoginPopup, setRegisterPopup }) => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-2 py-3 bg-stone-300 border-b border-neutral-700 backdrop-blur-md">
      <div className="relative mx-5">
        <div className="flex justify-between items-center">
          {/* Logo and name */}
          <div className="flex items-center flex-shrink-0 select-none">
            <img src="./logo.png" alt="Logo hotel" className="w-12 h-12 m-2" />
            <p className="font-serif body-bold md:h3-bold">The Cozy Nook</p>
          </div>

          <ul className="hidden md:flex space-x-12">
            {navbarLinks.map((item, index) => (
              <li key={index}>
                <a href={item.route}>{item.label}</a>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex gap-8 flex-shrink-0">
            <Link
              className="p-2 rounded-md bg-gradient-to-r from-orange-200
              to to-orange-500"
              onClick={() => setLoginPopup(true)}
            >
              Log in
            </Link>
            <Link className="p-2 border-2 border-orange-600 rounded-md" onClick={() => setRegisterPopup(true)}>
              Register
            </Link>
          </div>

          <div className="my-div-class flex">
            <button onClick={toggleNavbar}>{mobileDrawerOpen ? <X /> : <Menu />}</button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div
            className="fixed right-0 z-20 bg-stone-400 w-full
            flex flex-col lg:hidden flex-center justify-center mt-3"
          >
            <ul>
              {navbarLinks.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.route}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
