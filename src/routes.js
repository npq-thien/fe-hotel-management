import { Home, ProfilePage, RoomPage, ServicePage, RoomDetail, BookingPage, PromotionPage } from "./pages/customer";
import { AdminDashboard, AdminRooms, AdminServices, AdminBookings, AdminGuests, AdminPromotions, AdminLogin } from "./pages/admin";

export const routes = [
  // Customer routes
  { path: "/", element: <Home />, title: "The Cozy Nook" },
  { path: "/profile", element: <ProfilePage />, title: "Profile" },
  { path: "/rooms", element: <RoomPage />, title: "Rooms" },
  { path: "/services", element: <ServicePage />, title: "Services" },
  { path: "/promotions", element: <PromotionPage />, title: "Promotions" },
  { path: "/rooms/:roomId", element: <RoomDetail />, title: "Room Detail" },
  { path: "/booking", element: <BookingPage />, title: "Book Room" },

  // Admin routes
  { path: "/admin", element: <AdminDashboard />, title: "Admin Dashboard" },
  { path: "/admin/login", element: <AdminLogin />, title: "Admin Login" },
  { path: "/admin/bookings", element: <AdminBookings />, title: "Admin Bookings" },
  { path: "/admin/guests", element: <AdminGuests />, title: "Admin Guests" },
  { path: "/admin/rooms", element: <AdminRooms />, title: "Admin Rooms" },
  { path: "/admin/services", element: <AdminServices />, title: "Admin Services" },
  { path: "/admin/promotions", element: <AdminPromotions />, title: "Admin Promotions" },
];
