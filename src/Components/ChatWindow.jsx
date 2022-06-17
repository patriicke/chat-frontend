import { useState } from "react";

function ChatWindow() {
  return (
    <div className="w-[100%] h-[100vh] flex items-center justify-center">
      <div className="w-[45em] h-[50em] bg-green-300 flex flex-col gap-1">
        <div className="bg-red-200 h-[10%] flex items-center justify-center text-[2em]">
          Chat Application
        </div>
        <div className="bg-red-200 h-[80%]"></div>
        <div className="bg-red-200 h-[10%]"></div>
      </div>
    </div>
  );
}

export default ChatWindow;
