import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import { Home, BookingRoom, ServicePage } from './pages'
import RoomDetail from "./pages/RoomDetail";

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/rooms' element={<BookingRoom />} />
        <Route path='/services' element={<ServicePage />} />
        <Route path="/room/:roomId" element={<RoomDetail />} /> {/* Example route for RoomDetail */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
