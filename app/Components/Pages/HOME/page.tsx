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
      className="flex flex-col  h-[100vh] items-center justify-center md:justify-start "
    >
      <div>
        <Image
          className="rounded-full w-[400px] h-[400px] md:w-[600px] md:h-[600px] object-contain"
          src={satumboLogo}
          width={600}
          height={600}
          alt="Satumbo9 logo"
        />
      </div>
      <div
        // className="text-[1.5em]  text-center md:text-[1.5em] md:w-[666px] md:h-[68px] md:text-center "

        className="text-[1em] md:text-[1.40em] p-2 text-center w-[20.10em] md:w-[30.25em] flex flex-col gap-10 md:gap-4 items-center"
      >
        <p>
          Satumbo9 was born in the 90s and still alive making doing amazing art
          and web projects
        </p>

        <div className="flex flex-col gap-2 md:flex-row">
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
