import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { FaKey, FaUser } from "react-icons/fa";
import { FaArrowRightFromBracket, FaBellConcierge } from "react-icons/fa6";
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useQueryClient } from "react-query";

import { navbarLinks } from "../../constants";
import { logout } from "store/userSlice";

const ProfileDropDown = ({ userData }) => {
  const dispatch = useDispatch();
  const [dropDownProfile, setDropDownProfile] = useState(false);

  const toggleProfile = () => {
    setDropDownProfile(!dropDownProfile);
  };

  const handleSignOut = () => {
    dispatch(logout());
    window.location.reload();
  };

  const dropDownProfileLinks = [
    {
      title: "Edit profile",
      icon: <FaUser />,
      link: "/",
    },
    {
      title: "My booking",
      icon: <FaBellConcierge />,
      link: "/",
    },
    {
      title: "Change password",
      icon: <FaKey />,
      link: "/",
    },
    {
      title: "Log out",
      icon: <FaArrowRightFromBracket />,
      link: "/",
      onClick: handleSignOut,
    },
  ];

  return (
    <div className="relative">
      <div
        className="flex-center gap-2 font-semibold p-2 rounded-xl cursor-pointer hover:bg-dark-1"
        onClick={toggleProfile}
      >
        <div className="bg-primary p-2 rounded-full">
          <FaUser />
        </div>
        <p className="select-none">{userData?.name || "User"}</p>

        {dropDownProfile && (
          <div className="absolute top-full right-2 mt-2">
            <Box
              width={200}
              sx={{
                bgcolor: "background.paper",
                borderRadius: "5px",
                boxShadow: 1,
              }}
            >
              <nav>
                <List>
                  {dropDownProfileLinks.map((item, index) => (
                    <ListItem
                      key={index}
                      sx={{
                        minWidth: "40px",
                        "&:hover": {
                          backgroundColor: "#FA9191",
                        },
                      }}
                      disablePadding
                    >
                      <Link to={item.link} onClick={item.onClick}>
                        <ListItemButton
                          sx={{
                            "&:hover": {
                              backgroundColor: "#FA9191",
                            },
                          }}
                        >
                          <ListItemIcon sx={{ paddingRight: 1, minWidth: "unset", marginRight: "5px" }}>
                            {item.icon}
                          </ListItemIcon>
                          <ListItemText primary={item.title} />
                        </ListItemButton>
                      </Link>
                    </ListItem>
                  ))}
                </List>
              </nav>
            </Box>
          </div>
        )}
      </div>
    </div>
  );
};

const Navbar = ({ setLoginPopup, setRegisterPopup }) => {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);

  // if (token) {
  //   setIsSignedIn(true);
  // }

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsSignedIn(true);
    }

    if (!token) {
      setIsSignedIn(false);
    }
  }, [isSignedIn]);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-2 py-3 bg-stone-300 secondary border-b border-neutral-700 backdrop-blur-md">
      <div className="relative mx-4">
        <div className="flex justify-between items-center">
          {/* Logo and name */}
          <Link to="/">
            <div className="flex items-center flex-shrink-0 select-none">
              <img src="/logo.png" alt="Logo hotel" className="w-12 h-12 m-2" />
              <p className="font-inter body-bold">The Cozy Nook</p>
            </div>
          </Link>
          <ul className="hidden body-bold md:flex space-x-12">
            {navbarLinks.map((item, index) => (
              <li className="hover:text-primary" key={index}>
                <Link to={item.route}>{item.label}</Link>
              </li>
            ))}
          </ul>

          {/* If signed in show user information */}
          {isSignedIn ? (
            // <div className="flex-center gap-2 font-semibold p-2 rounded-xl cursor-pointer hover:bg-dark-1">
            //   <div className="bg-primary p-2 rounded-full">
            //     <FaUser />
            //   </div>
            //   <p>Thiện 1</p>
            // </div>
            <ProfileDropDown />
          ) : (
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
          )}

          <div className="flex md:hidden">
            <button onClick={toggleNavbar}>{mobileDrawerOpen ? <X /> : <Menu />}</button>
          </div>
        </div>

        {/* Dropdown navbar for mobile */}
        {mobileDrawerOpen && (
          <div
            className="fixed right-0 z-100 bg-stone-400 w-full
            flex-center flex-col md:hidden flex-center mt-3"
          >
            {!isSignedIn && (
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
            )}

            <ul className="text-center">
              {navbarLinks.map((item, index) => (
                <li key={index} className="py-4 body-bold hover:text-primary-1">
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
