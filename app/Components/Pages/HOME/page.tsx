"use client";

// import { BACKGROUND_INFO } from "@/app/Components/Data/Background";
// import { EDUCATION_LIST } from "@/app/Components/Data/Education";
import Image from "next/image";
import satumboLogo from "../../Img/logo/satumbo9-logo.png";
// import { ButtonPage } from "../../Util/Button";
// import { Download, Briefcase, Pointer } from "lucide-react";
import React from "react";
// import { HOME_ICON_SIZE } from "../../Util/IconsStyle";
// import EmailForm from "../EMAIL-FORM/page";

export default function HomePage() {
  return (
    <section
      id="Home"
      className="flex flex-col h-screen md:h-screen  items-center justify-center md:justify-start  "
    >
      <div className="">
        <Image
          className="rounded-full w-[620px] hidden md:block"
          src={satumboLogo}
          width={600}
          height={600}
          alt="Satumbo9 logo"
        />

        <Image
          className="rounded-full w-[520px] md:hidden"
          src={satumboLogo}
          width={600}
          height={600}
          alt="Satumbo9 logo"
        />
      </div>
      <div
        // className="text-[1.5em]  text-center md:text-[1.5em] md:w-[666px] md:h-[68px] md:text-center "

        className={`text-xl w-4/4 md:text-2xl  px-4 text-center  md:w-[30.25em] mb-10 text-wrap `}
      >
        <p>
          Edimarf Satumbo was born in the 90s and still alive making amazing art
          and web projects
        </p>
      </div>
    </section>
  );
}
