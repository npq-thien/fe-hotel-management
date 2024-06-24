import { Routes, Route } from "react-router-dom";

import "./index.css";
import { Home, BookingRoom, ServicePage } from "./pages";
import RoomDetail from "./pages/RoomDetail";
import ScrollToTop from "utils/ScrollToTop";

function App() {
  return (
    // <Routes>
    //   <Route path="/" element={<Home />} />
    //   <Route path="/rooms" element={<BookingRoom />} />
    //   <Route path="/services" element={<ServicePage />} />
    //   <Route path="/room/:roomId" element={<RoomDetail />} /> {/* Example route for RoomDetail */}
    // </Routes>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<BookingRoom />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/room/:roomId" element={<RoomDetail />} /> {/* Example route for RoomDetail */}
      </Routes>
      <ScrollToTop />
    </div>
  );
}

export default App;
