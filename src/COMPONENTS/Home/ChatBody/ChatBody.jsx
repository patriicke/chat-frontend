import { useState } from "react";
import Users from "./Users/Users";
import ChatTab from "./Chat/ChatTab";
import UserDescription from "./Descriptions/UserDescription";
export default function ChatBody({ getUserData }) {
  const getData = (data) => {
    getUserData(data);
  };
  return (
    <div className="h-[95%] flex gap-2">
      <Users />
      <ChatTab getData={getData} />
      <UserDescription />
    </div>
  );
}
