import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Acceuil from "./pages/Acceuil";

import { useAuth } from "./hooks/useAuth";
import AdminDashboard from "./pages/AdminDashboard";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Payment_History from "./pages/Payment_History";
import Setting from "./pages/Setting";
import Signup from "./pages/Signup";
import ConfirmPlan from "./pages/ConfirmPlan";

function MyRoutes() {
  const { token } = useAuth();
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Acceuil />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        {token && (
          <>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="adminDashboard" element={<AdminDashboard />} />
            <Route path="confirm-plan" element={<ConfirmPlan />} />
            <Route path="paymentHistory" element={<Payment_History />}></Route>
            <Route path="setting" element={<Setting />}></Route>
          </>
        )}
      </Route>
    </Routes>
  );
}

export default MyRoutes;
