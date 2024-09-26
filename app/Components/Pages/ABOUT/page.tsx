// import { EDUCATION_LIST } from "@/app/Components/Data/Education";
// import { BACKGROUND_INFO } from "@/app/Components/Data/Background";
// import Card from "@/app/Components/Util/Card";
// import CardItems from "@/app/Components/Util/CardItems";
// import Link from "next/link";
// import { VolumeX } from "lucide-react";
import React from "react";
// import { GENERAL_ICON_PAGE } from "../../Util/IconsStyle";

// { BACKGROUND_INFO.map((items)=>(d
// { BACKGROUND_INFO.map((items)=>(

//   <div key={items.id}>
//   <p>{items.title}</p>
//   <p>{items.description}</p>
//   </div>

// ))}

export default function AboutPage() {
  return (
    <section id="ABOUT" className="flex flex-col items-center">
      <div className="w-full flex flex-col items-center   2xl:items-start">
        <span className="font-bold text-[2em] md:text-[3em] text-center 2xl:text-start flex gap-2 2xl:text-[3em] items-center justify-center">
          <p className="font-extrabold ">ABOUT ME</p>
          <p className="">
            {/* {React.createElement(VolumeX, {
              style: GENERAL_ICON_PAGE,
            })} */}
          </p>
        </span>
        <span className=" h-fit 2xl:w-[800px] 2xl:text-[1em] text-center   2xl:text-left lg:text-[1.50em]">
          <p className="font-bold mb-4 mt-2 text-[1.30em] ">
            {" "}
            &lt;2015-2021 &gt;
          </p>
          <p className="mb-2 text-[1.0em] md:text-[1.0em] xl:text-[1.25em]">
            Edimarf Satumbo is an Angolan-born professional who has a deep
            passion for both technology and business. In 2015, Edimarf moved to
            Budapest to pursue higher education at ELTE University, where he
            completed a degree in Computer Science in 2021. This technical
            foundation sparked a keen interest in web development and other
            facets of the tech industry.
          </p>

          <p className="font-bold mb-4 mt-2 text-[1.30em] ">
            &lt;2021-2024 &gt;
          </p>

          <p className="mb-2 text-[1.0em] md:text-[1.0em] xl:text-[1.25em]">
            After graduating, Edimarf decided to expand his expertise by
            pursuing a degree in International Business and Economy, driven by
            his entrepreneurial spirit and a passion for business strategy. This
            combination of technical knowledge and business acumen has given him
            a unique skill set, allowing him to navigate both industries with
            ease. Throughout his journey, Edimarf has lived in various places,
            including Miami and Arizona, where he embraced a nomadic lifestyle,
            often finding accommodation with existing community members.
          </p>
          <p className="font-bold mb-4 mt-2 text-[1.30em]">&lt;On Going&gt;</p>
          <p className="text-[1.0em] md:text-[1.0em] xl:text-[1.25em]  ">
            His adaptability and drive to connect with diverse cultures and
            professionals reflect his open-minded and forward-thinking approach
            to life. With his diverse academic background and hands-on
            experience, Edimarf continues to explore opportunities in web
            development while maintaining a strong focus on business ventures.
            He remains committed to personal growth and is always looking for
            new ways to combine his two passions.
          </p>
        </span>
      </div>
      <div
        className="2xl:mt-[2em] w-full  
      flex items-center justify-center flex-col text-center"
      ></div>
    </section>
  );
}
