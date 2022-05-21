import { Appointment } from "../../models/entities/Appointment";
import { Car } from "../../models/entities/Car";
import { Manufacturer } from "../../models/entities/Manufacturer";
import { User } from "../../models/entities/User";
import { BodyType } from "../../models/enums/BodyType";
import { FuelType } from "../../models/enums/FuelType";

export interface ManufacturerState {
  manufacturers: Manufacturer[];
}

export const manufacturerInitialState: ManufacturerState = {
  manufacturers: [],
};
