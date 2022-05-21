import { Appointment } from "../../models/entities/Appointment";
import { Car } from "../../models/entities/Car";
import { User } from "../../models/entities/User";
import { BodyType } from "../../models/enums/BodyType";
import { FuelType } from "../../models/enums/FuelType";

export interface AppointmentState {
  appointments: Appointment[];
  currentAppointment: Appointment;
}

export const appointmentEntityInitialState: Appointment = {
  id: 0,
  user: {
    id: 0,
    email: "",
    isAdmin: false,
  },
  car: {
    id: 0,
    model: "",
    manufacturer: {
      id: 0,
      name: "",
    },
    body: BodyType.Sedan,
    mileage: 0,
    seats: 0,
    weight: 0,
    vin: "",
    hp: 0,
    yearOfManufacture: 0,
    price: 0,
    fuelType: FuelType.Electric,
  },
  date: "",
  phoneNumber: "",
  message: "",
};

export const appointmentInitialState: AppointmentState = {
  appointments: [],
  currentAppointment: appointmentEntityInitialState,
};
