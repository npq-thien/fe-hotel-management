import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import "./index.css";
import ScrollToTop from "utils/ScrollToTop";
import { routes } from "./routes";

function App() {
  const location = useLocation();

  useEffect(() => {
    const route = routes.find((route) => route.path === location.pathname);
    if (route && route.title) document.title = route.title;
      else document.title = "Loading...";
  }, [location]);

  return (
    <div className="App">
      <Routes>
        {routes.map((item, index) => (
          <Route key={index} path={item.path} element={item.element} />
        ))}
      </Routes>
      <ScrollToTop />
    </div>
  );
}

export default App;
