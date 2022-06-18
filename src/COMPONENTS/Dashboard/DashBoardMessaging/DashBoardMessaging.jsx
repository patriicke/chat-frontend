import React from "react";
import Image1 from "/think.jpg";
import Image2 from "/team-success-img.jpg";
export default function DashBoardMessaging() {
  return (
    <div className="h-[100% w-[55%] flex relative py-[5%] flex-col">
      <div className="bg-[#fdfdfd] absolute h-[18em] w-[18em] top-[28%] left-[22%] flex flex-col p-2 gap-2 rounded-lg shadow-2xl    ">
        <div className="text-[1.3em] font-bold">Chat messages</div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1">
            <div className="w-[3em] h-[3em] bg-[#6fb4ff] rounded-full"></div>
            <div className="text-[0.8rem] flex flex-col bg-[#e1f1ff] rounded-[2em] px-3 py-1">
              <div className="font-bold">Shephard</div>
              <div className="text-[0.75rem]">Please send me latest pics</div>
            </div>
          </div>
          <div className="flex items-center gap-1 justify-end">
            <div className="text-[0.8rem] flex flex-col bg-[#f5effe] rounded-[2em] px-3 py-1">
              <div className="font-bold text-right">Hyde</div>
              <div className="text-[0.75rem]">Sure one second</div>
            </div>
            <div className="w-[3em] h-[3em] bg-[#af60f0] rounded-full"></div>
          </div>
          <div className="flex items-center gap-1 justify-end">
            <div className="text-[0.8rem] flex flex-col bg-[#f5effe] rounded-[2em] px-3 py-1">
              <div className="font-bold text-right">Hyde</div>
              <div className="text-[0.75rem]">
                <i className="fa-solid fa-image"></i>shared an image
              </div>
            </div>
            <div className="w-[3em] h-[3em] bg-[#af60f0] rounded-full"></div>
          </div>
          <div className="flex items-center gap-1 justify-end">
            <div className="text-[0.8rem] flex flex-col bg-[#f5effe] rounded-[2em] px-3 py-1">
              <div className="font-bold text-right">Hyde</div>
              <div className="text-[0.75rem]">Hope it helps</div>
            </div>
            <div className="w-[3em] h-[3em] bg-[#af60f0] rounded-full"></div>
          </div>
        </div>
      </div>
      <div className="h-[100%] w-[70%] flex flex-col p-2">
        <div className="h-[50%] p-2">
          <div className="h-full w-[35%] bg-[#6fb4ff] rounded-full ">
            <img src={Image1} />
          </div>
        </div>
        <div className="h-[50%] p-2 flex justify-end">
          <div className="h-full w-[35%] bg-[#af60f0] rounded-full">
            <img src={Image2} />
          </div>
        </div>
      </div>
    </div>
  );
}
