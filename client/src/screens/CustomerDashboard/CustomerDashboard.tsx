import { TabContext, TabPanel } from "@mui/lab";
import TabList from "@mui/lab/TabList";
import { Box, Tab } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { getCarsAction } from "../../stores/car/actions";
import { useAppDispatch } from "../../stores/store";
import { logout } from "../../stores/user/slice";
import CustomerAppointments from "./Appointments/CustomerAppointments";
import CarsNavigator from "./Cars/CarsNavigator";
import CustomerCars from "./Cars/CustomerCars";
import CustomerFavorites from "./Favorites/CustomerFavorites";

const CustomerDashboard = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [currentRoute, setCurrentRoute] = React.useState("/dashboard/cars");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setCurrentRoute(newValue);
    navigate(newValue);
  };

  React.useEffect(() => {
    dispatch(getCarsAction());
  }, []);

  return (
    <>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={currentRoute}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              <Tab label="Cars" value="/dashboard/cars" />
              <Tab label="Appointments" value="/dashboard/appointments" />
              <Tab label="Favorites" value="/dashboard/favorites" />
            </TabList>
            <button onClick={() => dispatch(logout())}>logout</button>
          </Box>
          <TabPanel value="/dashboard/cars">
            <CarsNavigator />
          </TabPanel>
          <TabPanel value="/dashboard/appointments">
            <CustomerAppointments />
          </TabPanel>
          <TabPanel value="/dashboard/favorites">
            <CustomerFavorites />
          </TabPanel>
        </TabContext>
      </Box>
    </>
  );
};

export default CustomerDashboard;
