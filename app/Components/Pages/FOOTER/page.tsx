import satumbo9Logo from "../../Img/logo/satumbo9-logo.png";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Youtube, Linkedin } from "lucide-react";
import React from "react";
import { iconStyle } from "../../Util/IconsStyle";
export default function Footer() {
  iconStyle;
  return (
    <section className="h-[25vh]  bg-[#FFFF4E]  flex justify-center items-center text-gray-600 p-4">
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
        <p className="md:hidden">&copy; by satumbo9</p>
        <div className=" hidden md:flex md:flex-col p-4 text-center items-center justify-center">
          <p className="font-bold text-[1.4em] 2xl:text-[1.20em]">
            Information
          </p>
          <div className="flex flex-col text-center w-[200px] 2xl:text-[1.20em]">
            <Link href="#">LinkedIn</Link>
            <Link href="#">Pexels</Link>
            <Link href="#">VideoMaker Skills</Link>
            <Link href="#">inTerviews</Link>
          </div>
        </div>
        <div className=" hidden md:flex md:flex-col p-4 text-center">
          <p className="font-bold text-[1.4em] 2xl:text-[1.20em] ">CONTACT</p>
          <div className="flex flex-col text-center w-[200px] 2xl:text-[1.50em]">
            <Link href="#">hello@satumbo.com</Link>
            <Link href="#">+36309917135</Link>
          </div>
        </div>

        <div className=" hidden md:flex md:flex-col p-4 text-center">
          <p className="font-bold text-[1.4em] 2xl:text-[1.20em] ">Socials</p>
          <div
            className="flex flex-row text-center w-[200px] 2xl:text-[1.50em] gap-3 items-center justify-center 
          mt-4"
          >
            <Link target="_blank" href="https://www.instagram.com/satumbo9/">
              {React.createElement(Instagram, {
                style: iconStyle,
              })}
            </Link>
            <Link target="_blank" href="https://www.youtube.com/@Satumbo9Hub">
              {React.createElement(Youtube, {
                style: iconStyle,
              })}
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/edimarf-satumbo-96b725143/"
            >
              {React.createElement(Linkedin, {
                style: iconStyle,
              })}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
