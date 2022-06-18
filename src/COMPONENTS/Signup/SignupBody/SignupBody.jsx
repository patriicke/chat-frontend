import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./../../Loading/Loading";
import api from "./../../../API/api";
import SignUpNav from "../SignupNavBar/SignupNavBar";
import SignupForm from "../Signupform/SignupForm";
import Image from "/chatting-design-concept-with-hand-holding-cellphone_7087-798.webp";
export default function SignupBody() {
  const navigate = useNavigate();
  const [display, setDisplay] = useState(true);
  const [serverMsg, setServerMsg] = useState("");
  const [newUser, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setUser((values) => ({ ...values, [name]: value }));
  }
  async function handleSubmit(event) {
    event.preventDefault();
    if (
      (await newUser.fname) == "" ||
      (await newUser.lname) == "" ||
      (await newUser.email) == "" ||
      (await newUser.username) == "" ||
      (await newUser.password) == "" ||
      (await newUser.cpassword) == ""
    ) {
      setLoading(false);
      return setServerMsg("Please fill the form provided");
    }
    if (newUser.password === newUser.cpassword) {
      try {
        const response = await api.post("/signup", newUser, {
          withCredentials: true
        });
        console.log(response.data);
        if (response.data === "email already exists") {
          setLoading(false);
          setDisplay(true);
          return setServerMsg("Please try using another email");
        }
        if (response.data === "username already exists") {
          setLoading(false);
          return setServerMsg("Please try using another username");
        }
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("refresh", response.data.refresh);
        navigate("/");
      } catch (error) {
        console.log(error.response.data);
      }
    } else {
      setLoading(false);
      return setServerMsg("Passwords don't match!");
    }
  }

  function ServerMessage() {
    return (
      <div className="w-[100%] h-[5%] px-3">
        <p className="text-[red] text-[1.2em]">{serverMsg}</p>
      </div>
    );
  }
  return (
    <div className="w-[100%] h-[100vh] flex flex-col gap-1 ">
      <SignUpNav />
      {loading && (
        <div className="absolute top-[50%] left-[45%] z-[1]">{<Loading />}</div>
      )}
      <div className="w-[100%] h-[90%] flex items-center justify-evenly">
        <img
          src={Image}
          className={`
        ${loading ? "blur-lg" : "blur-none"}
        `}
        />
        <SignupForm
          ServerMessage={ServerMessage}
          loading={loading}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          serverMsg={serverMsg}
          newUser={newUser}
          setServerMsg={setServerMsg}
          display={display}
          setDisplay={setDisplay}
        />
      </div>
    </div>
  );
}
