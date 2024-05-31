import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

import { navbarLinks } from "../constants";

const Navbar = ({ loginPopup, registerPopup, setLoginPopup, setRegisterPopup }) => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="sticky top-0 z-2 py-3 bg-stone-300 border-b border-neutral-700 backdrop-blur-md">
      <div className="relative mx-4">
        <div className="flex justify-between items-center">
          {/* Logo and name */}
          <div className="flex items-center flex-shrink-0 select-none">
            <img src="./logo.png" alt="Logo hotel" className="w-12 h-12 m-2" />
            <p className="font-serif body-bold">The Cozy Nook</p>
          </div>

          <ul className="hidden body-bold md:flex space-x-12">
            {navbarLinks.map((item, index) => (
              <li key={index}>
                <a href={item.route}>{item.label}</a>
              </li>
            ))}
          </ul>

          <div className="hidden items-center md:flex gap-5 flex-shrink-0">
            <Link
              className="py-2 px-4 rounded-md bg-gradient-to-r from-orange-200
              to to-orange-500"
              onClick={() => setLoginPopup(true)}
            >
              Log in
            </Link>
            <Link className="p-2 border-2 border-orange-600 rounded-md" onClick={() => setRegisterPopup(true)}>
              Register
            </Link>
          </div>

          <div className={`flex ${windowWidth > 768 ? "hidden" : ""}`}>
            <button onClick={toggleNavbar}>{mobileDrawerOpen ? <X /> : <Menu />}</button>
          </div>
        </div>
        {mobileDrawerOpen && windowWidth < 768 && (
          <div
            className="fixed right-0 z-50 bg-stone-400 w-full
            flex flex-col lg:hidden flex-center justify-center mt-3"
          >
            <div className="flex items-center gap-12 mt-4">
              <Link
                className="py-2 px-4 rounded-md bg-gradient-to-r from-orange-200
                to to-orange-500"
                onClick={() => setLoginPopup(true)}
              >
                Log in
              </Link>
              <Link className="p-2 border-2 border-orange-600 rounded-md" onClick={() => setRegisterPopup(true)}>
                Register
              </Link>
            </div>

            <ul>
              {navbarLinks.map((item, index) => (
                <li key={index} className="py-4 body-bold">
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
