import { ART_WORK } from "@/app/Components/Data/ArtWork";
import Image from "next/image";
import CardItems from "../../Util/CardItems";
import { PROFESSIONAL_CAREER } from "@/app/Components/Data/Profession";

export default function WorkPage() {
  return (
    <section 
    
    id="WORK" 
    className=""
    // className="h-[100vh] flex flex-col justify-center"
    >
      <div 
      className="flex flex-col items-center  "
        
      >
        <p 
        className="text-[2em] text-center font-bold "
        >Art Work</p>
        <div 
        className="grid gap-4 grid-flow-row md:grid-cols-2"
        >
          {ART_WORK.map((items) => (
            <Image
              className="shadow-lg rounded ease-in-out duration-300 mb-3"
              key={items.id} 
              width={300}
              
              src={items.url}
              alt="Image of my galary"
            />
          ))}
        </div>
      </div>
      <div>
        <div

        className="flex flex-col items-center  "
        >
          <p 
          className="text-center text-[2em] font-bold"
          
          >Software Dev</p>
          <div 
          className="flex items-center justify-center gap-10 mt-1 mb-2"
          >
            {PROFESSIONAL_CAREER.map((items) => (
              <CardItems
                id={items.id}
                title={items.name}
                description={items.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
