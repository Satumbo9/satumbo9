import { EDUCATION_LIST } from "@/app/Components/Data/Education";
// import { BACKGROUND_INFO } from "@/app/Components/Data/Background";
// import Card from "@/app/Components/Util/Card";
import CardItems from "@/app/Components/Util/CardItems";
import Link from "next/link";

// { BACKGROUND_INFO.map((items)=>(d
// { BACKGROUND_INFO.map((items)=>(

//   <div key={items.id}>
//   <p>{items.title}</p>
//   <p>{items.description}</p>
//   </div>

// ))}

export default function AboutPage() {
  return (
    <section
      id="ABOUT"
      className="min-h-[100vh] sm:h-screen  flex flex-col items-center"
    >
      <div className="w-full flex flex-col items-center md:items-start">
        <p className="font-bold text-[2em] md:text-[3em] text-center md:text-start flex gap-2 2xl:text-[3em]">
          Hii <span>👋</span>
        </p>
        <p className="md:w-[666px] 2xl:w-[800px] 2xl:text-[1em] text-center md:text-left">
          Edimarf Satumbo is an Angolan-born professional who has a deep passion
          for both technology and business. In 2015, Edimarf moved to Budapest
          to pursue higher education at ELTE University, where he completed a
          degree in Computer Science in 2021. This technical foundation sparked
          a keen interest in web development and other facets of the tech
          industry. After graduating, Edimarf decided to expand his expertise by
          pursuing a degree in International Business and Economy, driven by his
          entrepreneurial spirit and a passion for business strategy. This
          combination of technical knowledge and business acumen has given him a
          unique skill set, allowing him to navigate both industries with ease.
          Throughout his journey, Edimarf has lived in various places, including
          Miami and Arizona, where he embraced a nomadic lifestyle, often
          finding accommodation with existing community members.
        </p>
      </div>
      <div
        className="mt-[5em] 2xl:mt-[2em] md:mt-[6em] w-full  
      flex items-center justify-center flex-col text-center"
      >
        <p className="font-bold text-[2em] md:text-[3em] flex gap-2 2xl:text-[3em]">
          Education <span>📚</span>
        </p>

        <div
          className="flex flex-col md:flex md:flex-row 2xl:text-[1em] gap-2
        "
        >
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
      </div>
    </section>
  );
}
