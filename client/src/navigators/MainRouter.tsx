import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthenticationSwitch from "./AuthenticatedSwitch";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ProtectedRoute from "./ProtectedRoute";
import CustomerDashboard from "../screens/CustomerDashboard/CustomerDashboard";
import AdminRoute from "./AdminRoute";
import { Typography } from "@mui/material";
import AdminDashboard from "../screens/AdminDashboard/AdminDashboard";

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
        path="admin-dashboard/*"
        element={<AdminRoute element={<AdminDashboard />} />}
      />
      <Route path="/" element={<LoginScreen />} />
      <Route path="*" element={<Typography>NOT FOUND</Typography>} />
    </Routes>
  );
}

export default MainRouter;
