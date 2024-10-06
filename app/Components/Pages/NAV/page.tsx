import NavLinks from "../../Util/NavLinks";
const date = new Date();

export default function Nav() {
  return (
    <header
      className="   xl:block px-10 py-3 text-[yellow] 
    md:hover:bg-white md:hover:bg-opacity-10 p-10 xl:text-3xl
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
              <NavLinks href={"#TALK"}>
                <p>talk to me</p>
              </NavLinks>
            </li>
          </ul>
        </div>
      </div>

      {/* In small screens */}

      <div className="2xl:hidden">
        <ul
          className="flex flex-col items-center bg-white bg-opacity-10 p-10 text-3xl
    w-full
    rounded transition-all delay-100"
        >
          <li className="">
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
    </header>
  );
}
