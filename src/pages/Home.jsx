import React, { useState } from "react";
import { LoginPopupModal, RegisterPopupModal } from "../auth/forms/";
import Navbar from "../components/Navbar";

const Home = () => {
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
    <div className="flex flex-col">
      <Navbar loginPopup={loginPopup} registerPopup={registerPopup}
        setLoginPopup={setLoginPopup} setRegisterPopup={setRegisterPopup}
      />

      {/* Render login/register form */}
      {loginPopup && <LoginPopupModal toggleLoginPopup={toggleLoginPopup} switchRegister={switchRegisterAndLogin} />}

      {registerPopup && (
        <RegisterPopupModal toggleRegisterPopup={toggleRegisterPopup} switchLogin={switchRegisterAndLogin} />
      )}
    </div>
  );
};

export default Home;
