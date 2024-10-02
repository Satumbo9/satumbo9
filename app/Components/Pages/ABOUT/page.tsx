import React from "react";
// import CardInfo from "@/app/Components/Util/CartInfo";
import CartInfo from "@/app/Components/Util/CartInfo";
import H1 from "../../Util/H1";
export default function AboutPage() {
  return (
    <section
      id="ABOUT"
      className="flex flex-col items-center xl:h-screen px-10 md:px-0 "
    >
      <div className="w-full flex flex-col items-center   ">
        <span className="font-bold text-[2em] md:text-[3em] text-center  flex gap-2 2xl:text-[3em] items-center justify-center">
          <p className="font-extrabold text-[0.90em] md:text-[1em] mb-5 drop-shadow-md">
            ABOUT ME
          </p>
        </span>

        <div className="  2xl:w-[800px] 2xl:text-[1em] text-center flex items-center flex-col    lg:text-[1.50em] ">
          <H1> &lt;2015-2021 &gt;</H1>

          <CartInfo className="mb-2 text-[1.0em] md:text-[1.0em] xl:text-[1.25em] shadow-md p-2 ">
            Edimarf Satumbo is an Angolan-born professional who has a deep
            passion for both technology and business. In 2015, Edimarf moved to
            Budapest to pursue higher education at ELTE University, where he
            completed a degree in Computer Science in 2021. This technical
            foundation sparked a keen interest in web development and other
            facets of the tech industry.
          </CartInfo>

          <H1>&lt;2021-2024 &gt;</H1>

          <CartInfo className="mb-2 text-[1.0em] md:text-[1.0em] xl:text-[1.25em] shadow-md p-2 ">
            After graduating, Edimarf decided to expand his expertise by
            pursuing a degree in International Business and Economy, driven by
            his entrepreneurial spirit and a passion for business strategy. This
            combination of technical knowledge and business acumen has given him
            a unique skill set, allowing him to navigate both industries with
            ease. Throughout his journey, Edimarf has lived in various places,
            including Miami and Arizona, where he embraced a nomadic lifestyle,
            often finding accommodation with existing community members.
          </CartInfo>
          <H1>&lt;On Going&gt;</H1>
          <CartInfo className="text-[1.0em] md:text-[1.0em] xl:text-[1.25em]  shadow-md p-2  ">
            His adaptability and drive to connect with diverse cultures and
            professionals reflect his open-minded and forward-thinking approach
            to life. With his diverse academic background and hands-on
            experience, Edimarf continues to explore opportunities in web
            development while maintaining a strong focus on business ventures.
            He remains committed to personal growth and is always looking for
            new ways to combine his two passions.
          </CartInfo>
        </div>
      </div>
    </section>
  );
}
