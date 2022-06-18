import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../COMPONENTS/Loading/Loading";
import api from "./../../API/api";
export default function SignUpPage() {
  const navigate = useNavigate();
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
        const response = await axios.post("/signup", newUser, {
          withCredentials: true
        });
        if (response.data === "email already exists") {
          setLoading(false);
          return setServerMsg(
            "Email Already exists. Please use another email or Login"
          );
        }
        if (response.data === "username already exists") {
          setLoading(false);
          return setServerMsg(
            "Usename already exists. Please user another username"
          );
        }
        localStorage.setItem("token", response.data.token);
        navigate("/");
      } catch (error) {
        console.log(error.response.data);
      }
    } else {
      setLoading(false);
      return setServerMsg(
        "Passwords don't match. Try using matching passwords"
      );
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
    <div className="bg-white w-[100%] h-[100vh] flex justify-center items-center relative">
      <div
        className={`${
          loading ? "absolute" : "hidden"
        } absolute left-[50%] z-[1]`}
      >
        <Loading />
      </div>
      <form
        className={`bg-white w-[30em] h-[45em] shadow-xl rounded-md flex py-3 px-2 flex-col gap-4 ${
          loading ? "blur-sm" : "blur-none"
        }`}
        onSubmit={handleSubmit}
      >
        <div className="w-[100%] h-[10%] text-[2em] font-bold justify-center flex">
          Signup
        </div>
        <div className="w-[100%] h-[10%] px-3">
          <input
            type="text"
            name="fname"
            placeholder="First Name"
            className="w-[100%] h-[70%] text-[1.3em]  focus:border-b-2 focus:border-blue-300 outline-none"
            onChange={handleChange}
            required
          />
        </div>
        <div className="w-[100%] h-[10%] px-3">
          <input
            type="text"
            name="lname"
            placeholder="Last Name"
            className="w-[100%] h-[70%] text-[1.3em]  focus:border-b-2 focus:border-blue-300 outline-none"
            onChange={handleChange}
            required
          />
        </div>
        <div className="w-[100%] h-[10%] px-3">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-[100%] h-[70%] text-[1.3em]  focus:border-b-2 focus:border-blue-300 outline-none"
            onChange={handleChange}
            required
          />
        </div>
        <div className="w-[100%] h-[10%] px-3">
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="w-[100%] h-[70%] text-[1.3em]  focus:border-b-2 focus:border-blue-300 outline-none"
            onChange={handleChange}
            required
          />
        </div>
        <div className="w-[100%] h-[10%] px-3">
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            className="w-[100%] h-[70%] text-[1.3em]  focus:border-b-2 focus:border-blue-300 outline-none"
            onChange={handleChange}
            required
          />
        </div>
        <div className="w-[100%] h-[10%] px-3">
          <input
            type="password"
            name="cpassword"
            placeholder="Confirm Password"
            className="w-[100%] h-[70%] text-[1.3em]  focus:border-b-2 focus:border-blue-300 outline-none"
            onChange={handleChange}
            required
          />
        </div>
        {serverMsg !== "" ? <ServerMessage /> : null}
        <div className="flex h-[10%] w-[100%] justify-evenly ">
          <Link
            to="/login"
            className="bg-blue-400 h-[80%] w-[40%] rounded-md shadow-lg text-[1.2em] font-bold flex items-center justify-center"
          >
            LOGIN
          </Link>
          <button
            type="submit"
            className="bg-green-500 h-[80%] w-[40%] rounded-md shadow-lg text-[1.4em] font-bold"
            onClick={() => {
              setLoading(true);
              handleSubmit(event);
            }}
          >
            SIGNUP
          </button>
        </div>
      </form>
    </div>
  );
}
