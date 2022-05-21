import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import AppointmentCard from "./AppointmentCard/AppointmentCard";
import AppointmentModal from "./AppointmentModal/AppointmentModal";
import { Appointment } from "../../../models/entities/Appointment";
import { useAppSelector } from "../../../stores/store";

// export interface Appointment {
//   id: number;
// user: User;
//   car: Car;
//   date: string;
//   phoneNumber: string;
//   message: string;
// }

// const appointments = [
//   {
//     id: 0,
//     user: {
//       id: 0,
//       email: "test1@email.com",
//       isAdmin: false,
//     },
//     car: {
//       id: 0,
//       model: "Model S",
//       manufacturer: {
//         id: 0,
//         name: "Tesla",
//       },
//       body: 0,
//       mileage: 30000,
//       seats: 5,
//       weight: 3000,
//       vin: "123123123",
//       hp: 400,
//       yearOFManufacturer: 2014,
//       price: 80000,
//       fuelType: 4,
//     },
//     date: "12/23/2022 12:30",
//     phoneNumber: "123123123",
//     message: "Vr sa vroom vroom cu masina",
//   },
// ];

const CustomerAppointments = () => {
  const [modal, setModal] = React.useState(false);
  const appointments = useAppSelector((state) => state.user.appointments);
  const [currentAppointment, setCurrentAppointment] = React.useState<
    Appointment | undefined
  >(undefined);
  const searchCriteria = useAppSelector((state) => state.user.searchInput);

  if (!appointments.length) {
    return <>No data</>;
  }

  const handleAppointmentClick = (appointment: Appointment | undefined) => {
    setCurrentAppointment(appointment!);
    setModal(true);
  };

  const getIsFiltered = (element: Appointment | undefined) => {
    if (!element) {
      return false;
    }

    return (
      element.car.manufacturer.name.includes(searchCriteria) ||
      element.car.model.includes(searchCriteria) ||
      element.date.includes(searchCriteria)
    );
  };
  return (
    <>
      <Grid container spacing={4}>
        {appointments
          .filter((e) => getIsFiltered(e))
          .map((e) => (
            <AppointmentCard
              key={e.id}
              appointment={e}
              onDetailsClick={() => handleAppointmentClick(e)}
            />
          ))}
      </Grid>
      <AppointmentModal
        open={modal}
        onClose={() => setModal(false)}
        appointment={currentAppointment}
      />
    </>
  );
};

export default CustomerAppointments;
