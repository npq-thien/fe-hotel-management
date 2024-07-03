import React, { useState } from "react";
// import { LoginPopupModal, RegisterPopupModal } from "../../auth/forms"
import { LoginPopupModal, RegisterPopupModal } from "auth/forms";
import { Navbar, Footer } from "../common";

const CustomerLayout = ({ children }) => {
  const [loginPopup, setLoginPopup] = useState(false);
  const [registerPopup, setRegisterPopup] = useState(false);

  const toggleLoginPopup = () => {
    setLoginPopup(!loginPopup);
  };

  const toggleRegisterPopup = () => {
    setRegisterPopup(!registerPopup);
  };

  const switchRegisterAndLogin = () => {
    toggleLoginPopup();
    toggleRegisterPopup();
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="z-20">
        <Navbar setLoginPopup={setLoginPopup} setRegisterPopup={setRegisterPopup} />
      </div>

      <div className="z-10">{children}</div>

      {/* Render login/register form */}
      {loginPopup && <LoginPopupModal toggleLoginPopup={toggleLoginPopup} switchRegister={switchRegisterAndLogin} />}

      {registerPopup && (
        <RegisterPopupModal toggleRegisterPopup={toggleRegisterPopup} switchLogin={switchRegisterAndLogin} />
      )}

      <Footer />
    </div>
  );
};

export default CustomerLayout;
