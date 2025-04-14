import React from "react";
import { Route, Routes } from "react-router-dom";
import Acceuil from "./pages/Acceuil";
import MainLayout from "./layout/MainLayout";
import App from "./App";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Signup from "./Signup";
import AdminDashboard from "./AdminDashboard";

function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Acceuil />} />
        <Route path="app" element={<App />} />
        <Route path="login" element={<Login />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="signup" element={<Signup />} />
        <Route path="adminDashboard" element={<AdminDashboard />} />
      </Route>
    </Routes>
  );
}

export default MyRoutes;
