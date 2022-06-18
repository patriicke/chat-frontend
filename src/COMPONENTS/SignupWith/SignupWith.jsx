import React from "react";
import { useNavigate, Link } from "react-router-dom";
import Google from "/co-oop/google.png";
import Apple from "/co-oop/apple.png";

export default function SignUpWith() {
  const navigate = useNavigate();
  return (
    <div className="h-[40%] flex items-center  w-[100%] flex-col">
      <div className="flex py-3 text-[1.2em] ">
        <Link to="/login" className="text-[#5c07fc]">
          Already have account? <span className="text-[red]">Login</span>
        </Link>
      </div>
      <div className="flex flex-col h-[50%] gap-2 w-[100%]">
        <div
          className="text-center p-2 text-[1.2em] h-[50%] flex items-center justify-center gap-3 border cursor-pointer w-[100%] "
          onClick={() => {
            navigate("/signin-with-google");
          }}
        >
          <img src={Google} className="w-[13%] h-[100%]" />
          <div className="text-[1.2em]">Signup with Google</div>
        </div>
        <div
          className="text-center p-2 text-[1.2em] h-[50%] flex items-center justify-center gap-4 border cursor-pointer"
          onClick={() => {
            navigate("/signin-with-apple");
          }}
        >
          <img src={Apple} className="w-[13%] h-[100%]  " />
          <div className="text-[1.2em]">Signup with Apple</div>
        </div>
      </div>
    </div>
  );
}
