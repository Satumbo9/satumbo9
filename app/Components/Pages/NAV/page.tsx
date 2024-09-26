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
    <header className=" hidden  lg:block bg-[yellow] px-10 py-3 text-[#5a65c4]">
      <div
        // className="h-[8vh]  mb-10 md:h-[8vh] md:flex md:justify-between md:text-[2em] md:pt-[30px] md:mb-10"
        className={`lg:flex lg:items-center lg:justify-between md:text-[1.3em] 2xl:text-[2em]  `}
      >
        <div className="">
          <Link
            className={`flex gap-[0.40em] hover:text-black font-bold `}
            href={"#Home"}
          >
            <p className="">Satumbo9</p>
            <code>{`</>`}</code>
          </Link>
        </div>
        <div>
          <ul
            // className="xl:flex xl:gap-[10em] xl:items-center"

            className="flex gap-[10em] items-center "
          >
            <li className={`hover:text-gray-900 font-bold`}>
              <Link href={"#ABOUT"}>about</Link>
            </li>
            <li className={`hover:text-gray-900 font-bold`}>
              <Link className="flex flex-col text-center" href={"#WORK"}>
                <p>work</p>
                <p className="text-[16px]">2018-2024</p>
              </Link>
            </li>
            <li className={`hover:text-gray-900 font-bold`}>
              <Link href={"#TALK"}>talk to me</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
