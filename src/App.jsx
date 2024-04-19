import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Accordians from "./Pages/Accordians";
import Home from "./Pages/Home";
import Stats from "./Pages/Stats";
import Layout from "./components/dashboard/Layout";
import { AccordiansPath, DashboardPath, HomePath } from "./assets/data/path";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HomePath} element={<Home />} />
        <Route path={DashboardPath} element={<Stats />} />
        <Route path={AccordiansPath} element={<Accordians />} />
        <Route
          path="*"
          element={
            <h2 className="d-flex justify-content-center align-content-center align-items-center display-2">
              Page Not Found
            </h2>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
