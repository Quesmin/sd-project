import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MainRouter from "./navigators/MainRouter";
import { CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <CssBaseline />
      <BrowserRouter>
        <MainRouter />
      </BrowserRouter>
    </>
  );
}

export default App;
