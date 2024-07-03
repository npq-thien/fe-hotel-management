import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import "./index.css";
import { BookingPage, Home, RoomPage, ServicePage } from "./pages/customer";
import RoomDetail from "./pages/customer/RoomDetail";
import ScrollToTop from "utils/ScrollToTop";

import { AdminDashboard, AdminRooms, AdminServices,
  AdminBookings, AdminGuests, AdminPromotions} from "./pages/admin";

function App() {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        document.title = "The Cozy Nook";
        break;
      case "/rooms":
        document.title = "Rooms";
        break;
      case "/room/single":
        document.title = "Single Room";
        break;
      case "/room/double":
        document.title = "Double Room";
        break;
      case "/room/family":
        document.title = "Family Room";
        break;
      case "/room/deluxe":
        document.title = "Deluxe Room";
        break;
      case "/room/suite":
        document.title = "Suite Room";
        break;
      case "/room/penthouse":
        document.title = "Penthouse Room";
        break;
      case "/services":
        document.title = "Services";
        break;
      case "/booking":
        document.title = "Book room";
        break;
      default:
        document.title = "Loading...";
    }
  }, [location]);

  return (
    <div className="App">
      <Routes>
        {/* Customer path */}
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<RoomPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/room/:roomId" element={<RoomDetail />} /> {/* Example route for RoomDetail */}
        <Route path="/booking" element={<BookingPage />} /> {/* Example route for RoomDetail */}

        {/* Admin path */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/bookings" element={<AdminBookings />} />
        <Route path="/admin/guests" element={<AdminGuests />} />
        <Route path="/admin/rooms" element={<AdminRooms />} />
        <Route path="/admin/services" element={<AdminServices />} />
        <Route path="/admin/promotions" element={<AdminPromotions />} />

      </Routes>
      <ScrollToTop />
    </div>
  );
}

export default App;
