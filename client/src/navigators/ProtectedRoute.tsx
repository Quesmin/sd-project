import React, { ReactNode } from "react";
import { Navigate, Route } from "react-router-dom";
import { useAppSelector } from "../stores/store";

type Props = {
  element: JSX.Element;
};

const ProtectedRoute = (props: Props) => {
  const user = useAppSelector((state) => state.user);

  return user.isLoggedIn ? (
    user.user.isAdmin ? (
      <Navigate to="/admin-dashboard" />
    ) : (
      props.element
    )
  ) : (
    <Navigate to="/login" />
  );
};

export default ProtectedRoute;
