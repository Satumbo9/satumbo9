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
    <section id="ABOUT"
    
    className="h-[100vh]  flex flex-col items-center"
    >
      <div
      className="w-full"
      >
        <p className="font-bold text-[2em] text-center md:text-start ">Bio:</p>
        <p 
        className="md:w-[666px]"
        >
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

        </p>


      </div>
      <div
      className="mt-[5em] md:mt-[10em] w-full  flex items-center justify-center flex-col text-center">
        <p className="font-bold text-[2em]">Education</p>

        <div  
        className="flex flex-col md:flex md:flex-row 
        ">
          {EDUCATION_LIST.map((items) => (
            <Link className="lg:hover:text-[--page-links] mt-3" href={items.link}>
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
