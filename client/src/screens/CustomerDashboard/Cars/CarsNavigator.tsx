import React from "react";
import { Route, Routes } from "react-router-dom";
import CarPage from "./CarPage";
import CustomerCars from "./CustomerCars";

const CarsNavigator = () => {
  return (
    <Routes>
      <Route path="/cars/:id" element={<CarPage />} />
      <Route path="/cars" element={<CustomerCars />} />
    </Routes>
  );
};

export default CarsNavigator;
