import React, { ReactNode } from "react";
import { Navigate, Route } from "react-router-dom";
import { useAppSelector } from "../stores/store";

type Props = {
  element: JSX.Element;
};

const AdminRoute = (props: Props) => {
  const user = useAppSelector((state) => state.user);

  return user.isLoggedIn ? (
    user.user.isAdmin ? (
      props.element
    ) : (
      <Navigate to="/dashboard/cars" />
    )
  ) : (
    <Navigate to="/login" />
  );
};

export default AdminRoute;
