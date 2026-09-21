
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/home";
import Register from "./pages/register";
import Counts from "./pages/counts";

function Routers() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
        path="/counts"
        element={<Counts />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default Routers;

