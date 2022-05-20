import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthenticationSwitch from "./AuthenticatedSwitch";
import AdminDashboard from "../screens/AdminDashboard";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ProtectedRoute from "./ProtectedRoute";
import CustomerDashboard from "../screens/CustomerDashboard/CustomerDashboard";

interface Props {}

function MainRouter(props: Props) {
  return (
    <Routes>
      <Route path="login" element={<LoginScreen />} />
      <Route path="register" element={<RegisterScreen />} />
      <Route
        path="dashboard/*"
        element={<ProtectedRoute element={<CustomerDashboard />} />}
      />
      <Route
        path="admin-dashboard"
        element={<ProtectedRoute element={<AdminDashboard />} />}
      />
      <Route path="/" element={<LoginScreen />} />
    </Routes>
  );
}

export default MainRouter;
