import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import { Home, BookingRoom, ServicePage } from './pages'

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/rooms' element={<BookingRoom />} />
        <Route path='/services' element={<ServicePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
