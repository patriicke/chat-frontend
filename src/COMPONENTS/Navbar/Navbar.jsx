import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Search from "./Search/Search";
import Image from "/image.jpg";
export default function Navbar({ userInfo, search, drop, setSearch, setDrop }) {
  const navigate = useNavigate();
  const searchElement = useRef();
  const focusSearch = () => {
    searchElement.current.focus();
  };
  return (
    <div className="h-[7%] flex items-center text-[2em]  justify-between text-[#354259] shadow-lg px-5">
      <div
        className="font-bold lg:text-[1em] md:text-[0.75em] sm:text-[0.5em] text-[0.5em] "
        onClick={() => {
          setDrop(false);
          setSearch(false);
        }}
      >
        Chatsp
      </div>
      <div
        className="gap-5 text-[0.8em] sm:hidden md:hidden lg:flex font-bold hidden"
        onClick={() => {
          setDrop(false);
          setSearch(false);
        }}
      >
        <div
          className="text-[#2aa1c9] cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </div>
        <div className="text-[#2aa1c9] cursor-pointer">Feature</div>
        <div className="text-[#2aa1c9] cursor-pointer">Stories</div>
        <div className="text-[#2aa1c9] cursor-pointer">Feeds</div>
      </div>
      <div className="flex flex-row w-[45%] justify-evenly" onClick={() => {}}>
        <div
          className="flex items-center justify-center border relative"
          onClick={() => {
            setSearch(true);
            focusSearch();
            setDrop(false);
          }}
        >
          <input
            type="text"
            placeholder="Search..."
            className="text-[1.15rem] outline-none h-full pl-3 border-r-2 w-[90%]"
            ref={searchElement}
          />
          <span className="material-symbols-outlined text-[1.1em] w-[10%] flex justify-center items-center h-full">
            search
          </span>
          {search && <Search />}
        </div>
        <i
          className="fa-regular fa-bell"
          onClick={() => {
            setDrop(false);
            setSearch(false);
          }}
        ></i>
        <i
          className="fa-regular fa-comment-dots"
          onClick={() => {
            setDrop(false);
            setSearch(false);
          }}
        ></i>
        <span
          className="material-symbols-outlined text-[1.2em]"
          onClick={() => {
            setDrop(false);
            setSearch(false);
          }}
        >
          favorite
        </span>
        <span
          className="material-symbols-outlined text-[1.2em]"
          onClick={() => {
            setDrop(false);
            setSearch(false);
          }}
        >
          contrast
        </span>
        <img
          src={Image}
          alt="Profile Image"
          className="w-[1.2em] h-[1.2em] rounded-full"
          onClick={() => {
            setDrop(true);
            setSearch(false);
          }}
        />
        {drop && (
          <div className="bg-slate-50 shadow-2xl h-[10em] w-[10em] absolute right-[1em] top-[7%] flex flex-col ">
            <div className="text-[1rem]">{`${userInfo.fname} ${userInfo.lname}`}</div>
          </div>
        )}
      </div>
    </div>
  );
}
