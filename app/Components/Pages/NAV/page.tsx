import Link from "next/link";

// This the navigation Section

export default function Nav() {
  return (
    // Header for the nav bar
    <header className="font-bold">
      <div className="h-[8vh] flex justify-between text-[2em] pt-[30px] mb-10">
        <div>
          <Link
            className="flex gap-[1em] hover:text-[--page-links]"
            href={"#Home"}
          >
            <p>Satumbo9</p>
            <code>{`</>`}</code>
          </Link>
        </div>
        <div>
          <ul className="flex gap-[10em]">
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
