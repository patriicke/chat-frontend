export default function ChatNav() {
  return (
    <div className="h-[7%] flex items-center text-[2em]  justify-between text-[#354259] shadow-lg px-5">
      <div className="font-bold lg:text-[1em] md:text-[0.75em] sm:text-[0.5em] text-[0.5em] ">
        Chatsp
      </div>
      <div className="gap-5 text-[0.8em] sm:hidden md:hidden lg:flex font-bold hidden">
        <div>Home</div>
        <div>Feature</div>
        <div>Trendings</div>
        <div>Pricing</div>
      </div>
      <div className="flex flex-row w-[45%] justify-evenly">
        <div className="flex items-center justify-center border">
          <input
            type="text"
            placeholder="Search..."
            className="text-[1.15rem] outline-none h-full pl-3"
          />
          <span className="material-symbols-outlined text-[1.1em]">search</span>
        </div>
        <i class="fa-regular fa-bell"></i>
        <i class="fa-regular fa-comment-dots"></i>
        <span className="material-symbols-outlined text-[1.2em]">favorite</span>
        <span className="material-symbols-outlined text-[1.2em]">contrast</span>
        <span className="material-symbols-outlined text-[1.2em]">
          account_circle
        </span>
      </div>
    </div>
  );
}
