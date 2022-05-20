import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthenticationSwitch from "./AuthenticatedSwitch";
import AdminDashboard from "../screens/AdminDashboard";
import CustomerDashboard from "../screens/CustomerDashboard";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ProtectedRoute from "./ProtectedRoute";

interface Props {}

function MainRouter(props: Props) {
  return (
    <Routes>
      <Route path="/" element={<LoginScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route
        path="/dashboard"
        element={<ProtectedRoute element={<CustomerDashboard />} />}
      />
      <Route
        path="/admin-dashboard"
        element={<ProtectedRoute element={<AdminDashboard />} />}
      />
    </Routes>
  );
}

export default MainRouter;
