import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import Image from "/image.jpg";
const socket = io.connect("http://localhost:2030");
export default function ChatTab() {
  const [message, setMessage] = useState("");
  const [received, setReceived] = useState([]);
  const [typing, setTyping] = useState(false);
  const room = 12;
  useEffect(() => {
    socket.emit("join_room", room);
  }, []);
  const sendMessage = () => {
    socket.emit("send_message", { message, room, sender: "sender" });
    setReceived((list) => [...list, message]);
  };
  socket.off("receive_message").on("receive_message", (data) => {
    setReceived((list) => [...list, data.message]);
  });
  return (
    <div className="h-[100%] w-[40%] bg-white shadow-lg">
      <div
        className={`${
          typing ? "h-[88%]" : "h-[90%]"
        } shadow-lg flex p-3  gap-2 flex-col`}
      >
        {received.map((data, index) => (
          <div key={index} className="text-[1.3em] flex items-center px-2 ">
            <div
              className={`max-w-[50%] break-words py-1 px-3 bg-[#f7f4f8] rounded-r-[1em] rounded-bl-[1em] min-h-[2em]`}
            >
              {data}
            </div>
          </div>
        ))}
      </div>
      <div
        className={`w-[100%] ${
          typing ? "h-[9%]" : "h-[10%]"
        } flex items-center`}
      >
        <div className="h-[90%] rounded-[2.5em] flex flex-row items-center  justify-center w-[100%]  ">
          <div className="w-[10%] rounded-full h-[80%] flex justify-center items-center">
            <img
              src={Image}
              alt="User Image"
              className="w-[4rem] h-[4rem] rounded-full "
            />
          </div>
          <div className="flex w-[90%] h-[80%] border rounded-[2em] px-4 ">
            <input
              type="text"
              placeholder="Send a message"
              className="text-[1.2em] w-[75%] h-[100%] outline-none rounded-2xl"
              onChange={(e) => setMessage(e.target.value)}
            />
            <div className="h-[100%] w-[25%] flex items-center justify-evenly">
              <i className="fa-solid fa-microphone text-[1.8em]"></i>
              <i className="fa-solid fa-paperclip text-[1.8em]"></i>
              <i
                className="fa-solid fa-paper-plane text-[1.8em] text-[#5c07fc] cursor-pointer"
                onClick={sendMessage}
              >
                send
              </i>
            </div>
          </div>
        </div>
      </div>
      {typing && (
        <div className="h-[3%] px-5 text-slate-500 ">{"Patrick NDAYAMBAJE is "} typin...</div>
      )}
    </div>
  );
}
