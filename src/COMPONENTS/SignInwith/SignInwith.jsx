import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Google from "/co-oop/google.png";
import Apple from "/co-oop/apple.png";

export default function SignInWith() {
  const navigate = useNavigate();
  return (
    <div className="h-[42%] ">
      <div className="flex justify-between py-3 text-[1.2em] ">
        <Link to="/signup" className="text-[#5c07fc]">
          Don't have account?
        </Link>
        <Link to="/reset-password" className="text-[red]">
          Forgot password?
        </Link>
      </div>
      <div className="flex flex-col h-[50%] gap-2 ">
        <div
          className="text-center p-2 text-[1.2em] h-[50%] flex items-center justify-center gap-3 border cursor-pointer w-[100%] "
          onClick={() => {
            navigate("/signin-with-google");
          }}
        >
          <img src={Google} className="w-[11%] h-[100%]" />
          <div className="text-[1.2em]">Signin with Google</div>
        </div>
        <div
          className="text-center p-2 text-[1.2em] h-[50%] flex items-center justify-center gap-4 border cursor-pointer"
          onClick={() => {
            navigate("/signin-with-apple");
          }}
        >
          <img src={Apple} className="w-[11%] h-[100%]  " />
          <div className="text-[1.2em]">Signin with Apple</div>
        </div>
      </div>
    </div>
  );
}
