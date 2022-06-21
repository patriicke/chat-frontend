import { useState } from "react";
import ChatNav from "../Navbar/Navbar";
import ChatBody from "./ChatBody/ChatBody";

function ChatWindow() {
  const [userInfo, setUserInfo] = useState({});
  const getUserData = (data) => {
    setUserInfo(data);
  };
  const [search, setSearch] = useState(false);
  const [drop, setDrop] = useState(false);
  return (
    <div className="w-[100%] h-[100vh] flex flex-col gap-1">
      <ChatNav
        userInfo={userInfo}
        drop={drop}
        setDrop={setDrop}
        search={search}
        setSearch={setSearch}
      />
      <ChatBody
        getUserData={getUserData}
        drop={drop}
        setDrop={setDrop}
        search={search}
        setSearch={setSearch}
      />
    </div>
  );
}

export default ChatWindow;
