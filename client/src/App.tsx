import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MainRouter from "./navigators/MainRouter";
import { CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

function App() {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterMoment}>
        <CssBaseline />
        <BrowserRouter>
          <MainRouter />
        </BrowserRouter>
      </LocalizationProvider>
    </>
  );
}

export default App;
