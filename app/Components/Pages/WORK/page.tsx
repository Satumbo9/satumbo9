//
// import Image from "next/image";
import CardItems from "../../Util/CardItems";
import { PROFESSIONAL_CAREER } from "@/app/Components/Data/Profession";
// import { Computer } from "lucide-react";
import React from "react";
// import { GENERAL_ICON_PAGE } from "../../Util/IconsStyle";

export default function WorkPage() {
  return (
    <section
      id="WORK"
      className="min-h-[100vh]  max:h-[150vh] sm:h-screen flex  justify-center text-center text-[yellow]"
    >
      <div className="text-center flex flex-col items-center mt-28">
        <span className="text-[2em] md:text-[2.20em] font-bold flex gap-2  2xl:text-[2.50em] mt-5 items-center justify-center">
          BACKGROUND
        </span>

        <div className="flex flex-col mt-4 md:flex-row text-[1em] md:text-[1.3em] gap-2">
          {PROFESSIONAL_CAREER.map((items) => (
            <CardItems
              key={items.id}
              id={items.id}
              title={items.name}
              description={items.description}
            />
          ))}
        </div>
        <span className="p-5 md:w-[600px] 2xl:w-[800px]  mt-30 mb-10 h-[200px] text-10 2xl:text-[1em]">
          I was a supply chain professional at{" "}
          <span className="font-bold text-[1.210em]">ExxonMobil</span> for over
          a year, specializing in SAP and logistics, where I optimized processes
          and improved efficiency. I founded Uajiza, my tech company, focusing
          on game development and innovative tech solutions that challenge the
          norm. As a developer with Umoja and FFIMOH, I crafted exceptional
          websites using Next.js and SQL for robust backends, ensuring seamless
          user experiences. My passion lies in merging technology and creativity
          to drive impactful projects and overcome challenges in the tech
          landscape.
        </span>
      </div>
    </section>
  );
}
