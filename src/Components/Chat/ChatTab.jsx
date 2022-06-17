import { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";
const socket = io.connect("http://localhost:5000");
// import api from "./../../API/api";
export default function ChatTab() {
  const [message, setMessage] = useState("");
  const [received, setReceived] = useState("");
  const [room, setRoom] = useState("");
  const roomElement = useRef();
  const joinRoom = () => {
    if (room != "") {
      socket.emit("join_room", room);
    } else {
      roomElement.current.focus();
    }
  };
  useEffect(() => {
    socket.on("receive_message", (data) => {
      setReceived(data);
    });
  }, [socket]);
  const sendMessage = () => {
    socket.emit("send_message", { message, room });
  };
  return (
    <div className="h-[100%] w-[40%] bg-white shadow-lg">
      <input
        type="number"
        placeholder="Room"
        className="border text-[1.4em]"
        ref={roomElement}
        onChange={(e) => {
          return setRoom(e.target.value);
        }}
      />
      <button className="border bg-green-500 p-2" onClick={joinRoom}>
        Set Room
      </button>
      <input
        type="text"
        placeholder="Send a message"
        className="border text-[1.4em]"
        onChange={(e) => {
          return setMessage(e.target.value);
        }}
      />
      <button className="border bg-green-500 p-2" onClick={sendMessage}>
        Send Message
      </button>
      {received != "" ? <div>{received}</div> : null}
    </div>
  );
}
