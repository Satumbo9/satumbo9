import Link from "next/link";
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
    <header className=" hidden  lg:block bg-[yellow] px-10 py-3 text-[#5a65c4]  ">
      <div
        // className="h-[8vh]  mb-10 md:h-[8vh] md:flex md:justify-between md:text-[2em] md:pt-[30px] md:mb-10"
        className={`lg:flex lg:items-center lg:justify-between md:text-[1.3em] 2xl:text-[2em]  `}
      >
        <div className="">
          <Link
            className={`flex gap-[0.40em] hover:text-black  `}
            href={"#Home"}
          >
            <p className="">
              <code>Satumbo9</code>
            </p>
            <code>{`</>`}</code>
          </Link>
        </div>
        <div>
          <ul
            // className="xl:flex xl:gap-[10em] xl:items-center"

            className="flex gap-[10em] items-center "
          >
            <li className={`hover:text-gray-900 `}>
              <Link href={"#ABOUT"}>
                <code>about</code>
              </Link>
            </li>
            <li className={`hover:text-gray-900 `}>
              <Link className="flex flex-col text-center" href={"#WORK"}>
                <code>work</code>
                <code className="text-[16px]">2018-2024</code>
              </Link>
            </li>
            <li className={`hover:text-gray-900 `}>
              <Link href={"#TALK"}>
                <code>talk to me</code>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
