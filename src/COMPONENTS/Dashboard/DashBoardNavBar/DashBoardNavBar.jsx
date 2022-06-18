import React from "react";
import { useNavigate } from "react-router-dom";
export default function DashBoardNavBar() {
  const navigate = useNavigate();
  return (
    <div className="h-[7%] flex items-center text-[2em]  justify-around text-[#354259] shadow-lg">
      <div className="lg:text-[1em] md:text-[0.75em] sm:text-[0.5em] text-[0.5em] font-bold">
        Chatsp
      </div>
      <div className="gap-5 text-[0.8em] sm:hidden md:hidden lg:flex  hidden">
        <div>Features</div>
        <div>Prices</div>
        <div>About</div>
        <div>Careers</div>
        <div>Blog</div>
      </div>
      <div
        className="bg-[#5c07fc] text-white text-[1.4rem] p-2 px-4 rounded-[2em] cursor-pointer"
        onClick={() => {
          navigate("/signup");
        }}
      >
        Get Started
      </div>
    </div>
  );
}
