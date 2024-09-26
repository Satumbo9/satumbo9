import satumbo9Logo from "../../Img/logo/satumbo9-logo.png";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Youtube, Linkedin } from "lucide-react";
import React from "react";
import { FOOTER_ICON_SIZE } from "../../Util/IconsStyle";
// import { COLOR_GRAY } from "../../Const/COLORS";
export default function Footer() {
  return (
    <section
      className={`h-fit md:h-[25vh]    flex justify-center items-center bg-[yellow] text-[#5a65c4] py-4`}
    >
      <div
        className="flex flex-col justify-center md:flex-row 
      md:justify-between w-full md:w-[1400px] items-center md:items-start "
      >
        <Link href="#" aria-label="logo-top-up">
          <Image
            className="w-[100px] md:w-[150px]  2xl:w-[170px]  "
            src={satumbo9Logo}
            height={200}
            width={200}
            alt="satumbo9 logo"
          />
        </Link>
        <p className="hidden font-bold">&copy; by satumbo9</p>
        <div className=" md:flex md:flex-col p-4 text-center items-center justify-center">
          <code className="font-bold text-[1.4em] 2xl:text-[1.20em]">
            INFORMATION
          </code>
          <div className="flex flex-col text-center w-[200px] 2xl:text-[1.20em]">
            <Link href="#"> <code>LinkedIn </code> </Link>
            <Link href="#"> <code>Pexels</code></Link>
            <Link href="#"> <code>VideoMaker Skills</code></Link>
            <Link href="#"> <code>inTerviews</code></Link>
          </div>
        </div>
        <div className="  md:flex md:flex-col p-4 text-center">
          <code className="font-bold text-[1.4em] 2xl:text-[1.20em] ">CONTACT</code>
          <div className="flex flex-col text-center w-[200px] 2xl:text-[1.50em] ">
            <Link href="#"><code>hello@satumbo.com</code></Link>
            <Link href="#"><code>+36309917135</code></Link>
          </div>
        </div>

        <div className="  md:flex md:flex-col p-4 text-center">
          <code className="font-bold text-[1.4em] 2xl:text-[1.20em] ">SOCIAL</code>
          <div
            className="flex flex-row text-center w-[200px] 2xl:text-[1.50em] gap-3 items-center justify-center 
          mt-4"
          >
            <Link target="_blank" href="https://www.instagram.com/satumbo9/">
              {React.createElement(Instagram, {
                style: FOOTER_ICON_SIZE,
              })}
            </Link>
            <Link target="_blank" href="https://www.youtube.com/@Satumbo9Hub">
              {React.createElement(Youtube, {
                style: FOOTER_ICON_SIZE,
              })}
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/edimarf-satumbo-96b725143/"
            >
              {React.createElement(Linkedin, {
                style: FOOTER_ICON_SIZE,
              })}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
