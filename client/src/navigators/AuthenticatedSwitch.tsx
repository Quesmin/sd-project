import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "../stores/store";

function AuthenticationSwitch(props: any) {
  const isAuthenticated = false;

  // useSelector<RootState>(
  //   (state) => state.user.isLoggedIn
  // );
  const { to, redirect } = props;

  return isAuthenticated ? (
    <Navigate to="/dashboard" />
  ) : (
    <Navigate to="/login" />
  );
}

export default AuthenticationSwitch;
