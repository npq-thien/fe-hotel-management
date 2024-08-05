import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import "./index.css";
import ScrollToTop from "utils/ScrollToTop";
import { routes } from "./routes";
import RequireAuth from "components/admin/common/RequireAuth";

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
        {routes.map((item, index) => {
          // Need to login to access admin page
          if (item.path.startsWith("/admin") && item.path !== "/admin/login") {
            return <Route key={index} path={item.path} element={<RequireAuth>{item.element}</RequireAuth>} />;
          }

          return <Route key={index} path={item.path} element={item.element} />;
        })}
      </Routes>
      <ScrollToTop />
    </div>
  );
}

export default App;
