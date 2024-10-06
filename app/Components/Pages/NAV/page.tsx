"use client";
import { Menu } from "lucide-react";
import NavLinks from "../../Util/NavLinks";
import { useState } from "react";
import React from "react";

const date = new Date();

export default function Nav() {
  const [MenuClicked, setMenuClicked] = useState(false);
  const handleMenuCick = () => {
    setMenuClicked((prevSate) => !prevSate);
  };
  return (
    <header
      className="   2xl:block px-10 py-3 text-[yellow] 
    2xl:hover:bg-white 2xl:hover:bg-opacity-10 p-10 2xl:text-3xl
    w-full
    rounded transition delay-100 "
    >
      <div className="2xl:flex justify-between items-center hidden">
        <div
          className={`flex gap-[0.40em]  
            justify-center h-[80px] 
            items-center  text-[yellow]
            hover:blur-sm cursor-help font-bold`}
        >
          <p>Satumbo9</p>
          <p>{`</>`}</p>
        </div>

        <div
        // Div container
        >
          <ul className="flex gap-[10em] items-center ">
            <li>
              <NavLinks className={``} href={"#ABOUT"}>
                <p>about</p>
              </NavLinks>
            </li>
            <li>
              <NavLinks className="flex flex-col text-center" href={"#WORK"}>
                <p>work</p>
                <code className="text-[16px]">2015-{date.getFullYear()}</code>
              </NavLinks>
            </li>
            <li>
              <NavLinks href={"#INQUIRY"}>
                <p>talk to me</p>
              </NavLinks>
            </li>
          </ul>
        </div>
      </div>

      {/* In small screens */}

      <div className="flex justify-end 2xl:hidden" onClick={handleMenuCick}>
        {React.createElement(Menu, {
          style: {
            width: 60,
            height: 60,
          },
        })}
      </div>

      <div className="2xl:hidden flex justify-end ">
        {MenuClicked ? (
          <ul
            className="flex flex-col items-center bg-white bg-opacity-10 p-10 text-3xl
    w-full
    rounded transition-all delay-100"
          >
            <li className="">
              <NavLinks onClick={() => setMenuClicked(false)} href={"#ABOUT"}>
                <p>about</p>
              </NavLinks>
            </li>
            <li>
              <NavLinks
                onClick={() => setMenuClicked(false)}
                className="flex flex-col text-center"
                href={"#WORK"}
              >
                <p>work</p>
                <code className="text-[16px]">2015-{date.getFullYear()}</code>
              </NavLinks>
            </li>
            <li>
              <NavLinks onClick={() => setMenuClicked(false)} href={"#INQUIRY"}>
                <p>talk to me</p>
              </NavLinks>
            </li>
          </ul>
        ) : null}
      </div>
    </header>
  );
}
