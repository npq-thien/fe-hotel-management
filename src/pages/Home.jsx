import React, { useState } from "react";
import { LoginPopupModal, RegisterPopupModal } from "../auth/forms/";
import Navbar from "../components/Navbar";
import ImageSlider from "../components/ImageSlider";

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
      <div className="z-20">
        <Navbar
          loginPopup={loginPopup}
          registerPopup={registerPopup}
          setLoginPopup={setLoginPopup}
          setRegisterPopup={setRegisterPopup}
        />
      </div>

      <div className="z-10">
        <ImageSlider />
      </div>

      {/* Render login/register form */}
      {loginPopup && <LoginPopupModal toggleLoginPopup={toggleLoginPopup} switchRegister={switchRegisterAndLogin} />}

      {registerPopup && (
        <RegisterPopupModal toggleRegisterPopup={toggleRegisterPopup} switchLogin={switchRegisterAndLogin} />
      )}
    </div>
  );
};

export default Home;
