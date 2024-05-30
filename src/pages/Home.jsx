import React, { useState } from "react";
import { LoginPopupModal, RegisterPopupModal } from "../auth/forms/";

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
  }

  return (
    <div>
      <p>This is home</p>
      <button className="bg-amber-200 p-4" onClick={() => setLoginPopup(true)}>
        Login
      </button>

      {loginPopup && <LoginPopupModal toggleLoginPopup={toggleLoginPopup} switchRegister={switchRegisterAndLogin} />}

      <button className="bg-amber-200 p-4" onClick={() => setRegisterPopup(true)}>
        Register
      </button>

      {registerPopup && <RegisterPopupModal toggleRegisterPopup={toggleRegisterPopup} switchLogin={switchRegisterAndLogin} />}
    </div>
  );
};

export default Home;
