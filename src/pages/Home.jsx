import React, { useState } from 'react'
import LoginPopupModal from '../auth/forms/LoginPopupModal';

const Home = () => {
  const [loginPopup, setLoginPopup] = useState(true);

  const toggleLoginPopup = () => {
    setLoginPopup(!loginPopup);
  }

  return (
    <div>
      <button
        className="bg-amber-200 p-4"
        onClick={() => setLoginPopup(true)}
      >
        Login
      </button>

      {loginPopup && <LoginPopupModal
        toggleLoginPopup={toggleLoginPopup}
        loginPopup={loginPopup}
      />}
    </div>
  );
}

export default Home