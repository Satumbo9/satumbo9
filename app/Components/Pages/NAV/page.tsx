// import Link from "next/link";
// import { Link } from "lucide-react";
import NavLinks from "../../Util/NavLinks";
import Link from "next/link";
// import {
//   HOVER_COLOR_WEBSITE,
//   COLOR_GREY_900,
//   COLOR_PURPLE,
//   COLOR_YELLOW,
//   COLOR_WHITE,
// } from "../../Const/COLORS";

// This the navigation Section

const date = new Date();

export default function Nav() {
  return (
    // Header for the nav bar
    // className={`lg:flex lg:items-center lg:justify-between md:text-[1.3em] 2xl:text-[2em]

    <header className=" hidden  xl:block px-10 py-3 text-[yellow] hover:bg-white hover:bg-opacity-10 p-10  rounded ">
      <div className="flex justify-between items-center">
        <div
          className={`flex gap-[0.40em]  justify-center h-[80px] items-center text-[2em] text-[yellow] hover:blur-sm cursor-help`}
        >
          <p className="">Satumbo9</p>
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
              <NavLinks href={"#TALK"}>
                <p>talk to me</p>
              </NavLinks>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
