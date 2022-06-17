import { useState } from "react";
import ChatNav from "./ChatNav";
function ChatWindow() {
  return (
    <div className="w-[100%] h-[100vh] flex flex-col gap-1">
      <ChatNav />
      <div className="h-[95%] pl-5">
        <div></div>
      </div>
    </div>
  );
}

export default ChatWindow;
