import React, { useState } from "react";
import { LoginPopupModal, RegisterPopupModal } from "../auth/forms/";
import Navbar from "../components/Navbar";
import ImageSlider from "../components/ImageSlider";
import Footer from "../components/Footer";
import { slideImages } from "../constants";

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
    <div className="flex flex-col h-screen">
      <div className="z-20">
        <Navbar
          setLoginPopup={setLoginPopup}
          setRegisterPopup={setRegisterPopup}
        />
      </div>

      <div className="z-10">
        <ImageSlider slideImages={slideImages} />
      </div>

      <main class="mb-auto h-10 bg-green-500">Content</main>

      {/* Render login/register form */}
      {loginPopup && <LoginPopupModal toggleLoginPopup={toggleLoginPopup} switchRegister={switchRegisterAndLogin} />}

      {registerPopup && (
        <RegisterPopupModal toggleRegisterPopup={toggleRegisterPopup} switchLogin={switchRegisterAndLogin} />
      )}

      <Footer />
    </div>
  );
};

export default Home;
