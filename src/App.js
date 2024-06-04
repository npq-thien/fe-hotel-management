import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import BookingRoom from "./pages/BookingRoom";

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/rooms' element={<BookingRoom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
