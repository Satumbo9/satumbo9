import Image from "next/image";
import HomePage from "@/app/Components/Pages/HOME/page";
import About from "@/app/Components/Pages/ABOUT/page";
import WORK from "@/app/Components/Pages/WORK/page";
import TALK from "@/app/Components/Pages/TALK_TO_ME/page";
import NAV from "@/app/Components/Pages/NAV/page";
import FOOTER from "@/app/Components/Pages/FOOTER/page";
import { useState } from "react";

export default function Home() {
  return (
    <>
      <NAV />
      <HomePage />
      <About />
      <WORK />
      <TALK />
      <FOOTER />
    </>
  );
}
