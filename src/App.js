import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import "./index.css";
import ScrollToTop from "utils/ScrollToTop";
import { routes } from "./routes";


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
        {routes.map((item) => (
          <Route path={item.path} element={item.element} />
        ))}
      </Routes>
      <ScrollToTop />
    </div>
  );
}

export default App;
