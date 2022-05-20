import React from "react";
import { useAppDispatch } from "../stores/store";
import { logout } from "../stores/user/slice";

const CustomerDashboard = () => {
  const dispatch = useAppDispatch();

  return (
    <>
      <div>CustomerDashboard</div>;
      <button onClick={() => dispatch(logout())}>logout</button>
    </>
  );
};

export default CustomerDashboard;
