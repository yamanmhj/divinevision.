import React, { useState } from "react";
import logo from "../Assets/logo.png";
import { navItems } from "../constants/index.jsx";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [mobileDrawerOpen, setMoobileDrawerOpen] = useState(false);
  const toggleNavBar = () => {
    setMoobileDrawerOpen(!mobileDrawerOpen);
  };
  return (
    <nav
      className="  sticky w-full flex top-0 justify-evenly items-center  z - 50  shadow-md "
      style={{ backgroundColor: "#060733", color: "white" }}
    >
      <div className=" container ">
        <ul
          className="  ml-auto hidden lg:flex justify-evenly w-full   text-xl"
          style={{ Color: "white" }}
        >
          {navItems.map((item, index) => (
            <li
              key={index}
              className=" py-2 px-2 rounded-full "
              style={{ borderColor: "#28228A" }}
            >
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex  justify-right space-x-15 items-center"></div>
      </div>

      <div className="lg:hidden md:flex flex-col justify-end ">
        <button onClick={toggleNavBar}>
          {mobileDrawerOpen ? <X /> : <Menu />}
        </button>
      </div>

      {mobileDrawerOpen && (
        <div className="fixed right-0 z-20  w-full p-122 flex flex-col justify-end items-center lg:hidden text-xl">
          <div>
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4" style={{ color: "#28228A" }}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center space-x-6">
            <a href="#" className="top-100 py-2 px-3 border rounded-md">
              Connect
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
