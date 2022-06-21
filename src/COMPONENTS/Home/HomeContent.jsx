import { useState } from "react";
import ChatNav from "../Navbar/Navbar";
import ChatBody from "./ChatBody/ChatBody";

function ChatWindow() {
  const [userInfo, setUserInfo] = useState({});
  const getUserData = (data) => {
    setUserInfo(data);
  };
  return (
    <div className="w-[100%] h-[100vh] flex flex-col gap-1">
      <ChatNav userInfo={userInfo} />
      <ChatBody getUserData={getUserData} />
    </div>
  );
}

export default ChatWindow;
