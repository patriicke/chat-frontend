import React from "react";
import DashBoardMessaging from "../DashBoardMessaging/DashBoardMessaging";
export default function DashBoardBody() {
  return (
    <div className="h-[95%] flex gap-3 flex-col">
      <div className="h-[80%] flex w-[100%]">
        <div className="w-[45%] h-[100%] flex flex-col gap-4 px-[12%] py-[10%]">
          <div className="text-[2.5em]">
            Take your team collaboration to the next level
          </div>
          <div className="text-[1.1em]">
            Save more time on productive instead wasting it on team management.
            Our all in one solution will provide a significant boost.
          </div>
          <div className="flex gap-6 items-center ">
            <div className="bg-[#5c07fc] text-white text-[1.4rem] p-2 px-4 rounded-[2em] cursor-pointer">
              Start Free Trial
            </div>
            <div className="text-[#5c07fc] underline cursor-pointer">
              Schedule a demo
            </div>
          </div>
        </div>
        <DashBoardMessaging />
      </div>
      <div className="h-[20%] flex">
        <div className="w-[45%] h-[100%] flex items-center justify-center text-[2em] px-[12%]">
          We are trusted by hundereds of startups
        </div>
        <div className="h-[100% w-[55%] flex items-center justify-center gap-10">
          <i className="fa-brands fa-twitter text-[3em]"></i>
          <i className="fa-brands fa-linkedin text-[3em]"></i>
          <i className="fa-brands fa-pinterest text-[3em]"></i>
          <i className="fa-brands fa-instagram text-[3em]"></i>
          <i className="fa-brands fa-whatsapp text-[3em]"></i>
          <i className="fa-brands fa-slack text-[3em]"></i>
          <span className="material-symbols-outlined animate-bounce font-bold text-[1.5em] cursor-pointer">
            arrow_forward_ios
          </span>
        </div>
      </div>
    </div>
  );
}
