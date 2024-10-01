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
      className="flex flex-col h-[60vh] md:h-screen  items-center  "
    >
      <div>
        <Image
          className="rounded-full w-[620px]"
          src={satumboLogo}
          width={600}
          height={600}
          alt="Satumbo9 logo"
        />
      </div>
      <div
        // className="text-[1.5em]  text-center md:text-[1.5em] md:w-[666px] md:h-[68px] md:text-center "

        className={`text-[1.25em] md:text-[1.40em] 2xl:text-[1.70em]  px-4 text-center w-[16.10em] md:w-[30.25em] font-bold mb-10 text-wrap`}
      >
        <code>
          Edimarf Satumbo was born in the 90s and still alive making amazing art
          and web projects
        </code>
      </div>
    </section>
  );
}
