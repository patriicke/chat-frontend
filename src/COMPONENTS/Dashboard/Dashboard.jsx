import React from "react";
import DashBoardBody from "./DashboardBody/DashBoardBody";
import DashBoardNavBar from "./DashBoardNavBar/DashBoardNavBar";
export default function Dashboard() {
  return (
    <div className="w-[100%] h-[100vh] flex flex-col gap-1">
      <DashBoardNavBar />
      <DashBoardBody />
    </div>
  );
}
