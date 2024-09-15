import Link from "next/link";

// This the navigation Section

export default function Nav() {
  return (
    // Header for the nav bar
    <header>
      <div
        // className="h-[8vh]  mb-10 md:h-[8vh] md:flex md:justify-between md:text-[2em] md:pt-[30px] md:mb-10"
        className="hidden lg:flex lg:items-center lg:justify-between md:text-[1.3em] 2xl:text-[2em]  lg:font-bold  "
      >
        <div className="md:p-5">
          <Link
            className="flex gap-[1em] hover:text-[--page-links] "
            href={"#Home"}
          >
            <p>Satumbo9</p>
            <code>{`</>`}</code>
          </Link>
        </div>
        <div>
          <ul
            // className="xl:flex xl:gap-[10em] xl:items-center"

            className="flex gap-[10em] items-center"
          >
            <li className="hover:text-[--page-links]">
              <Link href={"#ABOUT"}>about</Link>
            </li>
            <li className="hover:text-[--page-links]">
              <Link className="flex flex-col text-center" href={"#WORK"}>
                <p>work</p>
                <p className="text-[16px]">2018-2024</p>
              </Link>
            </li>
            <li className="hover:text-[--page-links]">
              <Link href={"#TALK"}>talk-to-me</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
