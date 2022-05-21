import { BodyType } from "../enums/BodyType";
import { FuelType } from "../enums/FuelType";
import { Manufacturer } from "./Manufacturer";

export interface Car {
  id: number;
  model: string;
  manufacturer: Manufacturer;
  body: BodyType;
  mileage: number;
  seats: number;
  weight: number;
  vin: string;
  hp: number;
  yearOfManufacture: number;
  price: number;
  fuelType: FuelType;
}
