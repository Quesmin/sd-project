import { BodyType } from "../enums/BodyType";
import { FuelType } from "../enums/FuelType";
import { Manunfacturer } from "./Manufacturer";

export interface Car {
  id: number;
  model: string;
  manufacturer: Manunfacturer;
  body: BodyType;
  mileage: number;
  seats: number;
  weight: number;
  vin: string;
  hp: number;
  yearOFManufacturer: number;
  price: number;
  fuelType: FuelType;
}
