import Image from "/image.jpg";
export default function Navbar() {
  return (
    <div className="h-[7%] flex items-center text-[2em]  justify-between text-[#354259] shadow-lg px-5">
      <div className="font-bold lg:text-[1em] md:text-[0.75em] sm:text-[0.5em] text-[0.5em] ">
        Chatsp
      </div>
      <div className="gap-5 text-[0.8em] sm:hidden md:hidden lg:flex font-bold hidden">
        <div className="text-[#2aa1c9]">Home</div>
        <div className="text-[#2aa1c9]">Feature</div>
        <div className="text-[#2aa1c9]">Stories</div>
        <div className="text-[#2aa1c9]">Feeds</div>
      </div>
      <div className="flex flex-row w-[45%] justify-evenly">
        <div className="flex items-center justify-center border">
          <input
            type="text"
            placeholder="Search..."
            className="text-[1.15rem] outline-none h-full pl-3 border-r-2 w-[90%]"
          />
          <span className="material-symbols-outlined text-[1.1em] w-[10%] flex justify-center items-center h-full">
            search
          </span>
        </div>
        <i className="fa-regular fa-bell"></i>
        <i className="fa-regular fa-comment-dots"></i>
        <span className="material-symbols-outlined text-[1.2em]">favorite</span>
        <span className="material-symbols-outlined text-[1.2em]">contrast</span>
          <img src={Image} alt="Profile Image" className="w-[1.2em] h-[1.2em] rounded-full" />
      </div>
    </div>
  );
}
