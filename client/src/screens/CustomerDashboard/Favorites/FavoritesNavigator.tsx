import React from "react";
import { Route, Routes } from "react-router-dom";
import CarPage from "../Cars/CarPage";
import CustomerFavorites from "./CustomerFavorites";

const FavoritesNavigator = () => {
  return (
    <Routes>
      <Route path="/cars/:id" element={<CarPage />} />
      <Route path="/favorites" element={<CustomerFavorites />} />
    </Routes>
  );
};

export default FavoritesNavigator;
