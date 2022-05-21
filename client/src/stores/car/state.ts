import { Car } from "../../models/entities/Car";
import { User } from "../../models/entities/User";

export interface CarState {
  cars: Car[];
  currentCar: Car;
}

export const initialCarEntityState: Car = {
  id: 0,
  model: "string",
  manufacturer: {
    id: 0,
    name: "",
  },
  body: 0,
  mileage: 0,
  seats: 0,
  weight: 0,
  vin: "",
  hp: 0,
  yearOfManufacture: 0,
  price: 0,
  fuelType: 0,
};

export const carInitialState: CarState = {
  cars: [],
  currentCar: initialCarEntityState,
};
