import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import SignInWith from "../../SignInwith/SignInwith";
export default function LoginForm({
  loading,
  handleSubmit,
  handleChange,
  serverMsg
}) {
  const [moveTop, setMoveTop] = useState(false);
  const [moveTopEmail, setMoveTopEmail] = useState(false);
  const EmailElement = useRef();
  const handleFocusEmail = () => {
    EmailElement.current.focus();
  };
  const PasswordElement = useRef();
  const hanldleFocusPasswprd = () => {
    PasswordElement.current.focus();
  };
  
  return (
    <form
      className={`bg-white w-[30em] h-[40em] shadow-xl rounded-md flex py-5 px-2 flex-col gap-4 ${
        loading ? "blur-sm" : "blur-none"
      } `}
      onSubmit={handleSubmit}
    >
      <div className="w-[100%] h-[12%] text-[2em] font-bold justify-center flex">
        Login to Chatsp
      </div>
      <div className="w-[100%] h-[10%] px-3 relative border-2 rounded-md ">
        <span
          className={`absolute ${
            moveTop ? "top-[-25%]" : "top-[25%]"
          } text-[1.2em] opacity-[0.6] bg-white px-1 ease-in duration-75`}
          onClick={() => {
            setMoveTop(true);
            handleFocusEmail();
          }}
        >
          Email
        </span>
        <input
          type="email"
          name="email"
          className="w-[100%] h-[100%] text-[1.3em]  outline-none"
          onChange={handleChange}
          onFocus={() => {
            setMoveTop(true);
          }}
          ref={EmailElement}
          required
        />
      </div>
      <div className="w-[100%] h-[10%] px-3 relative border-2 rounded-md ">
        <span
          className={`absolute ${
            moveTopEmail ? "top-[-25%]" : "top-[25%]"
          } text-[1.2em] opacity-[0.6] bg-white px-1 ease-in duration-75`}
          onClick={() => {
            setMoveTopEmail(true);
            hanldleFocusPasswprd();
          }}
        >
          Enter Password
        </span>
        <input
          type="password"
          name="password"
          className="w-[100%] h-[100%] text-[1.3em] outline-none"
          onChange={handleChange}
          ref={PasswordElement}
          onFocus={() => {
            setMoveTopEmail(true);
          }}
          required
        />
      </div>
      {serverMsg !== "" ? <ServerMessage /> : null}
      <div className="flex h-[10%] w-[100%] justify-evenly ">
        <button
          type="submit"
          className="bg-[#5c07fc] h-[100%] w-[100%] rounded-md shadow-lg text-[1.4em] font-bold text-white"
          onClick={(event) => {
            setLoading(true);
            handleSubmit(event);
          }}
        >
          LOGIN
        </button>
      </div>
      <SignInWith />
    </form>
  );
}
