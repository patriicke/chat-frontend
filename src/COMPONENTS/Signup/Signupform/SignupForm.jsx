import React, { useState, useRef } from "react";
import SignUpWith from "../../SignupWith/SignupWith";
export default function SignupForm({
  loading,
  handleChange,
  handleSubmit,
  ServerMessage,
  serverMsg,
  newUser,
  setServerMsg,
  display,
  setDisplay
}) {
  const [moveTopFname, setMoveTopFname] = useState(false);
  const [moveTopLname, setMoveTopLname] = useState(false);
  const [moveTopEmail, setMoveTopEmail] = useState(false);
  const [moveTopUsername, setMoveTopUsername] = useState(false);
  const [moveTopPassword, setMoveTopPassword] = useState(false);
  const [moveTopCpassword, setMoveTopCpassword] = useState(false);
  const FnameElement = useRef();
  const handleFnameElement = () => {
    FnameElement.current.focus();
  };
  const LnameElement = useRef();
  const handleLnameElement = () => {
    LnameElement.current.focus();
  };
  const EmailElement = useRef();
  const handleEmailElement = () => {
    EmailElement.current.focus();
  };
  const UsernameElement = useRef();
  const handleUsernameElement = () => {
    EmailElement.current.focus();
  };
  const PasswordElement = useRef();
  const handlePasswordElement = () => {
    PasswordElement.current.focus();
  };
  const ConfirmPasswordElement = useRef();
  const handleConfirmPasswordElement = () => {
    ConfirmPasswordElement.current.focus();
  };
  const first = [
    {
      name: "fname",
      type: "text",
      placeholder: "First Name",
      controller: FnameElement,
      functionHandler: handleFnameElement,
      hit: setMoveTopFname,
      current: moveTopFname
    },
    {
      name: "lname",
      type: "text",
      placeholder: "Last Name",
      controller: LnameElement,
      functionHandler: handleLnameElement,
      current: moveTopLname,
      hit: setMoveTopLname
    },
    {
      name: "email",
      type: "email",
      placeholder: "Email",
      controller: EmailElement,
      functionHandler: handleEmailElement,
      hit: setMoveTopEmail,
      current: moveTopEmail
    }
  ];
  const second = [
    {
      name: "username",
      type: "text",
      placeholder: "Username",
      controller: UsernameElement,
      functionHandler: handleUsernameElement,
      hit: setMoveTopUsername,
      current: moveTopUsername
    },
    {
      name: "password",
      type: "password",
      placeholder: "Enter Passord",
      controller: PasswordElement,
      functionHandler: handlePasswordElement,
      hit: setMoveTopPassword,
      current: moveTopPassword
    },
    {
      name: "cpassword",
      type: "password",
      placeholder: "Confirm Password",
      controller: ConfirmPasswordElement,
      functionHandler: handleConfirmPasswordElement,
      hit: setMoveTopCpassword,
      current: moveTopCpassword
    }
  ];

  return (
    <form
      className={`bg-white w-[30em] h-[45em] shadow-xl rounded-md flex py-3 px-2 flex-col gap-4 ${
        loading ? "blur-lg" : "blur-none"
      }`}
      onSubmit={handleSubmit}
    >
      <div className="w-[100%] h-[10%] text-[2em] font-bold justify-center flex">
        Signup to Chatsp
      </div>
      {first.map((data, index) => {
        return (
          <div
            className={`w-[100%] h-[10%] px-3 relative border-2 rounded-md ${
              display ? "" : "hidden"
            }`}
            key={index}
          >
            <span
              className={`absolute ${
                data.current ? "top-[-25%] text-[#5c07fc]" : "top-[25%]"
              } text-[1.2em] opacity-[0.6] bg-white px-1 ease-in duration-75`}
              onClick={() => {
                data.hit(true);
                data.functionHandler();
              }}
            >
              {data.placeholder}
            </span>
            <input
              type={data.type}
              name={data.name}
              value={data.inputValue}
              className="w-[100%] h-[100%] text-[1.3em]  outline-none"
              onChange={handleChange}
              onFocus={() => {
                data.hit(true);
              }}
              ref={data.controller}
              required
            />
          </div>
        );
      })}
      {second.map((data, index) => {
        return (
          <div
            className={`w-[100%] h-[10%] px-3 relative border-2 rounded-md ${
              display ? "hidden" : ""
            }`}
            key={index}
          >
            <span
              className={`absolute ${
                data.current ? "top-[-25%] text-[#5c07fc]" : "top-[25%]"
              } text-[1.2em] opacity-[0.6] bg-white px-1 ease-in duration-75 `}
              onClick={() => {
                data.hit(true);
                data.functionHandler();
              }}
            >
              {data.placeholder}
            </span>
            <input
              type={data.type}
              name={data.name}
              className="w-[100%] h-[100%] text-[1.3em]  outline-none"
              onChange={handleChange}
              onFocus={() => {
                data.hit(true);
              }}
              ref={data.controller}
              required
            />
          </div>
        );
      })}
      {serverMsg !== "" ? <ServerMessage /> : null}
      <div className="flex h-[10%] w-[100%] justify-evenly ">
        <button
          className={`${
            display ? "" : "bg-green-500"
          } h-[80%] w-[40%] rounded-md shadow-lg text-[1.2em] font-bold flex items-center justify-center`}
          type="button"
          onClick={() => {
            setDisplay(true);
          }}
        >
          BACK
        </button>
        <button
          type={display ? "button" : "submit"}
          className={`${
            display ? "bg-green-500" : "bg-[#5c07fc] text-white"
          } h-[80%] w-[40%] rounded-md shadow-lg text-[1.4em] font-bold`}
          onClick={() => {
            if (newUser.fname == undefined) {
              setServerMsg("Please enter first name");
            } else if (newUser.lname == undefined) {
              setServerMsg("Please enter last name");
            } else if (newUser.email == undefined) {
              setServerMsg("Please enter email");
            } else if (!newUser.email.includes("@gmail.com")) {
              setServerMsg("Invalid email");
            } else {
              setServerMsg("");
              setDisplay(false);
            }
          }}
        >
          {display ? "NEXT" : "SUBMIT"}
        </button>
      </div>
      <SignUpWith />
    </form>
  );
}
