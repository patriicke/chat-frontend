import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";
import Image from "/image.jpg";
import api from "./../../../../API/api";
const socket = io.connect("http://localhost:2030");
export default function ChatTab({ getData }) {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [received, setReceived] = useState([]);
  const [typing, setTyping] = useState(false);
  const [userData, setUserData] = useState({});
  const room = 12;
  const clearMessage = () => {
    setMessage("");
    return "";
  };
  useEffect(() => {
    socket.emit("join_room", room);
  }, []);
  const sendMessage = (e) => {
    e.preventDefault();
    if (message == "") {
      return false;
    }
    const time = `${new Date().getHours()}: ${new Date().getMinutes()}`;
    socket.emit("send_message", {
      message,
      room,
      time,
      user_id: userData.id,
      username: userData.username
    });
    setReceived((list) => [
      ...list,
      { message, time, user_id: userData.id, username: userData.username }
    ]);
    clearMessage();
  };
  socket.off("receive_message").on("receive_message", (data) => {
    setReceived((list) => [
      ...list,
      {
        message: data.message,
        time: data.time,
        user_id: data.user_id,
        username: data.username
      }
    ]);
  });
  useEffect(() => {
    async function handleHome() {
      const response = await api.get("/home", {
        headers: {
          Authorization: `
           ${localStorage.getItem("refresh")} ${localStorage.getItem("token")} 
          `
        }
      });
      if (response.data == "signin") {
        localStorage.removeItem("token");
        localStorage.removeItem("refresh");
        return navigate("/login");
      }
      getData(response.data.userData);
      setUserData(response.data.userData);
      localStorage.setItem("refresh", response.data.refresh);
      localStorage.setItem("token", response.data.token);
    }
    handleHome();
  }, []);
  return (
    <div className="h-[100%] w-[40%] bg-white shadow-lg ">
      <div
        className={`${
          typing ? "h-[88%]" : "h-[90%]"
        } shadow-lg flex p-3  gap-2 flex-col overflow-auto`}
      >
        {received.map((data, index) => (
          <div
            key={index}
            className={`flex 
                  ${
                    userData.username === data.username
                      ? "justify-end"
                      : "justify-start"
                  }`}
          >
            <div
              className={`text-[1rem]  items-center px-2 relative max-w-[50%] break-words rounded-l-[1em] rounded-br-[1em] 
              `}
            >
              <div className="flex gap-[0.5em] items-end">
                <div className="text-[1rem]">
                  {userData.username === data.username ? "You" : data.username}
                </div>
                <div className="text-[0.9rem]">{data.time}</div>
              </div>
              <div
                className={`${
                  userData.username === data.username
                    ? "bg-[#f1eff6]"
                    : "bg-[#8d77c3]"
                } text-[1.2rem] rounded-r-[1em] rounded-bl-[1em] px-2 py-2`}
              >
                {data.message}
              </div>
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
          <form
            className="flex w-[90%] h-[80%] border rounded-[2em] px-4 "
            onSubmit={sendMessage}
          >
            <input
              type="text"
              value={message}
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
              ></i>
            </div>
          </form>
        </div>
      </div>
      {typing && (
        <div className="h-[3%] px-5 text-slate-500 ">
          {"Patrick NDAYAMBAJE is "} typin...
        </div>
      )}
    </div>
  );
}
