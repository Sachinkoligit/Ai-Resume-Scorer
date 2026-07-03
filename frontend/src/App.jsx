import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Sidebar from "./components/sidebar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";
import History from "./components/History/History";
import Admin from "./components/Admin/Admin";
import Login from "./components/login/login";
import ProtectedRoute from "./utils/ProtectedRoute";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Sidebar />
      <Routes>
        <Route path="/signin" element={<Login />} />
        <Route element={<ProtectedRoute />}>
          <Route index element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/history" element={<History />} />
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
