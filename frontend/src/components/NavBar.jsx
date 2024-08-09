import React, { useState } from "react";
import logo from "../assets/comfort.png";
import { Link } from "react-router-dom";

function NavBar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="grid grid-cols-12 h-[8vh] relative">
      <div className="col-span-6 sm:col-span-2 flex items-center justify-center py-2">
        <Link to="/">
          <img
            src={logo}
            alt="ComfortHomes"
            className="h-12 bg-slate-300 p-1 rounded-lg mr-2 cursor-pointer"
          />
        </Link>
        <Link to="/">Comfort Homes</Link>
      </div>
      <div className="col-span-6 hidden sm:block sm:col-span-7"></div>
      <div className="col-span-6 sm:col-span-3 flex justify-end items-center font-semibold relative">
        <button
          className="sm:hidden rounded-md hover:bg-sky-300 py-1 px-3"
          onClick={toggleDropdown}
        >
          {showDropdown ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
        <div
          className={`sm:hidden absolute top-full right-1 mt-1 z-10 ${
            showDropdown ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col items-end bg-white border rounded-lg shadow-md py-2">
            <button className="rounded-md hover:bg-sky-300 py-1 px-3">
              <a href="/about">About</a>
            </button>
            <button className="rounded-md hover:bg-sky-300 py-1 px-3">
              <a href="/contact">Contact</a>
            </button>
            <button className="rounded-md hover:bg-sky-300 py-1 px-3">
              <a href="/FAQ">FAQ</a>
            </button>
            <button className="rounded-md hover:bg-sky-300 py-1 px-3">
              <a href="/gallery">Gallery</a>
            </button>
          </div>
        </div>
        <div className="absolute hidden sm:flex justify-evenly items-center ">
          <button className="rounded-md hover:bg-sky-300 py-1 px-3">
            <a href="/about">About</a>
          </button>
          <button className="rounded-md hover:bg-sky-300 py-1 px-3">
            <a href="/contact">Contact</a>
          </button>
          <button className="rounded-md hover:bg-sky-300 py-1 px-3">
            <a href="/FAQ">FAQ</a>
          </button>
          <button className="rounded-md hover:bg-sky-300 py-1 px-3">
            <a href="/gallery">Gallery</a>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
