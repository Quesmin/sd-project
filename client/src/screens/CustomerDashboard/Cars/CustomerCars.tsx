import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Grid } from "@mui/material";
import { useAppSelector } from "../../../stores/store";
import CarItem from "./CarItem/CarItem";

const CustomerCars = () => {
  const cars = useAppSelector((state) => state.car.cars);
  const searchCriteria = useAppSelector((state) => state.user.searchInput);
  if (!cars.length) {
    return <>No data</>;
  }

  return (
    <Grid container spacing={4}>
      {cars
        .filter(
          (e) =>
            e.manufacturer.name.includes(searchCriteria) ||
            e.model.includes(searchCriteria)
        )
        .map((car) => (
          <CarItem
            key={car.id}
            id={car.id}
            title={`${car.manufacturer.name} ${car.model}`}
            description={`${car.price} EUR`}
          />
        ))}
    </Grid>
  );
};

export default CustomerCars;
