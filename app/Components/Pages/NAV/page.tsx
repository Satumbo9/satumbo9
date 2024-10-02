import Link from "next/link";
import NavLinks from "../../Util/NavLinks";
// import {
//   HOVER_COLOR_WEBSITE,
//   COLOR_GREY_900,
//   COLOR_PURPLE,
//   COLOR_YELLOW,
//   COLOR_WHITE,
// } from "../../Const/COLORS";

// This the navigation Section

export default function Nav() {
  return (
    // Header for the nav bar
    // className={`lg:flex lg:items-center lg:justify-between md:text-[1.3em] 2xl:text-[2em]

    <header className=" hidden  xl:block px-10 py-3 text-[yellow]  ">
      <div className="flex justify-between items-center">
        <NavLinks className={`flex gap-[0.40em] `} href={"#Home"}>
          <p>Satumbo9</p>
          <p>{`</>`}</p>
        </NavLinks>

        <div
        // Div container
        >
          <ul className="flex gap-[10em] items-center ">
            <li>
              <NavLinks href={"#ABOUT"}>
                <p>about</p>
              </NavLinks>
            </li>
            <li>
              <NavLinks className="flex flex-col text-center" href={"#WORK"}>
                <p>work</p>
                <code className="text-[16px]">2018-2024</code>
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
