import React from "react";
import { Route, Routes } from "react-router-dom";
import Acceuil from "./pages/Acceuil";
import MainLayout from "./layout/MainLayout";
import App from "./App";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Signup from "./Signup";

function MyRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Acceuil />} />
          <Route path="app" element={<App />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default MyRoutes;
