import React from "react";
import HomePage from "../HOME/HomePage";
import DashBoard from "../DASHBOARD/DashBoard";
export default function HomeBoard() {
  if (
    localStorage.getItem("token") == null ||
    localStorage.getItem("token") == undefined
  )
    return <DashBoard />;
  return <HomePage />;
}
