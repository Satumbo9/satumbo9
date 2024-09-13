import { EDUCATION_LIST } from "@/app/Components/Data/Education";
import { BACKGROUND_INFO } from "@/app/Components/Data/Background";
import Card from "@/app/Components/Util/Card";
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
    <section id="ABOUT" className="h-[100vh] flex  flex-col justify-center ">
      <div className="w-[80vh] h-[40vh] ">
        {BACKGROUND_INFO.map((items) => (
          <Card
            id={items.id}
            title={items.title}
            description={items.description}
          />
        ))}
      </div>

      <div className="flex flex-col  items-center">
        <p className="text-[4em] font-bold">Education</p>

        <div className="flex gap-10 mt-4">
          {EDUCATION_LIST.map((items) => (
            <Link className="hover:text-[--page-links]" href={items.link}>
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
