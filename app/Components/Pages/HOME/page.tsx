// import { BACKGROUND_INFO } from "@/app/Components/Data/Background";
// import { EDUCATION_LIST } from "@/app/Components/Data/Education";
import Image from "next/image";
import satumboLogo from "../../Img/logo/satumbo9-logo.png";
import Link from "next/link";
// import EmailForm from "../EMAIL-FORM/page";

export default function HomePage() {
  return (
    <section
      id="Home"
      className="flex flex-col sm:h-screen  min-h-[100vh] items-center justify-center  "
    >
      <div>
        <Image
          className="rounded-full w-[640px]"
          src={satumboLogo}
          width={600}
          height={600}
          alt="Satumbo9 logo"
        />
      </div>
      <div
        // className="text-[1.5em]  text-center md:text-[1.5em] md:w-[666px] md:h-[68px] md:text-center "

        className="text-[1em] md:text-[1.40em] 2xl:text-[1.70em] p-2 text-center w-[20.10em] md:w-[30.25em]"
      >
        <p>
          Satumbo9 was born in the 90s and still alive making doing amazing art
          and web projects
        </p>

        <div className="flex flex-col gap-2 md:flex-row items-center justify-center mt-5">
          <Link
            className="bg-[--Color-yellow] text-[--Text-grey] w-[200px]"
            href={"#"}
            // target="_blank"
          >
            Hire-me
          </Link>
          <Link
            className="bg-[--Color-yellow] text-[--Text-grey] w-[200px]"
            href={"#"}
            // target="_blank"
          >
            CV
          </Link>
        </div>
      </div>
    </section>
  );
}
