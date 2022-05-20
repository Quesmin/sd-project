import React, { ReactNode } from "react";
import { Navigate, Route } from "react-router-dom";
import { useAppSelector } from "../stores/store";

type Props = {
  element: JSX.Element;
};

const ProtectedRoute = (props: Props) => {
  const isAuthenticated = useAppSelector((state) => state.user.isLoggedIn);

  return isAuthenticated ? props.element : <Navigate to="/login" />;
};

export default ProtectedRoute;
