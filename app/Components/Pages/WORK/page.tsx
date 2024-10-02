//
// import Image from "next/image";
import CardItems from "../../Util/CardItems";
import { PROFESSIONAL_CAREER } from "@/app/Components/Data/Profession";
import Link from "next/link";
// import { Computer } from "lucide-react";
import React from "react";
import { EDUCATION_LIST } from "../../Data/Education";
// import { GENERAL_ICON_PAGE } from "../../Util/IconsStyle";

export default function WorkPage() {
  return (
    <section
      id="WORK"
      className="h-screen flex flex-col justify-center items-center text-center  "
    >
      <p className="font-extrabold text-[2em] md:text-[2.20em] flex gap-2 2xl:text-[2.50em] items-center justify-center drop-shadow-md">
        EDUCATION
      </p>
      <div className="flex flex-col md:flex md:flex-row 2xl:text-[1em] gap-2 h-fit">
        {EDUCATION_LIST.map((items) => (
          <Link
            target="_blank"
            key={items.id}
            className="lg:hover:text-[--page-links] mt-3 
              md:text-[1.3em]"
            href={items.link}
          >
            <CardItems
              id={items.id}
              title={items.name}
              description={items.description}
            />
          </Link>
        ))}
      </div>
      <div className="text-center flex flex-col items-center">
        <p className="text-[2em] md:text-[2.20em] font-bold flex gap-2  2xl:text-[2.50em] mt-5 items-center justify-center drop-shadow-md">
          BACKGROUND
        </p>

        <div className="flex flex-col md:flex md:flex-row 2xl:text-[1em] gap-2 h-fit">
          {PROFESSIONAL_CAREER.map((items) => (
            <Link
              target="_blank"
              key={items.id}
              className="lg:hover:text-[--page-links] mt-3 
              md:text-[1.3em]"
              href={items.link}
            >
              <CardItems
                key={items.id}
                id={items.id}
                title={items.name}
                description={items.description}
              />
            </Link>
          ))}
        </div>
        {/* <span className="p-5 md:w-[600px] 2xl:w-[800px] mt-30 mb-10 text-10 2xl:text-[1em] h-fit">
          <p>
            I was a supply chain professional at ExxonMobil for over a year,
            specializing in SAP and logistics, where I optimized processes and
            improved efficiency. I founded Uajiza, my tech company, focusing on
            game development and innovative tech solutions that challenge the
            norm. As a developer with Umoja and FFIMOH, I crafted exceptional
            websites using Next.js and SQL for robust backends, ensuring
            seamless user experiences. My passion lies in merging technology and
            creativity to drive impactful projects and overcome challenges in
            the tech landscape.
          </p>
        </span> */}
      </div>
    </section>
  );
}
