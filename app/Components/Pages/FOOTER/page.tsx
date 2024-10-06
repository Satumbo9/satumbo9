// import satumbo9Logo from "../../Img/logo/satumbo9-logo.png";
// import Image from "next/image";
import Link from "next/link";
import { Instagram, Youtube, Linkedin } from "lucide-react";
import React from "react";
import { FOOTER_ICON_SIZE } from "../../Util/IconsStyle";
import { informationFOOTER, contactFOOTER } from "../../Data/ContactInfo";
// import { COLOR_GRAY } from "../../Const/COLORS";
export default function Footer() {
  return (
    <section
      className={`h-fit md:h-[25vh]    flex justify-center items-center bg-[yellow]  text-gray-500  `}
    >
      <div
        className="flex flex-col justify-center md:flex-row 
      md:justify-between w-full md:w-screen items-center md:items-start mx-40"
      >
        <p className="hidden font-bold">&copy; by satumbo9</p>
        <div className="  flex flex-col p-4 text-center items-center justify-center">
          <p className="font-bold text-3xl">INFORMATION</p>
          <div className="flex flex-col text-center w-fit  text-2xl ">
            {informationFOOTER.map((item) => {
              return (
                <Link href={item.href} className="mt-5" key={item.id}>
                  <p>{item.label}</p>
                </Link>
              );
            })}
          </div>
        </div>
        <div className="  md:flex md:flex-col p-4 text-center">
          <p className="font-bold text-3xl ">CONTACT</p>
          <div className="flex flex-col text-center w-fit  text-2xl ">
            {contactFOOTER.map((item) => {
              return (
                <div className="mt-5" key={item.id}>
                  <p>{item.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="  flex flex-col p-4 text-center items-center justify-center gap-2">
          <p className="font-bold text-3xl">SOCIAL</p>
          <div className="flex flex-col  md:flex-row  w-fit  text-2xl ">
            <Link
              className="mt-2 md:mr-6"
              target="_blank"
              href="https://www.instagram.com/satumbo9/"
            >
              {React.createElement(Instagram, {
                style: FOOTER_ICON_SIZE,
              })}
            </Link>
            <Link
              className="mt-2 md:mr-6"
              target="_blank"
              href="https://www.youtube.com/@Satumbo9Hub"
            >
              {React.createElement(Youtube, {
                style: FOOTER_ICON_SIZE,
              })}
            </Link>
            <Link
              className="mt-2 md:mr-6"
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
