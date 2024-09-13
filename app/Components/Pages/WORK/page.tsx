import { ART_WORK } from "@/app/Components/Data/ArtWork";
import Image from "next/image";
import CardItems from "../../Util/CardItems";
import { PROFESSIONAL_CAREER } from "@/app/Components/Data/Profession";

export default function WorkPage() {
  return (
    <section id="WORK" className="h-[100vh] flex flex-col justify-center">
      <div className="flex flex-col items-center mb-40">
        <p className="text-[4em] text-center font-bold ">Art Work</p>
        <div className="flex gap-4 ">
          {ART_WORK.map((items) => (
            <Image
              className="shadow-lg rounded ease-in-out duration-300	"
              key={items.id}
              width={300}
              height={380}
              src={items.url}
              alt="Image of my galary"
            />
          ))}
        </div>
      </div>
      <div>
        <div>
          <p className="text-center text-[4em] font-bold">Software Dev</p>
          <div className="flex items-center justify-center">
            {PROFESSIONAL_CAREER.map((items) => (
              <CardItems
                id={items.id}
                title={items.name}
                description={items.name}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
